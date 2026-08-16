<?php

namespace App\Models\subscriptions;

use App\Models\plans\Plans;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Subscriptions extends Model
{
    use HasFactory;
     protected $connection = "spotly";
    protected $table = "subscriptions";
    protected $guarded = [];

    public function plan()
    {
        return $this->belongsTo(
            Plans::class,'plan_id','id' );
    }


}
