<?php

namespace App\Models\services;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Services extends Model
{
    use HasFactory;
     protected $connection = "spotly";
    protected $table = "services";
    protected $guarded = [];
}
