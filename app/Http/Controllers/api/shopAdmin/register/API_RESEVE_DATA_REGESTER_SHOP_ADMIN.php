<?php

namespace App\Http\Controllers\api\shopAdmin\register;

use App\Http\Controllers\Controller;
use App\Models\pendingShopAdmin\PendingShopAdmin;
use App\Models\shopAdmin\ShopAdmin;
use App\Models\users\Users;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\URL;
use Illuminate\Support\Facades\Validator;


class API_RESEVE_DATA_REGESTER_SHOP_ADMIN extends Controller
{
 public function sendDataRegisterShopAdmin(Request $request)
    {
        $messages = [
            'full_name.required' => 'الاسم الكامل مطلوب',
            'full_name.string'   => 'الاسم الكامل يجب أن يكون نصاً',
            'full_name.min'      => 'الاسم الكامل يجب أن يحتوي على 3 أحرف على الأقل',
            'full_name.max'      => 'الاسم الكامل يجب ألا يتجاوز 100 حرف',

            'shop_name.required' => 'اسم المحل مطلوب',
            'shop_name.string'   => 'اسم المحل يجب أن يكون نصاً',
            'shop_name.min'      => 'اسم المحل يجب أن يحتوي على 3 أحرف على الأقل',
            'shop_name.max'      => 'اسم المحل يجب ألا يتجاوز 100 حرف',

            'email.required' => 'البريد الإلكتروني مطلوب',
            'email.email'    => 'صيغة البريد الإلكتروني غير صحيحة',
            'email.max'      => 'البريد الإلكتروني طويل جداً',

            'phone.required' => 'رقم الهاتف مطلوب',
            'phone.regex'    => 'رقم الهاتف يجب أن يحتوي على 10 أرقام فقط',

            'password.required' => 'كلمة المرور مطلوبة',
            'password.min'      => 'كلمة المرور يجب أن تحتوي على 8 أحرف على الأقل',
            'password.max'      => 'كلمة المرور طويلة جداً',
        ];

        $validator = Validator::make(
            $request->input('dataRegisterShopAdmin'),
            [
                'full_name' => 'required|string|min:3|max:100',
                'shop_name' => 'required|string|min:3|max:100',
                'email'     => 'required|email:rfc|max:150',
                'phone'     => ['required', 'regex:/^[0-9]{10}$/'],
                'password'  => 'required|string|min:8|max:255',
            ],
            $messages
        );

        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'message' => 'Validation Error',
                'errors'  => $validator->errors(),
            ], 422);
        }

        $data = $request->input('dataRegisterShopAdmin');

        // مستخدم مفعل مسبقاً
        if (Users::where('email', $data['email'])->exists()) {
            return response()->json([
                'success' => false,
                'message' => 'Email already registered and verified.'
            ], 409);
        }

        // Pending موجود
        $pending = PendingShopAdmin::where('email', $data['email'])->first();

        if ($pending) {

            $this->sendVerificationEmail(
                $pending->id,
                $pending->email
            );

            return response()->json([
                'success' => true,
                'message' => 'Verification email resent'
            ]);
        }

        // إنشاء Pending جديد
        $pending = PendingShopAdmin::create([
            'full_name' => $data['full_name'],
            'shop_name' => $data['shop_name'],
            'email'     => $data['email'],
            'phone'     => $data['phone'],
            'password'  => bcrypt($data['password']),
        ]);

        $this->sendVerificationEmail(
            $pending->id,
            $pending->email
        );

        return response()->json([
            'success' => true,
            'message' => 'Registration successful. Please verify your email.'
        ]);
    }

    private function sendVerificationEmail($pendingId, $email)
    {
        $url = URL::temporarySignedRoute(
            'verify.email',
            now()->addHours(24),
            [
                'pending_id' => $pendingId
            ]
        );

        Mail::html("
            <div style='text-align:center;padding:20px'>
                <h2>Verify Your Email</h2>
                <p>Please click the button below to verify your email address.</p>

                <a href='{$url}'
                   style='
                        display:inline-block;
                        background:#635bff;
                        color:#ffffff;
                        text-decoration:none;
                        padding:14px 28px;
                        border-radius:8px;
                        font-weight:bold;
                        font-size:16px;
                   '>
                    Verify Email
                </a>
            </div>
        ", function ($message) use ($email) {
            $message->to($email);
            $message->subject('Email Verification');
        });
    }


public function verifyEmail(Request $request)
{
    if (!$request->hasValidSignature()) {
        abort(403);
    }

    $pending = PendingShopAdmin::findOrFail($request->pending_id);

    $user = Users::create([
        'full_name' => $pending->full_name,
        'email'     => $pending->email,
        'phone'     => $pending->phone,
        'password'  => $pending->password,
        'role'      => 'shop_admin',
        'email_verified_at' => now(),
    ]);

    $shop = ShopAdmin::create([
        'user_id' => $user->id,
        'shop_name'    => $pending->shop_name,
        'phone'   => $pending->phone,
        'status' => 'active',

    ]);

    $user->update([
        'shop_id' => $shop->id
    ]);


    $pending->delete();

    return redirect('/shopAdmin');
}











}

