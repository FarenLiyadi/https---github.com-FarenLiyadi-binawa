<?php

namespace App\Http\Controllers;

use App\Models\User;
use Inertia\Inertia;

use Illuminate\Http\Request;

class LanggananController extends Controller
{
    public function index()
    {
        return Inertia::render('Langganan/IndexLangganan', [

            'users' => User::where('roles', '=', 'USER')->get()
        ]);
    }

    public function update(Request $request)
    {
        User::where('id', $request->user_id)->update(['active' => $request->value]);
        return redirect('/langganan')->with([
            'message' => "Langganan successfully updated!",
            'type' => 'success'
        ]);
    }
}
