<?php

namespace App\Http\Controllers\api\shopAdmin\queue;

use App\Events\TicketStatusChanged;
use App\Http\Controllers\Controller;
use App\Models\customerDevices\CustomerDevices;
use App\Models\tickets\Tickets;
use App\Services\FCMNotification;
use App\Services\FCMNotificationMessages;
use App\Services\QueueNotificationService;
use Illuminate\Http\Request;

class API_COMPLETE_SERVICE extends Controller
{
    public function completeService(
        Request $request,
        QueueNotificationService $queueNotificationService,
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
        | 2. إنهاء خدمة التذكرة الحالية
        |--------------------------------------------------------------------------
        */

        $ticket->update([
            'status' => 'completed'
        ]);


        /*
        |--------------------------------------------------------------------------
        | 3. إرسال إشعار للزبون الحالي
        |--------------------------------------------------------------------------
        */

        $device = CustomerDevices::where(
            'ticket_id',
            $ticket->id
        )->first();

        if ($device && $device->fcm_token) {

            $message = FCMNotificationMessages::get(
                'turn_completed'
            );

            $fcmNotification->sendToToken(
                $device->fcm_token,
                $message['title'],
                $message['body'],
                [
                    'ticket_id' => (string) $ticket->id,
                    'ticket_uuid' => (string) $ticket->ticket_uuid,
                    'ticket_number' => (string) $ticket->ticket_number,
                    'status' => 'completed',
                    'url' => 'https://spotlly.com/q/' . \Illuminate\Support\Facades\DB::connection('spotly')->table('shops')->where('id', $ticket->shop_id)->value('uuid'),
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
            | 8. تحديث واجهة الزبون التالي عبر Reverb
            |--------------------------------------------------------------------------
            */

            // event(
            //     new TicketStatusChanged($nextTicket)
            // );
        }


        /*
        |--------------------------------------------------------------------------
        | 9. فحص الطابور
        |--------------------------------------------------------------------------
        |
        | هنا يتم حساب الأشخاص الذين بقيوا أمام كل تذكرة
        | وإرسال إشعار عند الوصول إلى:
        |
        | 3 أشخاص
        | 2 أشخاص
        | 1 شخص
        |
        */

        $queueNotificationService->checkNearTurn( $ticket);


        /*
        |--------------------------------------------------------------------------
        | 10. تحديث واجهة التذكرة الحالية عبر Reverb
        |--------------------------------------------------------------------------
        */

        event(
            new TicketStatusChanged($ticket)
        );


        /*
        |--------------------------------------------------------------------------
        | 11. Response
        |--------------------------------------------------------------------------
        */

        return response()->json([
            'success' => true,
            'message' => 'Service completed'
        ]);
    }
}
