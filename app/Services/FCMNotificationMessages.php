<?php

namespace App\Services;

class FCMNotificationMessages
{
    public static function get(string $type, ?int $peopleBefore = null, ?int $ticketNumber = null): array
    {
        return match ($type) {



            'turn_called' => [
                'title' => 'حان دورك 🔔',
                'body' => "التدكرة رقم {$ticketNumber}. حان دورك الآن، يرجى التوجه إلى المحل.",
            ],

            'service_started' => [
                'title' => 'بدأت خدمتك ▶️',
                'body' => "التذكرة رقم {$ticketNumber}، بدأت خدمتك الآن. نتمنى لك تجربة رائعة.",
            ],

            'turn_completed' => [
                'title' => 'تم الانتهاء من خدمتك ✅',
                'body' => 'شكراً لزيارتك، سعدنا بخدمتك ونتمنى أن نراك مرة أخرى.',
            ],

            'turn_cancelled' => [
                'title' => 'تم إلغاء دورك',
                'body' => "التذكرة رقم {$ticketNumber}، تم إلغاء دورك.",
            ],

            // 'turn_approaching' => [
            //     'title' => 'اقترب دورك 🔔',
            //     'body' => match ($peopleBefore) {
            //         1 => 'بقي أمامك شخص واحد، يرجى البقاء قريباً من المحل، فقد يقترب دورك في أي لحظة.',
            //         2 => 'بقي أمامك شخصان، يرجى البقاء قريباً من المحل، فقد يقترب دورك في أي لحظة.',
            //         default => "بقي أمامك {$peopleBefore} أشخاص، يرجى البقاء قريباً من المحل، فقد يقترب دورك في أي لحظة.",
            //     },
            // ],

            'turn_approaching' => [
                'title' => 'اقترب دورك 🔔',
                'body' => match ($peopleBefore) {
                    1 => "تذكرة رقم {$ticketNumber} - بقي أمامك شخص واحد.",
                    2 => "تذكرة رقم {$ticketNumber} - بقي أمامك شخصان.",
                    default => "تذكرة رقم {$ticketNumber} - بقي أمامك {$peopleBefore} أشخاص.",
                },
            ],

            'turn_near' => [
                'title' => 'دورك يقترب جداً ⏳',
                'body' => match ($peopleBefore) {
                    1 => 'بقي أمامك شخص واحد، يرجى البقاء قريباً من المحل.',
                    2 => 'بقي أمامك شخصان، يرجى البقاء قريباً من المحل.',
                    default => "بقي أمامك {$peopleBefore} أشخاص، يرجى البقاء قريباً من المحل.",
                },
            ],

            'long_wait' => [
                'title' => 'يمكنك الاستمتاع بيومك 😊',
                'body' => 'ما زال هناك عدد من الأشخاص قبلك. سنخبرك عندما يقترب دورك.',
            ],

            default => [
                'title' => 'تحديث حول دورك',
                'body' => 'هناك تحديث جديد حول تذكرتك.',
            ],
        };
    }
}
