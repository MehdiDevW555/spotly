<?php

namespace App\Http\Controllers\api\shopAdmin\subscription;

use App\Http\Controllers\Controller;
use App\Models\plans\Plans;
use Illuminate\Http\Request;

class API_SEND_PLANS extends Controller
{
  public function getPlans(Request $request)
{
    $plans = Plans::where('type', '!=', 'trial')
        ->where('active', 1)
        ->get();

    return response()->json([
        'plans' => $plans
    ]);
}
}
