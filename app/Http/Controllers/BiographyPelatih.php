<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Resources\UsersCollection;
use App\Models\BiographyPelatih as Biography;
use App\Models\User;

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Storage;

use Inertia\Inertia;

class BiographyPelatih extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        if (Auth::user()->roles == "PELATIH") {
            return Inertia::render('BiographyPelatih/IndexBiography', [
                'biography' => Biography::with('user')->where("user_id", Auth::user()->id)->get(),
            ]);
        } elseif (Auth::user()->roles == "ADMIN") {
            $users = new UsersCollection(User::with(['biography_pelatih'])->where("roles", "PELATIH")->latest()->paginate(20));
            // dd($users);
            return Inertia::render('BiographyPelatih/AdminBiography', [
                'user' => $users
            ]);
        } else {
            return abort(403);
        }
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('BiographyPelatih/CreateBiography');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {

        $validatedData = $request->validate([
            'user_id' => 'nullable',
            'nama_lengkap' => 'nullable',
            'nik' => 'nullable',

            'tempat_lahir' => 'nullable',
            'tanggal_lahir' => 'nullable',
            'agama' => 'nullable',
            'asal' => 'nullable',
            'pelatihan' => 'nullable',
            'club_terakhir' => 'nullable',
            'karier' => 'nullable',

            'jenis_kelamin' => 'nullable',
            'tipe_melatih' => 'nullable',

            'sertifikat' => 'nullable',
        ]);
        $request->validate([

            'pas_foto' => 'mimes:jpeg,jpg,png|nullable',
            'bukti_pelatih' => 'mimes:jpeg,jpg,png|nullable',
            'ktp' => 'mimes:jpeg,jpg,png|nullable',
            'kk' => 'mimes:jpeg,jpg,png|nullable',
        ]);

        $ktp = $request->file('ktp');
        if ($request->file('ktp')) {

            $nama_ktp = 'ktp/binawa_ktp' . date('Ymdhis') . '.' . $request->file('ktp')->getClientOriginalExtension();
            $ktp->move('ktp', $nama_ktp);
            // dd($nama_ktp);
        } else {
            $nama_ktp = null;
        }

        $kk = $request->file('kk');
        if ($request->file('kk')) {

            $nama_kk = 'kk/binawa_kk' . date('Ymdhis') . '.' . $request->file('kk')->getClientOriginalExtension();
            $kk->move('kk/', $nama_kk);
        } else {
            $nama_kk = null;
        }

        $bukti_pelatih = $request->file('bukti_pelatih');
        if ($request->file('bukti_pelatih')) {

            $nama_bukti_pelatih = 'bukti_pelatih/binawa_bukti_pelatih' . date('Ymdhis') . '.' . $request->file('bukti_pelatih')->getClientOriginalExtension();
            $bukti_pelatih->move('bukti_pelatih', $nama_bukti_pelatih);
        } else {
            $nama_bukti_pelatih = null;
        }

        $pas_foto = $request->file('pas_foto');
        if ($request->file('pas_foto')) {
            $nama_pas_foto = 'pas_foto/binawa_pas_foto' . date('Ymdhis') . '.' . $request->file('pas_foto')->getClientOriginalExtension();
            $pas_foto->move('pas_foto', $nama_pas_foto);
        } else {
            $nama_pas_foto = null;
        }

        $gambarSertifikat =  $request->file('sertifikat');
        $updated_data = [];
        if ($gambarSertifikat) {
            for ($i = 0; $i < count($gambarSertifikat); $i++) {
                $sertifikat = $request->sertifikat[$i];
                // dd($sertifikat);
                # code...
                $foto_sertifikat = $gambarSertifikat[$i];
                $nama_foto_sertifikat = 'sertifikat_pelatih/binawa_foto_sertifikat_' . $i . '_' . date('Ymdhis') . '.' . $foto_sertifikat['gambar']->getClientOriginalExtension();
                $foto_sertifikat['gambar']->move('sertifikat_pelatih', $nama_foto_sertifikat);
                $sertifikat['gambar'] = $nama_foto_sertifikat;
                array_push($updated_data, $sertifikat);
            }
        }
        $validatedData['sertifikat'] = $updated_data;


        $replacement = array('ktp' => $nama_ktp);
        $replacement2 = array('kk' => $nama_kk);
        $replacement3 = array('bukti_pelatih' => $nama_bukti_pelatih);
        $replacement4 = array('pas_foto' => $nama_pas_foto);

        $validatedData2 = array_replace($validatedData, $replacement);
        $validatedData3 = array_replace($validatedData2, $replacement2);
        $validatedData4 = array_replace($validatedData3, $replacement3);
        $validatedData5 = array_replace($validatedData4, $replacement4);

        Biography::create($validatedData5);

        return redirect('/biographypelatih');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        return Inertia::render('BiographyPelatih/IndexBiography', [
            'biography' => Biography::with('user')->where("user_id", $id)->get(),
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        return Inertia::render('BiographyPelatih/EditBiography', [
            'biography' => Biography::with('user')->where("id", $id)->get(),
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {

        $biography = Biography::where('id', $id)->first();

        $validatedData = $request->validate([
            'user_id' => 'nullable',
            'nama_lengkap' => 'nullable',
            'nik' => 'nullable',

            'tempat_lahir' => 'nullable',
            'tanggal_lahir' => 'nullable',
            'agama' => 'nullable',
            'asal' => 'nullable',
            'pelatihan' => 'nullable',
            'club_terakhir' => 'nullable',
            'karier' => 'nullable',
            'jenis_kelamin' => 'nullable',
            'tipe_melatih' => 'nullable',
            'sertifikat' => 'nullable',

        ]);
        $request->validate([
            'bukti_pelatih' => 'mimes:jpeg,jpg,png|nullable',
            'ktp' => 'mimes:jpeg,jpg,png|nullable',
            'kk' => 'mimes:jpeg,jpg,png|nullable',
            'pas_foto' => 'mimes:jpeg,jpg,png|nullable',
        ]);


        if ($request->file('kk') != null) {
            $kk = $request->file('kk');
            if ($biography->kk != null && File::exists(public_path('kk/', $biography->kk))) {
                File::delete(public_path($biography->kk));
            }
            $nama_kk = 'kk/binawa_kk' . date('Ymdhis') . '.' . $request->file('kk')->getClientOriginalExtension();
            $kk->move('kk', $nama_kk);
            // dd($nama_pas_foto);
        } else {
            $nama_kk = $biography->kk;
        }
        $replacement2 = array('kk' => $nama_kk);


        if ($request->file('bukti_pelatih') != null) {
            $bukti_pelatih = $request->file('bukti_pelatih');
            if ($biography->bukti_pelatih != null && File::exists(public_path('bukti_pelatih/', $biography->bukti_pelatih))) {
                File::delete(public_path($biography->bukti_pelatih));
            }
            $nama_bukti_pelatih = 'bukti_pelatih/binawa_bukti_pelatih' . date('Ymdhis') . '.' . $request->file('bukti_pelatih')->getClientOriginalExtension();
            $bukti_pelatih->move('bukti_pelatih', $nama_bukti_pelatih);
            // dd($nama_pas_foto);
        } else {
            $nama_bukti_pelatih = $biography->bukti_pelatih;
        }
        $replacement3 = array('bukti_pelatih' => $nama_bukti_pelatih);

        if ($request->file('ktp') != null) {
            $ktp = $request->file('ktp');
            if ($biography->ktp != null && File::exists(public_path('ktp/', $biography->ktp))) {
                File::delete(public_path($biography->ktp));
            }
            $nama_ktp = 'ktp/binawa_ktp' . date('Ymdhis') . '.' . $request->file('ktp')->getClientOriginalExtension();
            $ktp->move('ktp', $nama_ktp);
            // dd($nama_pas_foto);
        } else {
            $nama_ktp = $biography->ktp;
        }
        $replacement4 = array('ktp' => $nama_ktp);

        if ($request->file('pas_foto') != null) {
            $pas_foto = $request->file('pas_foto');
            if ($biography->pas_foto != null && File::exists(public_path('pas_foto/', $biography->pas_foto))) {
                File::delete(public_path($biography->pas_foto));
            }
            $nama_pas_foto = 'pas_foto/binawa_pas_foto' . date('Ymdhis') . '.' . $request->file('pas_foto')->getClientOriginalExtension();
            $pas_foto->move('pas_foto', $nama_pas_foto);
            // dd($nama_pas_foto);
        } else {
            // dd($biography);
            $nama_pas_foto = $biography->pas_foto;
        }
        $replacement5 = array('pas_foto' => $nama_pas_foto);

        $gambarSertifikat =  $request->sertifikat;
        $updated_data = [];
        // dd($gambarSertifikat);


        if (count($gambarSertifikat) > 0) {

            for ($i = 0; $i < count($gambarSertifikat); $i++) {

                $sertifikat = $request->sertifikat[$i];
                $foto_sertifikat = $gambarSertifikat[$i];

                // Cek apakah data sebelumnya ada atau tidak
                if (isset($biography->sertifikat[$i])) {

                    // Cek apakah data diubah atau tidak
                    if ($biography->sertifikat[$i]['gambar'] == $foto_sertifikat['gambar']) {
                        // Sama
                        array_push($updated_data, $foto_sertifikat);
                    } else {
                        // Jika Berubah maka hapus file path lama
                        File::delete(public_path($biography->sertifikat[$i]['gambar']));

                        // Upload file yang berubah
                        $nama_foto_sertifikat = 'sertifikat_pelatih/binawa_foto_sertifikat_' . $i . '_' . date('Ymdhis') . '.' . $foto_sertifikat['gambar']->getClientOriginalExtension();
                        $foto_sertifikat['gambar']->move('sertifikat_pelatih', $nama_foto_sertifikat);
                        $sertifikat['gambar'] = $nama_foto_sertifikat;
                        array_push($updated_data, $sertifikat);
                    }
                    // dd("ada");
                } else {
                    // dd("Tidak Ada");
                    // Tidak ada
                    // Upload File Baru
                    $nama_foto_sertifikat = 'sertifikat_pelatih/binawa_foto_sertifikat_' . $i . '_' . date('Ymdhis') . '.' . $foto_sertifikat['gambar']->getClientOriginalExtension();
                    $foto_sertifikat['gambar']->move('sertifikat_pelatih', $nama_foto_sertifikat);
                    $sertifikat['gambar'] = $nama_foto_sertifikat;
                    array_push($updated_data, $sertifikat);
                }
            }
            $validatedData['sertifikat'] = $updated_data;
        } else {
            // Kosong
            // dd("Kosong");
            foreach ($biography->sertifikat as $sertifikat) {
                // Hapus file
                File::delete(public_path($sertifikat['gambar']));
            }
        }


        // dd($validatedData);

        $validatedData2 = array_replace($validatedData, $replacement2);
        $validatedData3 = array_replace($validatedData2, $replacement3);
        $validatedData4 = array_replace($validatedData3, $replacement4);
        $validatedData5 = array_replace($validatedData4, $replacement5);


        Biography::where('id', $id)
            ->update($validatedData5);

        return redirect('/biographypelatih');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }

    public function search(Request $request)
    {

        $nama = $request->input('nama');
        // dd($request);
        $users = new UsersCollection(User::with(['biography_pelatih'])->where("roles", "PELATIH")->searchx($nama)->latest()->paginate(20));

        return $users;
    }
}
