<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable implements MustVerifyEmail
{
    use HasApiTokens, HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'email',
        'password',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
        'password' => 'hashed',
    ];

    // Search Filter
    public function scopeSearch($query, $nama)
    {
        if ($nama == "") {
            return $query;
        } else {
            return $query->whereHas('biography', function ($query) use ($nama) {
                $query->where('nama_lengkap', 'LIKE', "%$nama%");
            })
                ->orWhere('name', 'LIKE', "%$nama%");
        };
    }
    public function scopeSearchx($query, $nama)
    {
        if ($nama == "") {
            return $query;
        } else {
            return $query->whereHas('biography_pelatih', function ($query) use ($nama) {
                $query->where('nama_lengkap', 'LIKE', "%$nama%");
            })
                ->orWhere('name', 'LIKE', "%$nama%");
        };
    }

    // Relasi
    public function event()
    {
        return $this->hasMany(Event::class);
    }

    public function biography()
    {
        return $this->hasOne(Biography::class);
    }
    public function biography_pelatih()
    {
        return $this->hasOne(BiographyPelatih::class);
    }

    public function peserta()
    {
        return $this->hasMany(Peserta::class);
    }

    public function absen()
    {
        return $this->hasMany(Absen::class);
    }

    public function latihan()
    {
        return $this->hasMany(Latihan::class);
    }

    public function pembayaran()
    {
        return $this->hasMany(Pembayaran::class);
    }
    public function pengeluaran()
    {
        return $this->hasMany(Pengeluaran::class);
    }
}
