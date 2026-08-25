<?php

namespace App\Http\Controllers\api\users;

use App\Http\Controllers\Controller;
use App\Events\TicketCreated;
use App\Models\customerDevices\CustomerDevices;
use App\Models\shopAdmin\ShopAdmin;
use App\Models\customers\Customers;
use App\Models\tickets\Tickets;
use App\Models\services\Services;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;

class API_RECEIVE_BOOK_PLACE extends Controller
{
    public function sendBookPlace(Request $request)
    {
        $validator = Validator::make(
            $request->all(),
            [
                'uuid'       => 'required|string',
                'full_name'  => 'required|string|max:255',
                'phone'      => 'required|string|size:10',
                'serviceId'  => 'nullable|integer',
                'fcm_token'  => 'nullable|string',
            ],
            [
                'uuid.required'       => 'معرف المحل مطلوب.',
                'uuid.string'         => 'معرف المحل غير صالح.',
                'full_name.required'  => 'الاسم الكامل مطلوب.',
                'full_name.string'    => 'الاسم الكامل يجب أن يكون نصاً.',
                'full_name.max'       => 'الاسم الكامل لا يجب أن يتجاوز 255 حرفاً.',
                'phone.required'      => 'رقم الهاتف مطلوب.',
                'phone.string'        => 'رقم الهاتف غير صالح.',
                'phone.size'          => 'رقم الهاتف يجب أن يتكون من 10 أرقام.',
            ]
        );

        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'message' => 'يوجد خطأ في البيانات المدخلة.',
                'errors'  => $validator->errors(),
            ], 422);
        }

        // البحث عن المحل
        $shop = ShopAdmin::where('uuid', $request->uuid)->first();

        if (!$shop) {
            return response()->json([
                'success' => false,
                'message' => 'Shop not found',
            ], 404);
        }

        // ============================================================
        // التحقق من الخدمات
        // ============================================================

        $hasServices = Services::where('shop_id', $shop->id)
            ->where('status', 'active')
            ->exists();

        $service = null;

        if ($hasServices) {

            // إذا كان المحل لديه خدمات، يجب اختيار خدمة
            if (!$request->filled('serviceId')) {
                return response()->json([
                    'success' => false,
                    'message' => 'يرجى اختيار الخدمة.',
                    'errors' => [
                        'serviceId' => [
                            'الخدمة مطلوبة، يرجى اختيار الخدمة.'
                        ]
                    ]
                ], 422);
            }

            // التأكد أن الخدمة موجودة وتابعة لهذا المحل وفعالة
            $service = Services::where('id', $request->serviceId)
                ->where('shop_id', $shop->id)
                ->where('status', 'active')
                ->first();

            if (!$service) {
                return response()->json([
                    'success' => false,
                    'message' => 'الخدمة المحددة غير موجودة أو غير متاحة.',
                ], 404);
            }
        }

        // ============================================================
        // إنشاء / الحصول على العميل
        // ============================================================

        $customer = Customers::firstOrCreate(
            ['phone' => $request->phone],
            ['name' => $request->full_name]
        );

        // ============================================================
        // رقم التذكرة
        // ============================================================

        $lastTicket = Tickets::where('shop_id', $shop->id)
            ->whereDate('created_at', today())
            ->max('ticket_number');

        $ticketNumber = $lastTicket ? $lastTicket + 1 : 1;

        // ============================================================
        // إنشاء التذكرة
        // ============================================================

        $ticket = Tickets::create([
            'ticket_uuid'       => Str::uuid(),
            'shop_id'           => $shop->id,
            'service_id'        => $service?->id,
            'customer_id'       => $customer->id,
            'ticket_number'     => $ticketNumber,
            'status'            => 'waiting',
            'device_of_customer' => json_encode([
                'ip'         => $request->ip(),
                'user_agent' => $request->userAgent(),
            ]),
        ]);

        // ============================================================
        // حفظ FCM Token
        // ============================================================

        if ($request->filled('fcm_token')) {

            try {

                $device = CustomerDevices::where(
                    'ticket_id',
                    $ticket->id
                )->first();

                if ($device) {

                    $device->update([
                        'fcm_token'           => $request->fcm_token,
                        'near_turn_last_count' => null,
                    ]);

                } else {

                    CustomerDevices::create([
                        'ticket_id'            => $ticket->id,
                        'fcm_token'            => $request->fcm_token,
                        'near_turn_notified'   => false,
                        'near_turn_last_count' => null,
                    ]);
                }

            } catch (\Throwable $e) {

                // لا نوقف إنشاء التذكرة إذا فشل حفظ FCM
            }
        }

        // ============================================================
        // Broadcast إلى ShopAdmin
        // ============================================================

        event(new TicketCreated($ticket));

        // ============================================================
        // Response
        // ============================================================

        return response()->json([
            'success'       => true,
            'ticket_id'     => $ticket->id,
            'ticket_uuid'   => $ticket->ticket_uuid,
            'ticket_number' => $ticket->ticket_number,
            'customer_name' => $customer->name,
            'service_name'  => $service?->name,
        ]);
    }
}