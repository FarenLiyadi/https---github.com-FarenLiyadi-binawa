<?php

namespace App\Http\Controllers;

use App\Models\User;
use Inertia\Inertia;
use App\Models\Event;
use App\Models\Peserta;
use Illuminate\Http\Request;
use App\Http\Requests\StoreEventRequest;
use App\Http\Requests\UpdateEventRequest;
use App\Http\Resources\UsersCollection;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Auth;

class EventController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function __construct()
    {
        $this->middleware('admin')->except('index');
    }
    public function index()
    {
        $user = auth()->user();

        if ($user->roles == "USER") {
            return Inertia::render('Event/IndexEvent', [
                // 'event' => Event::filter()->get(),
                'event' => new UsersCollection(Event::filter()->paginate(2)),
                'peserta' => Peserta::where('user_id', $user->id)->get()
            ]);
        };
        // dd(new UsersCollection(Event::orderBy('tanggal_deadline', 'asc')->paginate(1)));
        return Inertia::render('Event/IndexEvent', [
            // 'event' => Event::orderBy('tanggal_deadline', 'asc')->get()
            'event' => new UsersCollection(Event::orderBy('tanggal_deadline', 'desc')->paginate(1))
            // $users = new UsersCollection(User::with(['biography'])->where("roles","USER")->latest()->paginate(20));
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Event/CreateEvent');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        // dd($request);
        $validatedData = $request->validate([
            'last_update_by' => 'required',
            'nama_event' => 'required',
            'slug' => 'required|unique:events',
            'tempat_event' => 'required',
            'tanggal_deadline' => 'required',
        ]);
        $request->validate([
            'poster_url'=>'mimes:jpeg,jpg,png|nullable',
        ]);
        

        $poster_url = $request->file('poster_url');
        if($request->file('poster_url')){

            $nama_poster_url = 'poster/event_poster'.date('Ymdhis').'.'.$request->file('poster_url')->getClientOriginalExtension();
            $poster_url->move('poster',$nama_poster_url);
            // dd($nama_pas_foto);
        } else{
            $nama_poster_url = null;
        }

        $replacement = array('poster_url'=>$nama_poster_url);
        $validatedData2 = array_replace($validatedData,$replacement);
        Event::create($validatedData2);
        return redirect('/event')->with([
            'message' => "Event successfully created!",
            'type' => 'success'
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(Event $event)
    {
        return Inertia::render('Event/ShowEvent', [
            'event' => $event,
            'users' => User::where('roles', '=', 'USER')->orderBy('name', 'asc')->get()
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Event $event)
    {
        return Inertia::render('Event/EditEvent', [
            'event' => $event
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Event $event)
    {
        $get_event = Event::where('id', $event->id)->get();
       
        $rules = [
            'last_update_by' => 'required',
            'nama_event' => 'required',
            'tempat_event' => 'required',
            'tanggal_deadline' => 'required',
        ];
        // $request->validate([
        //     'poster_url'=>'mimes:jpeg,jpg,png|nullable',
        // ]);

        if($request->file('poster_url')!=null){
            // dd($get_event[0]->poster_url);
            $poster_url = $request->file('poster_url');
                if($get_event[0]->poster_url !=null && File::exists(public_path($get_event[0]->poster_url))){
                    File::delete(public_path($get_event[0]->poster_url));
                }
            $nama_poster_url = 'poster/event_poster'.date('Ymdhis').'.'.$request->file('poster_url')->getClientOriginalExtension();
            $poster_url->move('poster',$nama_poster_url);
            // dd($nama_poster_url);
        } else{
            // dd($biography);
            $nama_poster_url = $get_event[0]->poster_url;
        }
        $replacement = array('poster_url'=>$nama_poster_url);

        // Mengecek apakah slug yang baru(request) tidak sama dengan slug yang lalu
        if ($request->slug != $event->slug) {
            $rules['slug'] = 'required|unique:events';
        }
        $validatedData = $request->validate($rules);
        $replacement = array('poster_url'=>$nama_poster_url);
        $validatedData2 = array_replace($validatedData,$replacement);
        Event::where('id', $event->id)->update($validatedData2);

        return redirect('/event')->with([
            'message' => "Event successfully updated!",
            'type' => 'success'
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Event $event)
    {
        // hapus post
        Event::destroy($event->id);

        return redirect('/event')->with([
            'message' => "Event successfully deleted!",
            'type' => 'success'
        ]);
    }
}
