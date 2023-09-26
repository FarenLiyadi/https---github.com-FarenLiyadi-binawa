<?php

namespace App\Http\Controllers;

use App\Models\Absen;
use Illuminate\Http\Request;

class AbsenController extends Controller
{
    public function store(Request $request)
    {
        for ($i = 0; $i < $request->length; $i++) {

            $validatedData = validator($request[$i], [
                'user_id' => 'required',
                'last_update_by' => 'required',
                'latihan_id' => 'required',

            ])->validate();

            Absen::create($validatedData);
        }

        return back()->with([
            'message' => "Request successfully sent!",
            'type' => 'success'
        ]);
    }

    public function delete(Request $request)
    {
        for ($i = 0; $i < $request->length; $i++) {
            Absen::destroy($request[$i]);
        }
        return back()->with([
            'message' => "Request successfully sent!",
            'type' => 'success'
        ]);
    }
}
