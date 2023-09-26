<?php

namespace App\Http\Controllers;

use App\Models\User;
use Inertia\Inertia;
use App\Models\Absen;
use App\Models\Latihan;
use Illuminate\Http\Request;
use App\Http\Requests\StoreLatihanRequest;
use App\Http\Requests\UpdateLatihanRequest;

class LatihanController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render("Latihan/IndexLatihan", [
            "latihan" => Latihan::orderBy("tanggal", 'asc')->get()
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render("Latihan/CreateLatihan", [
            'users' => User::where('roles', '=', 'USER')->orderBy('name', 'asc')->get()
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'last_update_by' => 'required',
            'tanggal' => 'required',
            'keterangan' => 'nullable',
        ]);

        Latihan::create($validatedData);

        return redirect('/latihan')->with([
            'message' => "Request successfully sent!",
            'type' => 'success'
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(Latihan $latihan)
    {
        return Inertia::render("Latihan/ShowLatihan", [
            "latihan" => $latihan,
            "users" => User::where('roles', '=', 'USER')->orderBy('name', 'asc')->get(),
            "absen" => Absen::where('latihan_id', '=', $latihan->id)->get()
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Latihan $latihan)
    {
        return Inertia::render("Latihan/EditLatihan", [
            "latihan" => $latihan,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Latihan $latihan)
    {
        $validatedData = $request->validate([
            'last_update_by' => 'required',
            'tanggal' => 'required',
            'keterangan' => 'nullable',
        ]);

        Latihan::where('id', $latihan->id)->update($validatedData);

        return redirect('/latihan')->with([
            'message' => "Request successfully sent!",
            'type' => 'success'
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Latihan $latihan)
    {
        //
    }
}
