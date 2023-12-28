<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Pengeluaran extends Model
{
    use HasFactory;
    protected $guarded = ['id'];

    // Search Filter
    public function scopeSearch($query, $search, $startDate, $endDate)
    {
        // Jika tanggal dan kolom search kosong
        if (empty($startDate) && empty($endDate) && empty($search)) {

            //Kirim Semua Data
            return $query;

            // Jika tanggal dan kolom search terisi
        } elseif (!empty($startDate) && !empty($endDate) && !empty($search)) {

            // kirim data yang sesuai berdasarkan tanggal
            return $query->whereHas('user', function ($query) use ($search) {
                $query->where('name', 'LIKE', "%$search%");
            })
                ->orWhere('keterangan', 'LIKE', "%$search%")
                ->whereBetween('tanggal_pengeluaran', [$startDate, Carbon::parse($endDate)->endOfDay()]);

            // Jika Tanggal kosong dan kolom search ada       
        } elseif (empty($startDate) && empty($endDate) && !empty($search)) {

            // Kirim data yang sesuai kolom search
            return $query->whereHas('user', function ($query) use ($search) {
                $query->where('name', 'LIKE', "%$search%");
            })
                ->orWhere('keterangan', 'LIKE', "%$search%");

            // kalau kolom search kosong dan tanggal terisi
        } else {

            // Kirim data berdasarkan tanggal
            return $query->whereBetween('tanggal_pengeluaran', [$startDate, Carbon::parse($endDate)->endOfDay()]);
        }
    }

    // Relasi
    public function user()
    {
        return $this->belongsTo(User::class, 'user_id');
    }
}
