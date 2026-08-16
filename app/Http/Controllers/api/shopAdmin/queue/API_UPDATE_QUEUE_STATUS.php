<?php

namespace App\Http\Controllers\api\shopAdmin\queue;

use App\Events\QueueStatusChanged;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\shopAdmin\ShopAdmin;

class API_UPDATE_QUEUE_STATUS extends Controller
{
    public function updateQueueStatus(Request $request)
    {
        $request->validate([
            'idShop' => 'required',
            'queueOpen' => 'required|boolean',
        ]);

        $shop = ShopAdmin::findOrFail(
            $request->idShop
        );

        $shop->queue_open =
            $request->queueOpen;

        $shop->save();
        event(new QueueStatusChanged(
            $shop->id,
            $shop->queue_open
        ));

        return response()->json([
            'success' => true,
            'message' => $shop->queue_open
                ? 'تم فتح الطابور'
                : 'تم إغلاق الطابور',
            'queue_open' => $shop->queue_open
        ]);
    }
}
