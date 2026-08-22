<?php

namespace App\Http\Controllers\api\shopAdmin\queue;

use App\Events\TicketStatusChanged;
use App\Http\Controllers\Controller;
use App\Models\customerDevices\CustomerDevices;
use App\Models\tickets\Tickets;
use App\Services\FCMNotification;
use App\Services\FCMNotificationMessages;
use Illuminate\Http\Request;

class API_START_SERVICE extends Controller
{
    public function startService(
        Request $request,
        FCMNotification $fcmNotification
    ) {
        /*
        |--------------------------------------------------------------------------
        | 1. جلب التذكرة
        |--------------------------------------------------------------------------
        */

        $ticket = Tickets::where(
            'id',
            $request->idTicket
        )->first();

        if (!$ticket) {
            return response()->json([
                'success' => false,
                'message' => 'Ticket not found'
            ], 404);
        }


        /*
        |--------------------------------------------------------------------------
        | 2. تغيير حالة التذكرة إلى قيد الخدمة
        |--------------------------------------------------------------------------
        */

        $ticket->update([
            'status' => 'serving'
        ]);


        /*
        |--------------------------------------------------------------------------
        | 3. جلب جهاز الزبون
        |--------------------------------------------------------------------------
        */

        $device = CustomerDevices::where(
            'ticket_id',
            $ticket->id
        )->first();


        /*
        |--------------------------------------------------------------------------
        | 4. إرسال إشعار "حان دورك"
        |--------------------------------------------------------------------------
        */

        if ($device && $device->fcm_token) {

            $message = FCMNotificationMessages::get(
                'service_started',
                null,
                $ticket->ticket_number
            );

            $fcmNotification->sendToToken(
                $device->fcm_token,
                $message['title'],
                $message['body'],
                [
                    'ticket_id' => (string) $ticket->id,
                    'ticket_uuid' => (string) $ticket->ticket_uuid,
                    'ticket_number' => (string) $ticket->ticket_number,
                    'status' => 'serving',
                ]
            );
        }


        /*
        |--------------------------------------------------------------------------
        | 5. تحديث واجهة الزبون عبر Reverb
        |--------------------------------------------------------------------------
        */

        event(
            new TicketStatusChanged($ticket)
        );


        /*
        |--------------------------------------------------------------------------
        | 6. Response
        |--------------------------------------------------------------------------
        */

        return response()->json([
            'success' => true,
            'message' => 'Service started'
        ]);
    }
}
