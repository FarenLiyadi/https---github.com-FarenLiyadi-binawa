<?php

namespace App\Http\Controllers;

use App\Models\User;
use Inertia\Inertia;
use App\Models\Pembayaran;
use Illuminate\Http\Request;

class DashboardController extends Controller
{
    public function index()
    {
        $pembayaran = Pembayaran::orderBy("tanggal_pembayaran", 'desc')->get();
        $pembayaranUnique = $pembayaran->unique('user_id');

        return Inertia::render('Dashboard', [
            'users' => User::where('roles', '=', 'USER')->get(),
            'pembayaran' => $pembayaranUnique
        ]);
    }
}
