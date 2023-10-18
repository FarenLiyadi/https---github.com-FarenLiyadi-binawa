<?php

namespace App\Http\Controllers;

use App\Models\User;
use Inertia\Inertia;
use App\Models\Peserta;
use Illuminate\Http\Request;
use App\Http\Requests\StorePesertaRequest;
use App\Http\Requests\UpdatePesertaRequest;

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
        ]);

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
