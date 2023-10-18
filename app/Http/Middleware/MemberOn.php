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

            $today = date('Y-m-d');
            $tanggal_akhir = date($pembayaran->tanggal_akhir);

            // Jika User masih Aktif
            if ($user->active) {
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
