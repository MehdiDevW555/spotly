<?php

namespace App\Models\pendingShopAdmin;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PendingShopAdmin extends Model
{
    use HasFactory;
    protected $connection = "spotly";
    protected $table = 'pending_shop_admins';
    protected $guarded = [];

}
