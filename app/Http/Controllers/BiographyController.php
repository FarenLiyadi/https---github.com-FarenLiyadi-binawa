<?php

namespace App\Http\Controllers;

use App\Http\Resources\UsersCollection;
use App\Models\Biography;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\File;
use Inertia\Inertia;

class BiographyController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        if(Auth::user()->roles == "USER"){
            return Inertia::render('Biography/IndexBiography',[
                'biography' => Biography::where("user_id",Auth::user()->id)->get(),
            ]);
        }
        else{
            $users = new UsersCollection(User::with(['biography'])->where("roles","USER")->latest()->paginate(20));
            // dd($users);
            return Inertia::render('Biography/AdminBiography',[
                'user'=>$users
            ]);
        }
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Biography/CreateBiography');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        // dd($request);
        $validatedData = $request->validate([
            'user_id'=> 'nullable',
            'nama_lengkap'=>'nullable',
            'nik'=>'nullable',
            'nisn'=>'nullable',
            'tempat_lahir'=>'nullable',
            'jenis_kelamin'=>'nullable',
            'agama'=>'nullable',
            'nama_ayah'=>'nullable',
            'nama_ibu'=>'nullable',
            'pekerjaan_ayah'=>'nullable',
            'pekerjaan_ibu'=>'nullable',
            'tinggi_badan'=>'nullable',
            'berat_badan'=>'nullable',
            'tangan'=>'nullable',
            'alamat'=>'nullable',
            'no_telp'=>'nullable',
        ]);
        $request->validate([
            'pas_foto'=>'mimes:jpeg,jpg,png|nullable',
            'kartu_keluarga'=>'mimes:jpeg,jpg,png|nullable',
            'akte_kelahiran'=>'mimes:jpeg,jpg,png|nullable',
            'ktp'=>'mimes:jpeg,jpg,png|nullable',
            'rapor'=>'mimes:jpeg,jpg,png|nullable',
        ]);
       
        $pas_foto = $request->file('pas_foto');
        if($request->file('pas_foto')){

            $nama_pas_foto = 'pas_foto/binawa_pas_foto'.date('Ymdhis').'.'.$request->file('pas_foto')->getClientOriginalExtension();
            $pas_foto->move('pas_foto',$nama_pas_foto);
            // dd($nama_pas_foto);
        } else{
            $nama_pas_foto = null;
        }

        $kartu_keluarga = $request->file('kartu_keluarga');
        if($request->file('kartu_keluarga')){

            $nama_kartu_keluarga = 'kartu_keluarga/binawa_kartu_keluarga'.date('Ymdhis').'.'.$request->file('kartu_keluarga')->getClientOriginalExtension();
            $kartu_keluarga->move('kartu_keluarga/',$nama_kartu_keluarga);
        } else{
            $nama_kartu_keluarga = null;
        }

        $akte_kelahiran = $request->file('akte_kelahiran');
        if($request->file('akte_kelahiran')){

            $nama_akte_kelahiran = 'akte_kelahiran/binawa_akte_kelahiran'.date('Ymdhis').'.'.$request->file('akte_kelahiran')->getClientOriginalExtension();
            $akte_kelahiran->move('akte_kelahiran',$nama_akte_kelahiran);
        } else{
            $nama_akte_kelahiran = null;
        }

        $ktp = $request->file('ktp');
        if($request->file('ktp')){

            $nama_ktp = 'ktp/binawa_ktp'.date('Ymdhis').'.'.$request->file('ktp')->getClientOriginalExtension();
            $ktp->move('ktp/',$nama_ktp);
        } else{
            $nama_ktp = null;
        }

        $rapor = $request->file('rapor');
        if($request->file('rapor')){

            $nama_rapor = 'rapor/binawa_rapor'.date('Ymdhis').'.'.$request->file('rapor')->getClientOriginalExtension();
            $rapor->move('rapor/',$nama_rapor);
        } else{
            $nama_rapor = null;
        }

        $replacement = array('pas_foto'=>$nama_pas_foto);
        $replacement2 = array('kartu_keluarga'=>$nama_kartu_keluarga);
        $replacement3 = array('akte_kelahiran'=>$nama_akte_kelahiran);
        $replacement4 = array('ktp'=>$nama_ktp);
        $replacement5 = array('rapor'=>$nama_rapor);

        $validatedData2 = array_replace($validatedData,$replacement);
        $validatedData3 = array_replace($validatedData2,$replacement2);
        $validatedData4 = array_replace($validatedData3,$replacement3);
        $validatedData5 = array_replace($validatedData4,$replacement4);
        $validatedData6 = array_replace($validatedData5,$replacement5);

        Biography::create($validatedData6);

        return redirect('/biography');

      }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        dd($id);
      
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        // dd($id);
        
        return Inertia::render('Biography/EditBiography',[
            'biography'=> Biography::where("id",$id)->get(),
        ]);

    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $biography = Biography::where('id',$id)->first();
        // dd($id);

        $validatedData = $request->validate([
            'user_id'=> 'nullable',
            'nama_lengkap'=>'nullable',
            'nik'=>'nullable',
            'nisn'=>'nullable',
            'tempat_lahir'=>'nullable',
            'jenis_kelamin'=>'nullable',
            'agama'=>'nullable',
            'nama_ayah'=>'nullable',
            'nama_ibu'=>'nullable',
            'pekerjaan_ayah'=>'nullable',
            'pekerjaan_ibu'=>'nullable',
            'tinggi_badan'=>'nullable',
            'berat_badan'=>'nullable',
            'tangan'=>'nullable',
            'alamat'=>'nullable',
            'no_telp'=>'nullable',
        ]);
        $request->validate([
            'pas_foto'=>'mimes:jpeg,jpg,png|nullable',
            'kartu_keluarga'=>'mimes:jpeg,jpg,png|nullable',
            'akte_kelahiran'=>'mimes:jpeg,jpg,png|nullable',
            'ktp'=>'mimes:jpeg,jpg,png|nullable',
            'rapor'=>'mimes:jpeg,jpg,png|nullable',
        ]);


        if($request->file('pas_foto')!=null){
            $pas_foto = $request->file('pas_foto');
                if($biography->pas_foto !=null && File::exist(public_path('pas_foto/',$biography->pas_foto))){
                    File::delete(public_path($biography->pas_foto));
                }
            $nama_pas_foto = 'pas_foto/binawa_pas_foto'.date('Ymdhis').'.'.$request->file('pas_foto')->getClientOriginalExtension();
            $pas_foto->move('pas_foto',$nama_pas_foto);
            // dd($nama_pas_foto);
        } else{
            // dd($biography);
            $nama_pas_foto = $biography->pas_foto;
        }
        $replacement = array('pas_foto'=>$nama_pas_foto);
        
        
        if($request->file('kartu_keluarga')!=null){
            $kartu_keluarga = $request->file('kartu_keluarga');
                if($biography->kartu_keluarga !=null && File::exist(public_path('kartu_keluarga/',$biography->kartu_keluarga))){
                    File::delete(public_path($biography->kartu_keluarga));
                }
            $nama_kartu_keluarga = 'kartu_keluarga/binawa_kartu_keluarga'.date('Ymdhis').'.'.$request->file('kartu_keluarga')->getClientOriginalExtension();
            $kartu_keluarga->move('kartu_keluarga',$nama_kartu_keluarga);
            // dd($nama_pas_foto);
        } else{
            $nama_kartu_keluarga = $biography->kartu_keluarga;
        }
        $replacement2 = array('kartu_keluarga'=>$nama_kartu_keluarga);
        

        if($request->file('akte_kelahiran')!=null){
            $akte_kelahiran = $request->file('akte_kelahiran');
                if($biography->akte_kelahiran !=null && File::exist(public_path('akte_kelahiran/',$biography->akte_kelahiran))){
                    File::delete(public_path($biography->akte_kelahiran));
                }
            $nama_akte_kelahiran = 'akte_kelahiran/binawa_akte_kelahiran'.date('Ymdhis').'.'.$request->file('akte_kelahiran')->getClientOriginalExtension();
            $akte_kelahiran->move('akte_kelahiran',$nama_akte_kelahiran);
            // dd($nama_pas_foto);
        } else{
            $nama_akte_kelahiran = $biography->akte_kelahiran;
        }
        $replacement3 = array('akte_kelahiran'=>$nama_akte_kelahiran);

        if($request->file('ktp')!=null){
            $ktp = $request->file('ktp');
                if($biography->ktp !=null && File::exist(public_path('ktp/',$biography->ktp))){
                    File::delete(public_path($biography->ktp));
                }
            $nama_ktp = 'ktp/binawa_ktp'.date('Ymdhis').'.'.$request->file('ktp')->getClientOriginalExtension();
            $ktp->move('ktp',$nama_ktp);
            // dd($nama_pas_foto);
        } else{
            $nama_ktp = $biography->ktp;
        }
        $replacement4 = array('ktp'=>$nama_ktp);

        if($request->file('rapor')!=null){
            $rapor = $request->file('rapor');
                if($biography->rapor !=null && File::exist(public_path('rapor/',$biography->rapor))){
                    File::delete(public_path($biography->rapor));
                }
            $nama_rapor = 'rapor/binawa_rapor'.date('Ymdhis').'.'.$request->file('rapor')->getClientOriginalExtension();
            $rapor->move('rapor',$nama_rapor);
            // dd($nama_pas_foto);
        } else{
            $nama_rapor = $biography->rapor;
        }
        $replacement5 = array('rapor'=>$nama_rapor);

        $validatedData2 = array_replace($validatedData,$replacement);
        $validatedData3 = array_replace($validatedData2,$replacement2);
        $validatedData4 = array_replace($validatedData3,$replacement3);
        $validatedData5 = array_replace($validatedData4,$replacement4);
        $validatedData6 = array_replace($validatedData5,$replacement5);

        Biography::where('id', $id)
        ->update($validatedData6);

        return redirect('/biography');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
