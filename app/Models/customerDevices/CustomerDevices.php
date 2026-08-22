<?php

namespace App\Models\customerDevices;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CustomerDevices extends Model
{
    use HasFactory;

     protected $connection = "spotly";

    protected $table = 'customer_devices';

    protected $fillable = [
        'ticket_id',
        'fcm_token',
        'near_turn_notified',
        'near_turn_last_count',
    ];

    public $timestamps = true;
}
