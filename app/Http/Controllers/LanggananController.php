<?php

namespace App\Http\Controllers;

use App\Http\Resources\UsersCollection;
use App\Models\User;
use Inertia\Inertia;

use App\Models\Pembayaran;
use Illuminate\Http\Request;

class LanggananController extends Controller
{
    public function __construct()
    {
        $this->middleware('admin')->only('update');
    }
    public function index()
    {
        $user = auth()->user();

        if ($user->roles == "USER") {
            return Inertia::render('Langganan/IndexLangganan', [
                'pembayaran' => Pembayaran::where('user_id', '=', $user->id)->orderBy("tanggal_pembayaran", 'desc')->get()
            ]);
        } else {

            return Inertia::render('Langganan/IndexLangganan', [

                // 'users' => User::where('roles', '=', 'USER')->get(),
                'users' => new UsersCollection(User::where("roles","USER")->latest()->paginate(20))
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

    public function membershipEnd(Request $request)
    {

        for ($i = 0; $i < $request->length; $i++) {
            User::where('id', $request[$i])->update(['active' => false]);
        }

        return redirect('/dashboard')->with([
            'message' => "Memership updated",
            'type' => 'success'
        ]);
    }
}
