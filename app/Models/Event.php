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
    protected $with = ['lastUpdateBy'];

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
}
