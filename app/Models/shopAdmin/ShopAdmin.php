<?php

namespace App\Models\shopAdmin;

use App\Models\tickets\Tickets;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model ;;

class ShopAdmin extends Model
{
    use HasFactory;
     protected $connection = "spotly";
    protected $table = "shops";
    protected $guarded = [];


public function tickets()
{
    return $this->hasMany(Tickets::class,'shop_id', 'id');
}


}
