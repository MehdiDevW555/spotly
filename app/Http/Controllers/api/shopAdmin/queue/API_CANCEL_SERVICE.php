<?php

namespace App\Http\Controllers\api\shopAdmin\queue;

use App\Events\TicketStatusChanged;
use App\Http\Controllers\Controller;
use App\Models\customerDevices\CustomerDevices;
use App\Models\tickets\Tickets;
use App\Services\FCMNotification;
use App\Services\FCMNotificationMessages;
use Illuminate\Http\Request;

class API_CANCEL_SERVICE extends Controller
{
    public function cancelService(
        Request $request,
        FCMNotification $fcmNotification
    ) {
        /*
        |--------------------------------------------------------------------------
        | 1. جلب التذكرة الحالية
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
        | 2. إلغاء التذكرة الحالية
        |--------------------------------------------------------------------------
        */

        $ticket->update([
            'status' => 'cancelled'
        ]);


        /*
        |--------------------------------------------------------------------------
        | 3. إرسال إشعار إلغاء الدور للزبون الحالي
        |--------------------------------------------------------------------------
        */

        $device = CustomerDevices::where(
            'ticket_id',
            $ticket->id
        )->first();

        if ($device && $device->fcm_token) {

            $message = FCMNotificationMessages::get(
                'turn_cancelled',
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
                    'status' => 'cancelled',
                ]
            );
        }


        /*
        |--------------------------------------------------------------------------
        | 4. البحث عن التذكرة التالية
        |--------------------------------------------------------------------------
        */

        $nextTicket = Tickets::where(
            'shop_id',
            $ticket->shop_id
        )
            ->whereDate(
                'created_at',
                today()
            )
            ->where(
                'status',
                'waiting'
            )
            ->orderBy(
                'ticket_number'
            )
            ->first();


        /*
        |--------------------------------------------------------------------------
        | 5. تشغيل التذكرة التالية تلقائيًا
        |--------------------------------------------------------------------------
        */

        if ($nextTicket) {

            // $nextTicket->update([
            //     'status' => 'serving'
            // ]);


            /*
            |--------------------------------------------------------------------------
            | 6. جلب جهاز الزبون التالي
            |--------------------------------------------------------------------------
            */

            $nextDevice = CustomerDevices::where(
                'ticket_id',
                $nextTicket->id
            )->first();


            /*
            |--------------------------------------------------------------------------
            | 7. إرسال إشعار "حان دورك"
            |--------------------------------------------------------------------------
            */

            if ($nextDevice && $nextDevice->fcm_token) {

                $message = FCMNotificationMessages::get(
                    'turn_called',
                    null,
                    $nextTicket->ticket_number
                );

                $fcmNotification->sendToToken(
                    $nextDevice->fcm_token,
                    $message['title'],
                    $message['body'],
                    [
                        'ticket_id' => (string) $nextTicket->id,
                        'ticket_uuid' => (string) $nextTicket->ticket_uuid,
                        'ticket_number' => (string) $nextTicket->ticket_number,
                        'status' => 'serving',
                    ]
                );
            }


            /*
            |--------------------------------------------------------------------------
            | 8. تحديث واجهة التذكرة التالية عبر Reverb
            |--------------------------------------------------------------------------
            */

            // event(
            //     new TicketStatusChanged($nextTicket)
            // );
        }


        /*
        |--------------------------------------------------------------------------
        | 9. تحديث واجهة التذكرة الملغاة عبر Reverb
        |--------------------------------------------------------------------------
        */

        event(
            new TicketStatusChanged($ticket)
        );


        /*
        |--------------------------------------------------------------------------
        | 10. Response
        |--------------------------------------------------------------------------
        */

        return response()->json([
            'success' => true,
            'message' => 'Service cancelled'
        ]);
    }
}
