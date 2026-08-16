<?php

namespace App\Http\Controllers\api\shopAdmin\queue;

use App\Events\TicketStatusChanged;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\tickets\Tickets;

class API_START_SERVICE extends Controller
{
    public function startService(Request $request)
    {

        $ticket = Tickets::where('id', $request->idTicket)
            ->first();


        if (!$ticket) {
            return response()->json([
                'success' => false,
                'message' => 'Ticket not found'
            ],404);
        }


        // تغيير حالة التذكرة إلى قيد الخدمة
        $ticket->update([
            'status' => 'serving'
        ]);

        event(new TicketStatusChanged($ticket));
        
        return response()->json([
            'success' => true,
            'message' => 'Service started',
            // 'ticket' => $ticket
        ]);

    }
}
