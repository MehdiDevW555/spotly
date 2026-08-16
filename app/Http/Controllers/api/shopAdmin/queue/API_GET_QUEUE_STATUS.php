<?php

namespace App\Http\Controllers\api\ShopAdmin\queue;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\shopAdmin\ShopAdmin;

class API_GET_QUEUE_STATUS extends Controller
{
    public function getQueueStatus(Request $request)
    {
        $shop = ShopAdmin::findOrFail(
            $request->idShop
        );

        return response()->json([
            'success' => true,
            'queue_open' => $shop->queue_open
        ]);
    }
}
