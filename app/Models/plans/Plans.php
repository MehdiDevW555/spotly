<?php

namespace App\Models\plans;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Plans extends Model
{
    use HasFactory;
     protected $connection = "spotly";
    protected $table = "plans";
    protected $guarded = [];
}
