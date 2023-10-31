<?php

use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Application;
use App\Http\Controllers\AbsenController;
use App\Http\Controllers\EventController;
use App\Http\Controllers\LatihanController;
use App\Http\Controllers\PesertaController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\RankingController;
use App\Http\Controllers\BiographyController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\LanggananController;
use App\Http\Controllers\PembayaranController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Route::get('/', function () {
//     return Inertia::render('Welcome', [
//         'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register'),
//         'laravelVersion' => Application::VERSION,
//         'phpVersion' => PHP_VERSION,
//     ]);
// });
Route::get('/', function () {
    return view('landing', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

// Route::get('/grafik', [GraphController::class,'index']);

Route::get('/dashboard', [DashboardController::class, 'index'])->middleware(['auth', 'verified'])->name('dashboard');
// Route::get('/', [DashboardController::class, 'landing'])->name('landing');

Route::resource('/biography', BiographyController::class)->middleware(['auth', 'verified']);
Route::resource('/event', EventController::class)->middleware(['auth', 'verified']);
Route::resource('/peserta', PesertaController::class)->middleware(['auth', 'verified']);
Route::resource('/latihan', LatihanController::class)->middleware(['auth', 'verified']);
Route::resource('/pembayaran', PembayaranController::class)->middleware(['auth', 'verified']);

Route::get('/ranking', [RankingController::class, 'index'])->name('ranking');
Route::get('/langganan', [LanggananController::class, 'index'])->name('langganan');
Route::post('/langganan', [LanggananController::class, 'update']);
Route::post('/membership', [LanggananController::class, 'membershipEnd']);

Route::post('/absen', [AbsenController::class, 'store'])->middleware(['auth', 'verified']);;
Route::post('/delete-absen', [AbsenController::class, 'delete'])->middleware(['auth', 'verified']);


Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';
