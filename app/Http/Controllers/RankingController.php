<?php

namespace App\Http\Controllers;

use App\Models\User;
use Inertia\Inertia;
use Illuminate\Http\Request;

class RankingController extends Controller
{
    public function index()
    {
        return Inertia::render('Ranking', [
            'users' => User::where('roles', '=', 'USER')->orderBy('total_skor', 'desc')->get()
        ]);
    }
}
