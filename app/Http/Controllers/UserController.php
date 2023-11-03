<?php

namespace App\Http\Controllers;

use App\Http\Resources\UsersCollection;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class UserController extends Controller
{
    public function index(){
        return Inertia::render('User/index',[
            'user'=> new UsersCollection(User::latest()->paginate(10)),
        ]);
    }
    public function edit($id){
        // dd(User::where('id',$id)->get());
        return Inertia::render('User/edit',[
            'user'=> User::where('id',$id)->get(),
        ]);
    }

    public function update(Request $request, string $id)
    {

        $validatedData = $request->validate([
            'email'=> 'nullable',
            'name'=> 'nullable',
            'roles'=> 'nullable',]);
        User::where('id', $id)->update($validatedData);

        return redirect('/user');
    }
}
