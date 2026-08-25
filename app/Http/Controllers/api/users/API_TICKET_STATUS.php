<?php

namespace App\Http\Controllers\api\users;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\tickets\Tickets;

class API_TICKET_STATUS extends Controller
{
    public function check($ticket_uuid)
    {
        $ticket = Tickets::with([
            'customer',
            'service'
        ])
            ->where('ticket_uuid', $ticket_uuid)
            ->first();

        if (!$ticket) {
            return response()->json([
                'active' => false,
                'status' => 'not_found'
            ]);
        }

        if (
            $ticket->created_at->toDateString()
            !== now()->toDateString()
        ) {
            return response()->json([
                'active' => false,
                'status' => 'expired'
            ]);
        }


        if (
            $ticket->status === 'waiting' ||
            $ticket->status === 'called' ||
            $ticket->status === 'serving'
        ) {


            // عدد الأشخاص الذين قبل هذا العميل
            $peopleBeforeMe = Tickets::where('shop_id', $ticket->shop_id)
                ->whereDate('created_at', today())
                ->where('status', 'waiting')
                ->where('ticket_number', '<', $ticket->ticket_number)
                ->count();


            return response()->json([
                'active' => true,
                'status' => $ticket->status,
                'ticket_number' => $ticket->ticket_number,
                'people_before_me' => $peopleBeforeMe,

                'customer' => $ticket
            ]);
        }



        return response()->json([
            'active' => false,
            'status' => $ticket->status
        ]);
    }
}
