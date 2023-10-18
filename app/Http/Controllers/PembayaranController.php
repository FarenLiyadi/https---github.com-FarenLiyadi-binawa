<?php

namespace App\Http\Controllers;

use App\Models\User;
use Inertia\Inertia;
use App\Models\Pembayaran;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Http\Requests\StorePembayaranRequest;
use App\Http\Requests\UpdatePembayaranRequest;

class PembayaranController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function __construct()
    {
        $this->middleware('memberOn')->except('index');
    }
    public function index()
    {
        $user = Auth::user();

        if ($user->roles === 'USER') {
            return Inertia::render('Pembayaran/IndexPembayaran', [
                'pembayaran' => Pembayaran::where('user_id', '=', $user->id)->orderBy("tanggal_pembayaran", 'desc')->get()
            ]);
        } else {
            return Inertia::render('Pembayaran/IndexPembayaran', [
                'pembayaran' => Pembayaran::all()
            ]);
        }
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Pembayaran/CreatePembayaran');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'user_id' => 'required',
            'keterangan' => 'required',
            'jenis_pembayaran' => 'required',
            'tanggal_pembayaran' => 'required',
            'tanggal_awal' => 'nullable',
            'tanggal_akhir' => 'nullable',
            'approved_by' => 'nullable',
            'approve' => 'required',
            'bukti_pembayaran' => 'required',
        ]);

        // dd($request->file('bukti_pembayaran'));
        if ($request->hasFile('bukti_pembayaran')) {
            $file = $request->file('bukti_pembayaran');
            $fileName = time() . '_' . $file->getClientOriginalName();
            $filePath = $file->storeAs('bukti_pembayaran', $fileName, 'public'); // Store file in the public disk under the 'bukti_pembayaran' directory

            // You might want to save the file path or URL in the database
            $validatedData['bukti_pembayaran'] = $filePath;
        }

        Pembayaran::create($validatedData);

        return redirect('/langganan')->with([
            'message' => "Request successfully sent!",
            'type' => 'success'
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(Pembayaran $pembayaran)
    {
        return Inertia::render('Pembayaran/ShowPembayaran', [
            'pembayaran' => $pembayaran
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Pembayaran $pembayaran)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Pembayaran $pembayaran)
    {
        $validatedData = $request->validate([
            'user_id' => 'required',
            'keterangan' => 'required',
            'jenis_pembayaran' => 'required',
            'tanggal_pembayaran' => 'required',
            'tanggal_awal' => 'required',
            'tanggal_akhir' => 'required',
            'approved_by' => 'required',
            'approve' => 'required',
            'bukti_pembayaran' => 'required',
        ]);

        Pembayaran::where('id', $pembayaran->id)->update($validatedData);
        User::where('id', $request->user_id)->update(['active' => true]);

        return redirect('/pembayaran')->with([
            'message' => "Pembayaran successfully updated!",
            'type' => 'success'
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Pembayaran $pembayaran)
    {
        //
    }
}
