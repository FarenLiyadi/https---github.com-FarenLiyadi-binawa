<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Cviebrock\EloquentSluggable\Sluggable;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Event extends Model
{
    use HasFactory, Sluggable;

    protected $guarded = ['id'];
    protected $with = ['lastUpdateBy',  'peserta'];

    //Scope Filter
    public function scopeFilter($query)
    {
        $dateNow = now()->toDateString();
        return $query->where('tanggal_deadline', '>', $dateNow)->orderBy('tanggal_deadline', 'asc');
    }

    // Sluggable
    public function getRouteKeyName()
    {
        return 'slug';
    }

    public function sluggable(): array
    {
        return [
            'slug' => [
                'source' => 'title'
            ]
        ];
    }

    // Relasi
    public function lastUpdateBy()
    {
        return $this->belongsTo(User::class, 'last_update_by');
    }
    public function peserta()
    {
        return $this->hasMany(Peserta::class);
    }
}
