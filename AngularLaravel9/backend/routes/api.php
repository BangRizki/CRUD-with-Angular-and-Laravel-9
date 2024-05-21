<?php

// use Illuminate\Http\Request;

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\MahasiswaController;

Route::get('/mahasiswa', [MahasiswaController::class, 'getAll']);
Route::post('/save', [MahasiswaController::class, 'createData']);
Route::put('/update/{id}', [MahasiswaController::class, 'updateData']);
Route::delete('/delete/{id}', [MahasiswaController::class, 'deleteData']);


// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });