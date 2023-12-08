<?php

namespace App\Http\Controllers;

use App\Models\User;
use Inertia\Inertia;
use App\Models\Peserta;
use Illuminate\Http\Request;
use App\Http\Requests\StorePesertaRequest;
use App\Http\Requests\UpdatePesertaRequest;
use Illuminate\Support\Facades\File;

class PesertaController extends Controller
{
    /**
     * Display a listing of the resource.
     */

    public function __construct()
    {
        $this->middleware('member');
    }
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        // Jika req dari multi
        if ($request->has('multi')) {

            for ($i = 0; $i < $request->multi; $i++) {

                $validatedData = validator($request[$i], [
                    'user_id' => 'required',
                    'event_id' => 'required',
                    'approve' => 'required',
                    'approve_by' => 'nullable',
                    'skor' => 'required',
                    'keterangan' => 'nullable',
                    'foto_piagam'  => 'nullable',
                ])->validate();

                Peserta::create($validatedData);
            }
        } else {
            $validatedData = $request->validate([
                'user_id' => 'required',
                'event_id' => 'required',
                'approve' => 'required',
                'approve_by' => 'nullable',
                'skor' => 'required',
                'keterangan' => 'nullable',
                'foto_piagam'  => 'nullable',
            ]);
            Peserta::create($validatedData);
        }

        return back()->with([
            'message' => "Request successfully sent!",
            'type' => 'success'
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(Peserta $peserta)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Peserta $peserta, $id)
    {
        $peserta = Peserta::where('id', $id)->get();
        return Inertia::render('Peserta/EditPeserta', [
            'peserta' => $peserta
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Peserta $peserta, $id)
    {

        if ($request->has('prevSkor')) {
            $user = User::where('id', $request->user_id)->get();
            $prevSkor = (int)$request->prevSkor;
            $userSkor = $user[0]->total_skor;
            $newSkor = $request->skor;
            $finalSkor = (($userSkor - $prevSkor) + $newSkor);

            User::where('id', $user[0]->id)->update(['total_skor' => $finalSkor]);
        }

        $validatedData = $request->validate([
            'user_id' => 'required',
            'event_id' => 'required',
            'approve' => 'required',
            'approve_by' => 'required',
            'skor' => 'required',
            'keterangan' => 'nullable',
            'foto_piagam'  => 'nullable',
        ]);



        $piagam = $request->foto_piagam;
        $updated_data = [];
        $peserta_data = Peserta::where('id', $request->id)->get();
        // dd($request->file('foto_piagam'));
        if($piagam){

            if (count($piagam) > 0) {
                if (count($piagam) < count($peserta_data[0]->foto_piagam)) {
                    // dd("databerubah");
                    for ($i = 0; $i < count($peserta_data[0]->foto_piagam); $i++) {
                        if (!isset($piagam[$i])) {
                            // dd("datany tidak ada");
                            // dd($peserta_data[0]->foto_piagam[$i]);
                            File::delete(public_path($peserta_data[0]->foto_piagam[$i]));
                        }
                    }
                }
                // dd($piagam);
                for ($i = 0; $i < count($piagam); $i++) {
                    // dd($peserta_data[0]->foto_piagam[$i]);
                    // Cek apakah ada data di database
                    if (isset($peserta_data[0]->foto_piagam[$i])) {
                        // Ada
                        // dd("ada");
                        // Cek apakah datanya sama, ad perubahan atau tidak
                        if ($peserta_data[0]->foto_piagam[$i] == $piagam[$i]) {
                            // dd("Sama");
                            array_push($updated_data, $piagam[$i]);
                        } else {
                            // terdapat perubahan data
                            // dd("Berubah");
                            // Hapus file lama 
                            File::delete(public_path($peserta_data[0]->foto_piagam[$i]));
    
                            // Buat Data baru
                            $nama_foto_piagam = 'foto_piagam/binawa_piagam_' . $i . "_" . date('Ymdhis') . '.' . $piagam[$i]->getClientOriginalExtension();
                            $piagam[$i]->move('foto_piagam', $nama_foto_piagam);
                            $piagam[$i] = $nama_foto_piagam;
                            array_push($updated_data, $piagam[$i]);
                        }
                    } else {
                        // Buat data baru
                        // dd("Buat Baru");
                        $nama_foto_piagam = 'foto_piagam/binawa_piagam_' . $i . "_" . date('Ymdhis') . '.' . $piagam[$i]->getClientOriginalExtension();
                        $piagam[$i]->move('foto_piagam', $nama_foto_piagam);
                        $piagam[$i] = $nama_foto_piagam;
                        array_push($updated_data, $piagam[$i]);
                    }
                }
    
                // dd($updated_data);
    
                // if ($peserta_data[0]->foto_piagam != $piagam) {
    
                //     File::delete(public_path($peserta_data[0]->foto_piagam));
                // }
    
                $validatedData['foto_piagam'] = $updated_data;
            } else {
                // Kosong
                // dd("Kosong");
                if (count($peserta_data[0]->foto_piagam) > 0) {
                    foreach ($peserta_data[0]->foto_piagam as $foto) {
                        // Hapus file
                        // dd($foto);
                        File::delete(public_path($foto));
                    }
                }
            }
        }

        Peserta::where('id', $id)->update($validatedData);

        if ($request->has('prevSkor')) {

            return redirect('/event')->with([
                'message' => "Peserta successfully updated!",
                'type' => 'success'
            ]);
        }

        return back()->with([
            'message' => "Peserta successfully updated!",
            'type' => 'success'
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Peserta $peserta, $id)
    {
        Peserta::destroy($id);

        return back()->with([
            'message' => "Request successfully deleted!",
            'type' => 'success'
        ]);
    }
}
