<?php

namespace App\Http\Controllers\api\shopAdmin\qrCode;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use App\Models\shopAdmin\ShopAdmin;
use App\Models\plans\Plans;
use App\Models\subscriptions\Subscriptions;

class API_CREATE_QR_CODE extends Controller
{
    public function CreateQrCode(Request $request)
    {

        $shop = ShopAdmin::where('user_id', auth()->id())->first();


        if (!$shop) {
            return response()->json([
                'message' => 'Shop not found'
            ], 404);
        }


       if (!$shop->uuid) {

            $shop->uuid = Str::uuid();
            $shop->setup_completed = 1;
            $shop->save();

            $hasSubscription = Subscriptions::where(
                'shop_id',
                $shop->id
            )->exists();

            if (!$hasSubscription) {

                $plan = Plans::where(
                    'type',
                    'trial'
                )->first();

                if ($plan) {

                    Subscriptions::create([
                        'shop_id' => $shop->id,
                        'plan_id' => $plan->id,

                        'starts_at' => now(),

                        'ends_at' => now()->addDays(
                            $plan->duration_days
                        ),

                        'status' => 'active',

                        'payment_status' => 'paid',

                        'transaction_reference' => null,
                    ]);
                }
            }
        }


        return response()->json([
            'uuid' => $shop->uuid,
            'url' => url('/q/'.$shop->uuid)
        ]);

    }
}
