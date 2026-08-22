<?php

use App\Http\Controllers\api\users\API_TICKET_STATUS;
use Illuminate\Support\Facades\Route;
use Illuminate\Http\Request;
use App\Models\shopAdmin\ShopAdmin;
use App\Models\services\Services;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return view('app');
});

Route::get('/t', function () {
    return view('test');
});


Route::get('/m', function () {
    return view('mehdi');
});

Route::get('/terms', function () {
    return view('terms');
});

Route::get('/privacy-policy', function () {
    return view('privacy-policy');
});


Route::get('/shopAdmin/register', function () {
    return view('shopAdmin');
});


// Route::get('/q/1cf6550d-b609-4105-8ade-9a68b15f14a1', function () {
//     return view('users');
// });





Route::post('/api/web/sendDataRegisterShopAdmin', [App\Http\Controllers\api\shopAdmin\register\API_RESEVE_DATA_REGESTER_SHOP_ADMIN::class, 'sendDataRegisterShopAdmin']);
Route::post('/api/web/getPlans', [App\Http\Controllers\api\shopAdmin\subscription\API_SEND_PLANS::class, "getPlans"]);




Route::middleware(['auth:ShopAdmin'])->group(function () {
    Route::get('/shopAdmin/logout', [App\Http\Controllers\Auth\shopAdmin\AuthShopAdminController::class, 'logout']);

    Route::get('/shopAdmin', function () {
        return view('shopAdmin');
    });

    Route::post('/api/web/getInfoShop', [App\Http\Controllers\api\shopAdmin\infoShop\API_INFO_SHOP::class, "getInfoShop"]);
    Route::post('/api/web/getSubscription', [App\Http\Controllers\api\shopAdmin\subscription\API_SEND_SUBSCRIPTION::class, "getSubscription"]);
    Route::post('/api/web/sendSetupInfoShop', [App\Http\Controllers\api\shopAdmin\infoShop\API_INFO_SHOP::class, "sendSetupInfoShop"]);
    Route::post('/api/web/createService', [App\Http\Controllers\api\shopAdmin\createService\API_RECEIVE_CREATE_SERVICE::class, "createService"]);
    Route::post('/api/web/CreateQrCode', [App\Http\Controllers\api\shopAdmin\qrCode\API_CREATE_QR_CODE::class, "CreateQrCode"]);
    Route::post('/api/web/getAllTicket', [App\Http\Controllers\api\shopAdmin\queue\API_SEND_ALL_TICKET::class, "getAllTicket"]);
    Route::post('/api/web/getCurrentTicket', [App\Http\Controllers\api\shopAdmin\queue\API_SEND_CURRENT_TICKET::class, "getCurrentTicket"]);
    Route::post('/api/web/startService', [App\Http\Controllers\api\shopAdmin\queue\API_START_SERVICE::class, "startService"]);
    Route::post('/api/web/completeService', [App\Http\Controllers\api\shopAdmin\queue\API_COMPLETE_SERVICE::class, "completeService"]);
    Route::post('/api/web/cancelService', [App\Http\Controllers\api\shopAdmin\queue\API_CANCEL_SERVICE::class, "cancelService"]);

    Route::post('/api/web/updateQueueStatus', [App\Http\Controllers\api\shopAdmin\queue\API_UPDATE_QUEUE_STATUS::class, "updateQueueStatus"]);
    Route::post('/api/web/getQueueStatus', [App\Http\Controllers\api\shopAdmin\queue\API_GET_QUEUE_STATUS::class, "getQueueStatus"]);


    // getQueueStatus
});
Route::post('/api/web/getServices', [App\Http\Controllers\api\shopAdmin\createService\API_SEND_SERVICES::class, "getServices"]);
Route::post('/api/web/sendBookPlace', [App\Http\Controllers\api\users\API_RECEIVE_BOOK_PLACE::class, "sendBookPlace"]);

Route::post('/api/web/recallUser', [App\Http\Controllers\api\shopAdmin\queue\API_RECALL_USER::class, "recallUser"]);

Route::post('/shopAdmin/login', [App\Http\Controllers\Auth\shopAdmin\AuthShopAdminController::class, 'check'])->name('login_shopAdmin');
Route::get('/shopAdmin/login', [App\Http\Controllers\Auth\shopAdmin\AuthShopAdminController::class, 'index'])->name('shopAdmin_login');




Route::get('/verify-email', [App\Http\Controllers\api\shopAdmin\register\API_RESEVE_DATA_REGESTER_SHOP_ADMIN::class, 'verifyEmail'])
    ->name('verify.email');


Route::get('/q/{uuid}', function ($uuid) {

    $shop = ShopAdmin::where('uuid', $uuid)->firstOrFail();

    return view('users', compact('shop'));
    //  return view('users');
});


//

Route::get('/api/web/customer/ticket-status/{ticket_uuid}', [API_TICKET_STATUS::class, 'check']);

Route::post('/api/web/getShopQueueStatus', [App\Http\Controllers\api\users\API_SEND_SHOP_QUEUE::class, 'getShopQueueStatus']);


Route::post('/api/web/save-fcm-token', [App\Http\Controllers\api\users\API_SAVE_FCM_TOKEN::class, 'save']);








//     Route::get('/verify-email', function (Request $request) {

//         if (! $request->hasValidSignature()) {
//             abort(403);
//         }

//         return redirect('/shopAdmin');
//     })->name('verify.email');
// });
