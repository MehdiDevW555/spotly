<?php

namespace App\Http\Controllers\api\shopAdmin\createService;

use App\Http\Controllers\Controller;
use App\Models\services\Services;
use App\Models\shopAdmin\ShopAdmin;
use Illuminate\Http\Request;

class API_SEND_SERVICES extends Controller
{
    // public function getServices (Request $request){
    //     $idShop = $request->idShop;
    //     $uuid = $request->uuid;
    //      $services = Services::where('shop_id', $idShop)
    //         ->orderBy('id', 'desc')
    //         ->get();

    //     return response()->json([
    //         'success' => true,
    //         'services' => $services
    //     ]);
    // }


public function getServices(Request $request)
    {
        $uuid = $request->uuid;
        $shop = ShopAdmin::where('uuid', $uuid)->firstOrFail();

        $services = Services::where('shop_id', $shop->id)
            ->orderBy('id', 'desc')
            ->get();

        return response()->json([
            'success' => true,
            'shop' => $shop,
            'services' => $services
        ]);
    }
}
