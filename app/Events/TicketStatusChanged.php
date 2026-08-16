<?php

namespace App\Events;

use Illuminate\Broadcasting\Channel;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Contracts\Broadcasting\ShouldBroadcastNow;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;

class TicketStatusChanged implements ShouldBroadcastNow
{
    use Dispatchable, InteractsWithSockets, SerializesModels;

    public $ticket;
    public $shopId;
    public $status;

    public function __construct($ticket)
    {
        $this->ticket = $ticket;
        $this->shopId = $ticket->shop_id;
        $this->status = $ticket->status;
    }

    public function broadcastOn(): array
    {
        return [
            new Channel('shop.' . $this->shopId),
        ];
    }

    public function broadcastAs(): string
    {
        return 'ticket.status.changed';
    }

    public function broadcastWith(): array
    {
        return [
            'ticket_id' => $this->ticket->id,
            'ticket_uuid' => $this->ticket->ticket_uuid,
            'shop_id' => $this->shopId,
            'status' => $this->status,
        ];
    }
}
