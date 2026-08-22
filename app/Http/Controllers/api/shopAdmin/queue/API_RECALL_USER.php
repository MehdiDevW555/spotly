<?php

namespace App\Http\Controllers\api\shopAdmin\queue;

use App\Http\Controllers\Controller;
use App\Models\customerDevices\CustomerDevices;
use App\Models\tickets\Tickets;
use App\Services\FCMNotification;
use App\Services\FCMNotificationMessages;
use Illuminate\Http\Request;

class API_RECALL_USER extends Controller
{
    public function recallUser(
        Request $request,
        FCMNotification $fcmNotification
    ) {

        // 1. التحقق من idTicket
        $request->validate([
            'idTicket' => 'required|integer',
        ]);

        // 2. جلب التذكرة مباشرة
        $ticket = Tickets::find($request->idTicket);

        if (!$ticket) {
            return response()->json([
                'success' => false,
                'message' => 'Ticket not found',
            ], 404);
        }

        // 3. جلب جهاز الزبون بواسطة ticket_id
        $device = CustomerDevices::where(
            'ticket_id',
            $ticket->id
        )->first();

        if (!$device) {
            return response()->json([
                'success' => false,
                'message' => 'Customer device not found',
                'ticket_id' => $ticket->id,
            ], 404);
        }

        // 4. التأكد من وجود FCM Token
        if (empty($device->fcm_token)) {
            return response()->json([
                'success' => false,
                'message' => 'FCM token is empty',
                'ticket_id' => $ticket->id,
                'device_id' => $device->id,
            ], 404);
        }

        // 5. تجهيز رسالة الإشعار
        $message = FCMNotificationMessages::get(
            'turn_called',
            null,
            $ticket->ticket_number
        );

        // 6. إرسال الإشعار
        $sent = $fcmNotification->sendToToken(
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

        if (!$sent) {
            return response()->json([
                'success' => false,
                'message' => 'Notification could not be sent',
            ], 500);
        }

        // 7. نجاح
        return response()->json([
            'success' => true,
            'message' => 'Customer recalled successfully',
        ]);
    }
}
