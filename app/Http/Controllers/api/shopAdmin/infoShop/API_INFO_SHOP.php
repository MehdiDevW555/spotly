<?php

namespace App\Http\Controllers\api\shopAdmin\infoShop;

use App\Http\Controllers\Controller;
use App\Models\shopAdmin\ShopAdmin;
use App\Models\users\Users;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;

class API_INFO_SHOP extends Controller
{
    public function getInfoShop()
    {

        $idAdmin = Auth::guard('ShopAdmin')->id();
        $shop = Users::with('shop')->find($idAdmin);

        // return response()->json($id);

        // $shop = ShopAdmin::where('user_id', $id)->first();
        return response()->json(['infoShop' => $shop]);
    }



  public function sendSetupInfoShop(Request $request)
{
    $validator = Validator::make($request->all(), [

        'IdShop' => 'required|integer',

        'Address' => 'required|string|min:3|max:255',

        'BusinessType' => 'required|in:barber,doctor',

    ], [

        'Address.required' => 'العنوان مطلوب',
        'Address.min' => 'العنوان قصير جداً',

        'BusinessType.required' => 'نوع النشاط مطلوب',
        'BusinessType.in' => 'نوع النشاط غير صالح',

    ]);

    if ($validator->fails()) {
        return response()->json([
            'success' => false,
            'errors' => $validator->errors()
        ], 422);
    }

    $shop = ShopAdmin::find($request->IdShop);

    $shop->update([
        'address' => $request->Address,
        'business_type' => $request->BusinessType,
        'setup_completed' => 0,
    ]);

    return response()->json([
        'success' => true,
        'message' => 'Shop setup completed',
        'shop' => $shop
    ]);
}
}
