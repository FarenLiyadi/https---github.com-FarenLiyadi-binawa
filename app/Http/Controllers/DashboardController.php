<?php

namespace App\Http\Controllers;

use App\Models\Biography;
use App\Models\Event;
use App\Models\User;
use Inertia\Inertia;
use App\Models\Pembayaran;
use App\Models\Peserta;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class DashboardController extends Controller
{
    public function index()
    {
        // $date1 = date("Y-m-d");
        // $date2 = date('Y-m-d', strtotime('-3 days', strtotime($date1)));
        // $pembayaran = Pembayaran::where('tanggal_akhir','<',$date2)->orderBy("tanggal_akhir","desc")->get();
        $pembayaran = Pembayaran::orderBy("tanggal_akhir", 'desc')->get();
        $pembayaranUnique = $pembayaran->unique('user_id');
        $biodata = Biography::where("user_id",Auth::user()->id)->get();
        $pertandingan = Peserta::where("user_id",Auth::user()->id)->get();

        $totalMemberActive = User::where("roles","USER")->where("active",1)->get();
        $totalMember = User::where("roles","USER")->get();
        $total_pertandingan = Event::all();
// dd($biodata);
     

        if(Auth::user()->roles == "USER"){

            return Inertia::render('Dashboard', [
                'users' => User::where('roles', '=', 'USER')->get(),
                'pembayaran' =>$pembayaranUnique,
                'biodata' => $biodata,
                'pertandingan' => $pertandingan
            ]);
        }
      

            return Inertia::render('Dashboard', [
                'total_member_active' => $totalMemberActive,
                'total_member' => $totalMember,
                'pertandingan' => $total_pertandingan,
                'pembayaran' =>$pembayaranUnique,
               
            ]);
        
    }
    public function landing()
    {
        return Inertia::render('LandingPage', [
            'users' => "",
           
        ]);
    }
}
