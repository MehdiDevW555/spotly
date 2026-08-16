<?php

namespace App\Events;

use App\Models\tickets\Tickets;
use Illuminate\Broadcasting\Channel;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;
use Illuminate\Contracts\Broadcasting\ShouldBroadcastNow;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;

class TicketCreated implements ShouldBroadcastNow
{
    use Dispatchable, SerializesModels;

    public $ticket;

    /**
     * Create a new event instance.
     */
    public function __construct(Tickets $ticket)
    {
        $this->ticket = $ticket;
    }


    /**
     * Channel where the event will be broadcast
     */
    public function broadcastOn(): array
    {
        return [
            new Channel('shop.' . $this->ticket->shop_id)
        ];
    }


    /**
     * Event name received by React
     */
    public function broadcastAs(): string
    {
        return 'ticket.created';
    }


    /**
     * Data sent to React
     */
    public function broadcastWith(): array
    {
    //     \Log::info('TicketCreated fired', [
    //     'ticket_number' => $this->ticket->ticket_number,
    //     'shop_id' => $this->ticket->shop_id,
    // ]);

        return [
            'id' => $this->ticket->id,
            'ticket_uuid' => $this->ticket->ticket_uuid,
            'ticket_number' => $this->ticket->ticket_number,
            'shop_id' => $this->ticket->shop_id,
            'service_id' => $this->ticket->service_id,
            'customer_id' => $this->ticket->customer_id,
            'status' => $this->ticket->status,
            'created_at' => $this->ticket->created_at,
        ];
    }
}
