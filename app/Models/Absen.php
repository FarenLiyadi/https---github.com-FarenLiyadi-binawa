<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Absen extends Model
{
    use HasFactory;
    protected $guarded = ['id'];
    protected $with = ['user', 'latihan', 'lastUpdateBy'];


    public function latihan()
    {
        return $this->belongsTo(Latihan::class, 'latihan_id');
    }

    public function user()
    {
        return $this->belongsTo(User::class, 'user_id');
    }

    public function lastUpdateBy()
    {
        return $this->belongsTo(User::class, 'last_update_by');
    }
}
