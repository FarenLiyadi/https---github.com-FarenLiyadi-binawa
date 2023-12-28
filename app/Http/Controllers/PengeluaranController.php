<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Pengeluaran;
use App\Http\Resources\UsersCollection;
use App\Http\Requests\StorePengeluaranRequest;
use App\Http\Requests\UpdatePengeluaranRequest;
use Illuminate\Http\Request;

class PengeluaranController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('Pengeluaran/IndexPengeluaran', [
            'pengeluaran' => new UsersCollection(Pengeluaran::latest()->with(["user"])->paginate(5))
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Pengeluaran/CreatePengeluaran');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'user_id' => 'required',
            'keterangan' => 'required',
            'nominal' => 'required',
            'tanggal_pengeluaran' => 'required',
        ]);

        Pengeluaran::create($validatedData);

        return redirect('/pengeluaran')->with([
            'message' => "Request successfully sent!",
            'type' => 'success'
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(Pengeluaran $pengeluaran)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Pengeluaran $pengeluaran)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdatePengeluaranRequest $request, Pengeluaran $pengeluaran)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Pengeluaran $pengeluaran)
    {
        //
    }
    public function search(Request $request)
    {
        $search = $request->input('search');
        $startDate = $request->input('start_date');
        $endDate = $request->input('end_date');

        $pengeluaran = new UsersCollection(Pengeluaran::search($search, $startDate, $endDate)->latest()->with(["user"])->paginate(5));
        return $pengeluaran;
    }
}
