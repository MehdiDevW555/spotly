<?php

namespace App\Models\users;

use App\Models\shopAdmin\ShopAdmin;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Foundation\Auth\User as Authenticatable;

class Users extends Authenticatable
{
    use HasFactory;
    protected $connection = "spotly";
    protected $table = "users";
    protected $guarded = [];


    public function shop():HasOne
    {
        return $this->HasOne(ShopAdmin::class,'user_id','id');
    }


    protected $hidden = [
        'password',
        'remember_token',
    ];
}
