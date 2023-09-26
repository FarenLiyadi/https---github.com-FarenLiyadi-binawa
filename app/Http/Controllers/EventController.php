<?php

namespace App\Http\Controllers;

use App\Models\Event;
use App\Http\Requests\StoreEventRequest;
use App\Http\Requests\UpdateEventRequest;
use Illuminate\Http\Request;
use Inertia\Inertia;

class EventController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $user = auth()->user();

        if ($user->roles == "USER") {
            return Inertia::render('Event/IndexEvent', [
                'event' => Event::filter()->get()
            ]);
        };
        return Inertia::render('Event/IndexEvent', [
            'event' => Event::orderBy('tanggal_deadline', 'asc')->get()
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
        $validatedData = $request->validate([
            'last_update_by' => 'required',
            'nama_event' => 'required',
            'slug' => 'required|unique:events',
            'tempat_event' => 'required',
            'tanggal_deadline' => 'required',
        ]);

        Event::create($validatedData);
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
            'event' => $event
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
        $rules = [
            'last_update_by' => 'required',
            'nama_event' => 'required',
            'tempat_event' => 'required',
            'tanggal_deadline' => 'required',
        ];

        // Mengecek apakah slug yang baru(request) tidak sama dengan slug yang lalu
        if ($request->slug != $event->slug) {
            $rules['slug'] = 'required|unique:events';
        }
        $validatedData = $request->validate($rules);

        Event::where('id', $event->id)->update($validatedData);

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
