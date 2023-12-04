<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Peserta extends Model
{
    use HasFactory;
    protected $guarded = ['id'];
    protected $with = ['user', 'approveBy'];

    // Relasi
    public function user()
    {
        return $this->belongsTo(User::class, 'user_id');
    }
    public function approveBy()
    {
        return $this->belongsTo(User::class, 'approve_by');
    }
    public function event()
    {
        return $this->belongsTo(Event::class, 'event_id');
    }

    // Untuk JSON
    protected function fotoPiagam(): Attribute
    {
        return Attribute::make(
            get: fn ($value) => json_decode($value, true),
            set: fn ($value) => json_encode($value),
        );
    }
}
