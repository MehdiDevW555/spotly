<?php

namespace App\Http\Controllers\api\shopAdmin\subscription;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Carbon;
use App\Models\users\Users;
use App\Models\subscriptions\Subscriptions;

class API_SEND_SUBSCRIPTION extends Controller
{
    public function getSubscription(Request $request)
    {
        $user = Users::with('shop')->find(auth()->id());

        if (!$user || !$user->shop) {
            return response()->json([
                'success' => false,
                'message' => 'Shop not found'
            ], 404);
        }

        $subscription = Subscriptions::with('plan')
            ->where('shop_id', $user->shop->id)
            ->latest()
            ->first();

        if (!$subscription) {
            return response()->json([
                'success' => false,
                'message' => 'No subscription found'
            ], 404);
        }

        $daysLeft = max(
            0,
            Carbon::now()->diffInDays(
                Carbon::parse($subscription->ends_at),
                false
            )
        );

        return response()->json([
            'success' => true,
            'subscription' => $subscription,
        ]);
    }
}
