<?php

namespace App\Http\Controllers\api\shopAdmin\queue;

use App\Events\TicketStatusChanged;
use App\Http\Controllers\Controller;
use App\Models\tickets\Tickets;
use Illuminate\Http\Request;

class API_CANCEL_SERVICE extends Controller
{
    public function cancelService(Request $request)
    {
        $ticket = Tickets::where('id', $request->idTicket)
            ->first();

        if (!$ticket) {
            return response()->json([
                'success' => false,
                'message' => 'Ticket not found'
            ], 404);
        }
        $ticket->update([
            'status' => 'cancelled'
            ]);
            event(new TicketStatusChanged($ticket));

        return response()->json([
            'success' => true,
            'message' => 'Service cancelled'
        ]);
    }
}
