<?php

namespace App\Http\Middleware;

use App\Models\Pembayaran;
use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class MemberOn
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        $user = auth()->user();
    

        if ($user->roles === 'USER') {

            $pembayaran = Pembayaran::where('user_id', $user->id)->latest()->first();
            

            $today2 = date('Y-m-d');
            $today = date('Y-m-d', strtotime('+3 days', strtotime($today2)));
            $tanggal_akhir = null;
            if($pembayaran != null){

                $tanggal_akhir = date($pembayaran->tanggal_akhir);
            }
// dd($today);
            // Jika User masih Aktif
            if ($user->active && $tanggal_akhir >$today) {
                // Tolak Permintaan
                return back();
            } else {
                // Jika user tidak aktif
                // tetapi belum melewati batas membership
                // berarti di nonaktfikan oleh admin
                if ($tanggal_akhir > $today) {
                    // tolak permintaan
                    return back();
                }
            }
        }

        return $next($request);
    }
}
