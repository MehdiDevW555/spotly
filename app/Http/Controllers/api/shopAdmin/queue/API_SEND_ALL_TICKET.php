<?php

namespace App\Http\Controllers\api\shopAdmin\queue;

use App\Http\Controllers\Controller;
use App\Models\tickets\Tickets;
use Illuminate\Http\Request;

class API_SEND_ALL_TICKET extends Controller
{
    public function getAllTicket(Request $request)
    {
        $idShop = $request->idShop;

        $tickets = Tickets::with([
            'shop',
            'customer',
            'service',
        ])
            ->where('shop_id', $idShop)
            ->whereDate('created_at', today())
            ->where('status', 'waiting')
            ->orderBy('id', 'asc')
            ->get();

        return response()->json([
            'success' => true,
            'tickets' => $tickets
        ]);
    }
}
