<?php

namespace App\Http\Controllers\api\users;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\customerDevices\CustomerDevices;
use App\Models\tickets\Tickets;
use Illuminate\Support\Facades\Validator;

class API_SAVE_FCM_TOKEN extends Controller
{





    public function save(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'ticket_id' => 'required|integer|exists:spotly.tickets,id',
            'fcm_token' => 'required|string',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'message' => 'بيانات غير صالحة.',
                'errors' => $validator->errors(),
            ], 422);
        }

        $device = CustomerDevices::updateOrCreate(
            [
                'ticket_id' => $request->ticket_id,
            ],
            [
                'fcm_token' => $request->fcm_token,
                'near_turn_notified' => false,
                'near_turn_last_count' => null,
            ]
        );

        return response()->json([
            'success' => true,
            'message' => 'FCM token saved successfully',
            'device_id' => $device->id,
            'ticket_id' => $device->ticket_id,
        ]);
    }
}





// public function save(Request $request)
    // {
    //     $request->validate([
    //         'ticket_id' => 'required|integer',
    //         'fcm_token' => 'required|string',
    //     ]);

    //     CustomerDevices::updateOrCreate(
    //         [
    //             'ticket_id' => $request->ticket_id,
    //         ],
    //         [
    //             'fcm_token' => $request->fcm_token,
    //         ]
    //     );

    //     return response()->json([
    //         'success' => true,
    //     ]);
    // }
