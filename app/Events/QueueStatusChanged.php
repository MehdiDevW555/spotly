<?php

namespace App\Events;

use Illuminate\Broadcasting\Channel;
use Illuminate\Contracts\Broadcasting\ShouldBroadcastNow;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;

class QueueStatusChanged implements ShouldBroadcastNow
{
    use Dispatchable, SerializesModels;

    public $shop_id;
    public $queue_open;

    public function __construct($shop_id, $queue_open)
    {
        $this->shop_id = $shop_id;
        $this->queue_open = $queue_open;
    }

    public function broadcastOn()
    {
        return new Channel('shop.' . $this->shop_id);
    }

    public function broadcastAs()
    {
        return 'queue.status.changed';
    }
}
