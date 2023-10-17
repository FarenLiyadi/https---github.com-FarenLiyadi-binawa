<?php

namespace App\Http\Controllers;

use App\Models\User;
use Inertia\Inertia;

use App\Models\Pembayaran;
use Illuminate\Http\Request;

class LanggananController extends Controller
{
    public function index()
    {
        $user = auth()->user();

        if ($user->roles == "USER") {
            return Inertia::render('Langganan/IndexLangganan', [
                'pembayaran' => Pembayaran::where('user_id', '=', $user->id)->get()
            ]);
        } else {

            return Inertia::render('Langganan/IndexLangganan', [

                'users' => User::where('roles', '=', 'USER')->get(),
            ]);
        }
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
