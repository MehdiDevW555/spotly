<?php

namespace App\Http\Controllers\api\shopAdmin\createService;

use App\Http\Controllers\Controller;
use App\Models\services\Services;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class API_RECEIVE_CREATE_SERVICE extends Controller
{
    public function createService(Request $request)
    {
        $validator = Validator::make(
            $request->createService,

            [
                'name' => 'required|string|max:255',
                'description' => 'required|string|max:1000',
                'price' => 'required|numeric|min:0',
                'estimated_time' => 'required|integer|min:1',
            ],

            [
                'name.required' => 'اسم الخدمة مطلوب.',
                'name.string' => 'اسم الخدمة غير صالح.',
                'name.max' => 'اسم الخدمة طويل جداً.',

                'description.required' => 'وصف الخدمة مطلوب.',
                'description.string' => 'وصف الخدمة غير صالح.',
                'description.max' => 'وصف الخدمة طويل جداً.',

                'price.required' => 'السعر مطلوب.',
                'price.numeric' => 'السعر يجب أن يكون رقماً.',
                'price.min' => 'السعر يجب أن يكون أكبر من أو يساوي 0.',

                'estimated_time.required' => 'الوقت المتوقع مطلوب.',
                'estimated_time.integer' => 'الوقت المتوقع يجب أن يكون رقماً صحيحاً.',
                'estimated_time.min' => 'الوقت المتوقع يجب أن يكون أكبر من 0 دقيقة.',
            ]
        );

        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'errors' => $validator->errors(),
            ], 422);
        }

        $data = $validator->validated();

       $service = Services::create([
    'shop_id' => $request->idShop,
    'name' => $data['name'],
    'description' => $data['description'],
    'price' => $data['price'],
    'estimated_time' => $data['estimated_time'],
    'status' => 'active',
]);

        return response()->json([
            'success' => true,
            'message' => 'تم إنشاء الخدمة بنجاح.',
            'service' => $service,
        ]);
    }
}
