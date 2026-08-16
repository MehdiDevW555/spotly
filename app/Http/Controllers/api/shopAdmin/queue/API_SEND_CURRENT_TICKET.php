<?php

namespace App\Http\Controllers\api\shopAdmin\queue;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\tickets\Tickets;

class API_SEND_CURRENT_TICKET extends Controller
{



    public function getCurrentTicket(Request $request)
    {
        $idShop = $request->idShop;

        $ticket = Tickets::with([
            'customer',
            'service',
        ])
            ->where('shop_id', $idShop)
            ->whereDate('created_at', today())
            ->whereIn('status', ['serving', 'waiting'])
            ->orderByRaw("
        CASE
            WHEN status = 'serving' THEN 1
            WHEN status = 'waiting' THEN 2
        END
    ")
            ->orderBy('id', 'asc')
            ->first();


        return response()->json([
            'success' => true,
            'ticket' => $ticket
        ]);
    }








    // public function getCurrentTicket(Request $request)
    // {
    //     $idShop = $request->idShop;

    //     $ticket = Tickets::with([
    //         'customer',
    //         'service',
    //     ])
    //         ->where('shop_id', $idShop)
    //         ->whereDate('created_at', today())
    //         ->where('status', 'serving')
    //         ->first();

    //     return response()->json([
    //         'success' => true,
    //         'ticket' => $ticket
    //     ]);
    // }
}
