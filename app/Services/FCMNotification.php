<?php
// app/Services/FCMNotification.php

namespace App\Services;

use Kreait\Firebase\Factory;
use Kreait\Firebase\Messaging\CloudMessage;
use Illuminate\Support\Facades\Log;

class FCMNotification
{
    protected $messaging;
    protected $maxRetries = 3;
    protected $retryDelay = 1000; // milliseconds

    public function __construct()
    {
        try {
            $factory = (new Factory)
                ->withServiceAccount(
                    storage_path('app/firebase/service-account.json')
                );

            $this->messaging = $factory->createMessaging();
        } catch (\Exception $e) {
            Log::error('FCM INITIALIZATION ERROR', [
                'message' => $e->getMessage(),
            ]);
            throw $e;
        }
    }

    /*
    |--------------------------------------------------------------------------
    | إرسال إشعار مع إعادة المحاولة
    |--------------------------------------------------------------------------
    */
    public function sendToToken(
        string $token,
        string $title,
        string $body,
        array $data = [],
        ?string $icon = null,
        ?string $image = null
    ): bool {

        return $this->sendWithRetry($token, $title, $body, $data, $icon, $image);
    }

    protected function sendWithRetry(
        string $token,
        string $title,
        string $body,
        array $data = [],
        ?string $icon = null,
        ?string $image = null,
        int $attempt = 1
    ): bool {
        try {
            // إعداد البيانات
            $notificationData = [
                'title' => $title,
                'body' => $body,
            ];

            if ($icon) {
                $notificationData['icon'] = $icon;
            }

            if ($image) {
                $notificationData['image'] = $image;
            }

            // بناء الرسالة
           $message = CloudMessage::withTarget('token', $token)
    ->withData(array_merge($data, [
        'title' => $title,
        'body' => $body,
        'icon' => $icon ?? 'https://spotlly.com/images/slogo.png',
        'timestamp' => now()->toIso8601String(),
        'url' => $data['url'] ?? '',
    ]))
    ->withAndroidConfig([
        'priority' => 'high',
    ])
    ->withApnsConfig([
        'headers' => [
            'apns-priority' => '10',
        ],
    ])
    ->withWebPushConfig([
        'headers' => [
            'TTL' => '86400',
        ],
    ]);

            // إرسال
            $result = $this->messaging->send($message);

            Log::info('✅ FCM SENT SUCCESSFULLY', [
                'token' => substr($token, 0, 10) . '...',
                'title' => $title,
                'result' => $result,
                'attempt' => $attempt,
            ]);

            return true;

        } catch (\Kreait\Firebase\Exception\Messaging\InvalidMessage $e) {
            Log::error('❌ FCM INVALID MESSAGE', [
                'message' => $e->getMessage(),
                'token' => substr($token, 0, 10) . '...',
                'attempt' => $attempt,
            ]);
            return false;

        } catch (\Kreait\Firebase\Exception\Messaging\NotFound $e) {
            Log::warning('⚠️ FCM TOKEN NOT FOUND', [
                'token' => substr($token, 0, 10) . '...',
                'message' => $e->getMessage(),
                'attempt' => $attempt,
            ]);

            // حذف الـ token الفاسد
            $this->invalidateToken($token);

            return false;

        } catch (\Exception $e) {
            Log::error('❌ FCM SEND ERROR', [
                'message' => $e->getMessage(),
                'file' => $e->getFile(),
                'line' => $e->getLine(),
                'attempt' => $attempt,
            ]);

            // إعادة المحاولة
            if ($attempt < $this->maxRetries) {
                sleep($this->retryDelay / 1000);
                return $this->sendWithRetry(
                    $token,
                    $title,
                    $body,
                    $data,
                    $icon,
                    $image,
                    $attempt + 1
                );
            }

            return false;
        }
    }

    /*
    |--------------------------------------------------------------------------
    | إبطال الـ Token الفاسد
    |--------------------------------------------------------------------------
    */
    protected function invalidateToken(string $token): void
    {
        try {
            \App\Models\customerDevices\CustomerDevices::where('fcm_token', $token)
                ->update([
                    'fcm_token' => null,
                    'near_turn_notified' => false,
                    'near_turn_last_count' => null,
                ]);
        } catch (\Exception $e) {
            Log::error('Failed to invalidate token', [
                'message' => $e->getMessage(),
            ]);
        }
    }

    /*
    |--------------------------------------------------------------------------
    | إرسال إشعارات متعددة
    |--------------------------------------------------------------------------
    */
    public function sendToMultipleTokens(
        array $tokens,
        string $title,
        string $body,
        array $data = [],
        ?string $icon = null
    ): array {
        $results = [];

        foreach ($tokens as $token) {
            $results[$token] = $this->sendToToken($token, $title, $body, $data, $icon);
        }

        return $results;
    }

    /*
    |--------------------------------------------------------------------------
    | إرسال رسالة جاهزة مع تحسينات
    |--------------------------------------------------------------------------
    */
    public function send(
        string $token,
        string $type,
        array $data = [],
        ?string $icon = null
    ): bool {

        $message = FCMNotificationMessages::get($type, $data['people_before'] ?? null, $data['ticket_number'] ?? null);

        // إضافة بيانات إضافية
        $data['type'] = $type;
        $data['sent_at'] = now()->toIso8601String();

        return $this->sendToToken(
            $token,
            $message['title'],
            $message['body'],
            $data,
            $icon
        );
    }
}
