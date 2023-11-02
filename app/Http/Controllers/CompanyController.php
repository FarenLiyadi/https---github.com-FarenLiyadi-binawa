<?php

namespace App\Http\Controllers;

use App\Models\CompanyModel;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CompanyController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $company = CompanyModel::get();
        // dd($company);
        return Inertia::render('CompanyProfile/AdminCompany', [
            'company' => $company,
           
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('CompanyProfile/CreateCompany', [
            'company' => "",
           
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'judul'=> 'nullable',
            'harga'=> 'nullable',
            'desc'=> 'nullable',
        ]);
        CompanyModel::create($validatedData);
        return redirect('/adminlanding');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        return Inertia::render('CompanyProfile/EditCompany',[
            'company'=> CompanyModel::where("id",$id)->get(),
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {

        $validatedData = $request->validate([
            'judul'=> 'nullable',
            'harga'=> 'nullable',
            'desc'=> 'nullable',]);
        CompanyModel::where('id', $id)->update($validatedData);

        return redirect('/adminlanding');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $get_id = CompanyModel::findOrFail($id);
        // dd($get_id);
        CompanyModel::destroy($get_id->id);
        return redirect('/adminlanding');
    }
}
