<?php

namespace App\Http\Controllers\api\users;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\shopAdmin\ShopAdmin;
use App\Models\tickets\Tickets;

class API_SEND_SHOP_QUEUE extends Controller
{
    public function getShopQueueStatus(Request $request)
    {
        $uuid = $request->uuid;

        $shop = ShopAdmin::where('uuid', $uuid)->first();

        if (!$shop) {
            return response()->json([
                'success' => false,
                'message' => 'Shop not found'
            ], 404);
        }

        // آخر تذكرة تم إنشاؤها اليوم
        $lastTicket = Tickets::with([
            'customer',
            'service'
        ])
            ->where('shop_id', $shop->id)
            ->whereDate('created_at', today())
            ->where('status', '!=', 'cancelled')
            ->latest('ticket_number')
            ->first();

        // عدد التذاكر التي تنتظر فقط
        $waitingCount = Tickets::where('shop_id', $shop->id)
            ->whereDate('created_at', today())
            ->where('status', 'waiting')
            ->count();

        // التذكرة التي تتم خدمتها الآن
        $currentTicket = Tickets::where('shop_id', $shop->id)
            ->whereDate('created_at', today())
            ->where('status', 'serving')
            ->first();

        // آخر تذكرة انتهت خدمتها
        $lastServedTicket = Tickets::where('shop_id', $shop->id)
            ->whereDate('created_at', today())
            ->where('status', 'completed')
            ->latest('ticket_number')
            ->first();

        return response()->json([
            'success' => true,

            // آخر رقم تذكرة تم إنشاؤها
            'last_ticket_number' =>
            $lastTicket?->ticket_number ?? null,
            // $lastTicket,
            'queue_open' => $shop->queue_open,
            // عدد المنتظرين
            'waiting_count' =>
            $waitingCount,

            // التذكرة التي تتم خدمتها الآن
            'current_number' =>
            $currentTicket?->ticket_number ?? null,

            // آخر تذكرة تمت خدمتها
            'last_served_number' =>
            $lastServedTicket?->ticket_number ?? null,

            // آخر شخص قام بالحجز
            'last_customer' => $lastTicket ? [
                'name' => $lastTicket->customer?->name,
                'phone' => $lastTicket->customer?->phone,
                'service' => $lastTicket->service,
            ] : null,
        ]);
    }
}




























    // public function getShopQueueStatus(Request $request)
    // {
    //     $uuid = $request->uuid;
    //     $shop = ShopAdmin::where('uuid', $uuid)->first();

    //     if (!$shop) {
    //         return response()->json([
    //             'success' => false,
    //             'message' => 'Shop not found'
    //         ], 404);
    //     }

    //     $lastTicket = Tickets::where('shop_id', $shop->id)
    //         ->latest('id')
    //         ->first();

    //     $waitingCount = Tickets::where('shop_id', $shop->id)
    //         ->where('status', 'waiting')
    //         ->count();

    //     return response()->json([
    //         'success' => true,

    //         'last_ticket_number' =>
    //             $lastTicket?->ticket_number ?? 0,

    //         'waiting_count' =>
    //             $waitingCount,
    //     ]);
    // }
