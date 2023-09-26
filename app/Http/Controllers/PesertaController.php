<?php

namespace App\Http\Controllers;

use App\Models\Peserta;
use Illuminate\Http\Request;
use App\Http\Requests\StorePesertaRequest;
use App\Http\Requests\UpdatePesertaRequest;

class PesertaController extends Controller
{
    /**
     * Display a listing of the resource.
     */
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
    public function edit(Peserta $peserta)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdatePesertaRequest $request, Peserta $peserta)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Peserta $peserta)
    {
        //
    }
}
