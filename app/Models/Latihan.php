<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Latihan extends Model
{
    use HasFactory;
    protected $guarded = ['id'];
    protected $with = ['lastUpdateBy'];

    public function absen()
    {
        return $this->hasMany(Absen::class);
    }

    public function lastUpdateBy()
    {
        return $this->belongsTo(User::class, 'last_update_by');
    }
}
