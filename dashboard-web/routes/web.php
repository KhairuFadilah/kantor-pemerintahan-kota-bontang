<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Models\DataKantor;

Route::get('/', function () {
    $kantor = DataKantor::all();
    return Inertia::render('index', [
        'kantor' => $kantor
    ]);
})->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
