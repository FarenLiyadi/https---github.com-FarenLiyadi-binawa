<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Pembayaran extends Model
{
    use HasFactory;
    protected $guarded = ['id'];
    protected $with = ['user', 'approvedBy'];

    // Search Filter
    public function scopeSearch($query, $nama)
    {
        if ($nama == "") {
            return $query;
        } else {
            return $query->whereHas('user', function ($query) use ($nama) {
                $query->where('name', 'LIKE', "%$nama%");
            });
        };
    }

    // Relasi
    public function user()
    {
        return $this->belongsTo(User::class, 'user_id');
    }
    public function approvedBy()
    {
        return $this->belongsTo(User::class, 'approved_by');
    }
}
