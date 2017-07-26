<?php

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


// Vue Front End
Route::get('/{vue?}', function () {
    return view('app');
})->where('vue', '[\/\w\.-]*')->name('app');

// Dont Add Route Below