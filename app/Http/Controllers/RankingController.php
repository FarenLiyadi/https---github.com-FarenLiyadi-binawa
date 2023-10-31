<?php

namespace App\Http\Controllers;

use App\Models\Peserta;
use App\Models\User;
use Inertia\Inertia;
use Illuminate\Http\Request;

class RankingController extends Controller
{
    public function index()
    {
        return Inertia::render('Ranking/IndexRanking', [
            'users' => User::where('roles', '=', 'USER')->orderBy('total_skor', 'desc')->get()
        ]);
    }

    public function show(Request $request)
    {
        $user = User::findorFail($request->id);
        return Inertia::render('Ranking/ShowRanking', [
            'user' => $user,
            'peserta' => Peserta::where('user_id', '=', $request->id)->with(['event'])->get()
        ]);
    }
}
