<?php
// app/Services/QueueNotificationService.php

namespace App\Services;

use App\Models\customerDevices\CustomerDevices;
use App\Models\tickets\Tickets;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;

class QueueNotificationService
{
    protected $fcmNotification;
    protected $batchSize = 10;

    public function __construct(FCMNotification $fcmNotification)
    {
        $this->fcmNotification = $fcmNotification;
    }

    public function checkNearTurn(Tickets $changedTicket): void
    {
        try {
            // استخدام معاملة قاعدة بيانات
            DB::transaction(function () use ($changedTicket) {

                // جلب التذاكر المنتظرة
                $tickets = Tickets::where('shop_id', $changedTicket->shop_id)
                    ->whereDate('created_at', today())
                    ->where('status', 'waiting')
                    ->orderBy('ticket_number')
                    ->get(['id', 'ticket_number', 'shop_id']);

                if ($tickets->isEmpty()) {
                    return;
                }

                // جمع التذاكر التي تحتاج إشعار
                $ticketsToNotify = [];
                $notificationCounts = [];

                foreach ($tickets as $ticket) {
                    // حساب عدد الأشخاص قبله بكفاءة
                    $peopleBefore = Tickets::where('shop_id', $ticket->shop_id)
                        ->whereDate('created_at', today())
                        ->where('status', 'waiting')
                        ->where('ticket_number', '<', $ticket->ticket_number)
                        ->count();

                    // التحقق من الأعداد المستهدفة
                    $targetCounts = [1, 2, 3];

                    if (!in_array($peopleBefore, $targetCounts)) {
                        continue;
                    }

                    // التحقق من عدم تكرار الإشعار
                    $device = CustomerDevices::where('ticket_id', $ticket->id)
                        ->first(['id', 'fcm_token', 'near_turn_last_count']);

                    if (!$device || !$device->fcm_token) {
                        continue;
                    }

                    if ((int) $device->near_turn_last_count === $peopleBefore) {
                        continue;
                    }

                    $ticketsToNotify[] = [
                        'ticket' => $ticket,
                        'device' => $device,
                        'peopleBefore' => $peopleBefore,
                    ];
                }

                // معالجة الإشعارات على دفعات
                foreach (array_chunk($ticketsToNotify, $this->batchSize) as $batch) {
                    $this->sendBatchNotifications($batch);
                }

            });
        } catch (\Exception $e) {
            Log::error('QUEUE NOTIFICATION ERROR', [
                'shop_id' => $changedTicket->shop_id,
                'ticket_id' => $changedTicket->id,
                'error' => $e->getMessage(),
                'trace' => $e->getTraceAsString(),
            ]);
        }
    }

    protected function sendBatchNotifications(array $batch): void
    {
        foreach ($batch as $item) {
            try {
                $ticket = $item['ticket'];
                $device = $item['device'];
                $peopleBefore = $item['peopleBefore'];

                // جلب رسالة الإشعار
                $message = FCMNotificationMessages::get(
                    'turn_approaching',
                    $peopleBefore,
                    $ticket->ticket_number
                );

                // بيانات الإشعار
                $data = [
                    'ticket_id' => (string) $ticket->id,
                    'ticket_uuid' => (string) $ticket->ticket_uuid,
                    'ticket_number' => (string) $ticket->ticket_number,
                    'status' => 'near_turn',
                    'people_before' => (string) $peopleBefore,
                    'shop_id' => (string) $ticket->shop_id,
                ];

                // إرسال الإشعار
                $sent = $this->fcmNotification->sendToToken(
                    $device->fcm_token,
                    $message['title'],
                    $message['body'],
                    $data
                );

                // تحديث حالة الجهاز
                if ($sent) {
                    $device->update([
                        'near_turn_last_count' => $peopleBefore,
                        'near_turn_notified' => true,
                    ]);

                    Log::info('✅ NEAR TURN NOTIFICATION SENT', [
                        'ticket_id' => $ticket->id,
                        'ticket_number' => $ticket->ticket_number,
                        'people_before' => $peopleBefore,
                        'device_id' => $device->id,
                    ]);
                } else {
                    Log::warning('⚠️ NEAR TURN NOTIFICATION FAILED', [
                        'ticket_id' => $ticket->id,
                        'ticket_number' => $ticket->ticket_number,
                        'people_before' => $peopleBefore,
                        'device_id' => $device->id,
                    ]);
                }

            } catch (\Exception $e) {
                Log::error('BATCH NOTIFICATION ERROR', [
                    'ticket_id' => $item['ticket']->id ?? null,
                    'error' => $e->getMessage(),
                ]);
            }
        }
    }
}
