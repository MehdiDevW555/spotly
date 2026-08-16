<?php

namespace App\Models\tickets;

use App\Models\customers\Customers;
use App\Models\services\Services;
use App\Models\shopAdmin\ShopAdmin;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Tickets extends Model
{
    use HasFactory;
     protected $connection = "spotly";
    protected $table = "tickets";
    protected $guarded = [];


     public function shop()
    {
        return $this->belongsTo(
            ShopAdmin::class,
            'shop_id',
            'id'
        );
    }

    public function customer()
    {
        return $this->belongsTo(
            Customers::class,
            'customer_id',
            'id'
        );
    }

    public function service()
    {
        return $this->belongsTo(
            Services::class,
            'service_id',
            'id'
        );
    }


}
