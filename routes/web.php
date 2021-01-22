<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\LoginController;

Route::impersonate();

Route::get('/', [HomeController::class, 'home'])->name('home');

Route::get('login', [LoginController::class, 'showLoginForm'])->name('login');
Route::post('login', [LoginController::class, 'login'])->name('login.attempt');
Route::get('logout', [LoginController::class, 'showLogoutForm'])->name('logout')->middleware('auth');
Route::post('logout', [LoginController::class, 'logout'])->name('logout.attempt')->middleware('auth');
