<?php

namespace App\Http\Controllers\auth\shopAdmin;

use App\Http\Controllers\Controller;
use App\Models\users\Users;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class AuthShopAdminController extends Controller
{
    // public function index(Request $request)
    // {
    //     return view('logins.shop_admin.login_shopAdmin');
    // }

    public function index(Request $request)
    {
        if (Auth::guard('ShopAdmin')->check()) {
            return redirect('/shopAdmin');
        }

        return view('logins.shop_admin.login_shopAdmin');
    }

    public function check(Request $request)
    {
        $request->validate([
            'email' => ["required", "string", "max:255"],
            'password' => ["required", "string", "max:255"]
        ]);

        $user = Users::where('email', $request->email)
            ->where('role', 'shop_admin')
            ->first();

        if ($user && Hash::check($request->password, $user->password)) {

            Auth::guard('ShopAdmin')->login($user, true);

            return redirect('/shopAdmin');
        }

        return redirect()->back()
            ->with('login_error', 'Incorrect username or password');
    }


    public function logout(Request $request)
    {
        Auth::guard('ShopAdmin')->logout();

        return redirect('/shopAdmin/login');
    }
}
