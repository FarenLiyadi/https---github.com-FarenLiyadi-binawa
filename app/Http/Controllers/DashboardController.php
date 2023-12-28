<?php

namespace App\Http\Controllers;

use App\Models\User;
use Inertia\Inertia;
use App\Models\Event;
use App\Models\Peserta;
use App\Models\Biography;
use App\Models\BiographyPelatih;
use App\Models\Pembayaran;
use App\Models\Pengeluaran;
use App\Models\CompanyModel;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class DashboardController extends Controller
{
    public function index()
    {
        // $date1 = date("Y-m-d");
        // $date2 = date('Y-m-d', strtotime('-3 days', strtotime($date1)));
        // $pembayaran = Pembayaran::where('tanggal_akhir','<',$date2)->orderBy("tanggal_akhir","desc")->get();
        $pembayaran = Pembayaran::where("tanggal_akhir","!=",null)->orderBy("tanggal_akhir", 'desc')->get();
        $pembayaranUnique = $pembayaran->unique('user_id');
        $biodata = Biography::where("user_id", Auth::user()->id)->get();
        $biodataPelatih = BiographyPelatih::where("user_id", Auth::user()->id)->get();
        $pertandingan = Peserta::where("user_id", Auth::user()->id)->get();

        $totalMemberActive = User::where("roles", "USER")->where("active", 1)->get();
        $totalMember = User::where("roles", "USER")->get();
        $total_pertandingan = Event::all();
        // dd($biodata);


        if (Auth::user()->roles == "USER") {
            $pembayaran = Pembayaran::where("tanggal_akhir","!=",null)->where('user_id',Auth::user()->id)->orderBy("tanggal_akhir", 'desc')->get();
            $pembayaranUnique = $pembayaran->unique('user_id');
            return Inertia::render('Dashboard', [
                'users' => User::where('roles', '=', 'USER')->get(),
                'pembayaran' => $pembayaranUnique,
                'biodata' => $biodata,
                'pertandingan' => $pertandingan
            ]);
        }
        //   dd(Pembayaran::all());

        return Inertia::render('Dashboard', [
            'pembayaran_graph' => Pembayaran::all(),
            'pengeluaran_graph' => Pengeluaran::all(),
            'total_member_active' => $totalMemberActive,
            'total_member' => $totalMember,
            'pertandingan' => $total_pertandingan,
            'pembayaran' => $pembayaranUnique,
            'biodata' => $biodataPelatih,

        ]);
    }
    public function landing()
    {
        return Inertia::render('LandingPage', [
            'users' => "",

        ]);
    }
}
