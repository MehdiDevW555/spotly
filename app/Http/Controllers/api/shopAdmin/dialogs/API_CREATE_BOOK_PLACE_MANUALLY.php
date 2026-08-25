<?php

namespace App\Http\Controllers\api\shopAdmin\dialogs;

use App\Http\Controllers\Controller;
use App\Events\TicketCreated;
use App\Models\customers\Customers;
use App\Models\services\Services;
use App\Models\shopAdmin\ShopAdmin;
use App\Models\tickets\Tickets;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;

class API_CREATE_BOOK_PLACE_MANUALLY extends Controller
{
    public function createBookPlaceManually(Request $request)
    {
        // ============================================================
        // 1. Validation
        // ============================================================

        $validator = Validator::make(
            $request->all(),
            [
                'full_name'  => 'required|string|max:255',
                'phone'      => 'required|string|size:10',
                'service_id' => 'nullable|integer',
            ],
            [
                'full_name.required' => 'اسم العميل مطلوب.',
                'full_name.string'   => 'اسم العميل يجب أن يكون نصاً.',
                'full_name.max'      => 'اسم العميل لا يجب أن يتجاوز 255 حرفاً.',

                'phone.required' => 'رقم الهاتف مطلوب.',
                'phone.string'   => 'رقم الهاتف غير صالح.',
                'phone.size'     => 'رقم الهاتف يجب أن يتكون من 10 أرقام.',

                'service_id.integer' => 'الخدمة غير صالحة.',
            ]
        );

        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'message' => 'يوجد خطأ في البيانات المدخلة.',
                'errors'  => $validator->errors(),
            ], 422);
        }


        // ============================================================
        // 2. المستخدم المصادق عليه
        // ============================================================

        $user = $request->user();

        if (!$user) {
            return response()->json([
                'success' => false,
                'message' => 'غير مصرح لك بتنفيذ هذا الطلب.',
            ], 401);
        }


        // ============================================================
        // 3. الحصول على المحل الخاص بالمستخدم
        // ============================================================

        $shop = ShopAdmin::where('user_id', $user->id)->first();

        if (!$shop) {
            return response()->json([
                'success' => false,
                'message' => 'لم يتم العثور على المحل.',
            ], 404);
        }


        // ============================================================
        // 4. التحقق من الخدمة
        // ============================================================

        $hasServices = Services::where('shop_id', $shop->id)
            ->where('status', 'active')
            ->exists();

        $service = null;

        if ($hasServices) {

            if (!$request->service_id) {

                return response()->json([
                    'success' => false,
                    'message' => 'يرجى اختيار الخدمة.',
                    'errors' => [
                        'service_id' => [
                            'يرجى اختيار الخدمة.'
                        ]
                    ]
                ], 422);
            }

            $service = Services::where('id', $request->service_id)
                ->where('shop_id', $shop->id)
                ->where('status', 'active')
                ->first();

            if (!$service) {

                return response()->json([
                    'success' => false,
                    'message' => 'يرجى اختيار الخدمة.',
                    'errors' => [
                        'service_id' => [
                            'الخدمة مطلوبة، يرجى اختيار الخدمة.'
                        ]
                    ]
                ], 422);
            }
        }


        // ============================================================
        // 5. إنشاء أو الحصول على العميل
        // ============================================================

        $customer = Customers::firstOrCreate(
            [
                'phone' => $request->phone,
            ],
            [
                'name' => $request->full_name,
            ]
        );


        // تحديث الاسم إذا كان العميل موجودًا مسبقًا
        if ($customer->name !== $request->full_name) {
            $customer->update([
                'name' => $request->full_name,
            ]);
        }


        // ============================================================
        // 6. رقم التذكرة التالي لهذا اليوم
        // ============================================================

        $lastTicket = Tickets::where('shop_id', $shop->id)
            ->whereDate('created_at', today())
            ->max('ticket_number');

        $ticketNumber = $lastTicket
            ? $lastTicket + 1
            : 1;


        // ============================================================
        // 7. إنشاء التذكرة اليدوية
        // ============================================================

        $ticket = Tickets::create([
            'ticket_uuid' => Str::uuid(),

            'shop_id' => $shop->id,

            'service_id' => $service?->id,

            'customer_id' => $customer->id,

            'ticket_number' => $ticketNumber,

            'status' => 'waiting',

            // مهم: هذه التذكرة أنشأها Shop Admin
            'created_by' => 'manual',

            'device_of_customer' => json_encode([
                'type' => 'manual',
                'created_by_user_id' => $user->id,
                'ip' => $request->ip(),
                'user_agent' => $request->userAgent(),
            ]),
        ]);


        // ============================================================
        // 8. Broadcast
        // ============================================================

        event(new TicketCreated($ticket));


        // ============================================================
        // 9. Response
        // ============================================================

        return response()->json([
            'success' => true,

            'message' => 'تم إصدار التذكرة بنجاح.',

            'ticket_id' => $ticket->id,

            'ticket_uuid' => $ticket->ticket_uuid,

            'ticket_number' => $ticket->ticket_number,

            'customer_name' => $customer->name,

            'customer_phone' => $customer->phone,

            'service_id' => $service?->id,

            'service_name' => $service?->name,

            'status' => $ticket->status,

            'created_by' => $ticket->created_by,
        ], 201);
    }
}
