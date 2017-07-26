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
// Test Laravel ECHO

use App\User;

$user = User::first();
\Auth::loginUsingId($user->id);

Route::get('get-auth', function () {
    broadcast(new \App\Events\GetAuthUser(auth()->user()))->toOthers();
    return response()->json(['message' => 'ok'],200);
});

Route::get('user-created', function () {
    $user = App\User::all()->last();
    broadcast(new \App\Events\UserCreated($user))->toOthers();
    return response()->json(['message' => 'ok'],200);
});

Route::get('get-announcement', function () {
    $user = App\User::all()->last();
    broadcast(new \App\Events\NewMessage($user,'New Group Message!'))->toOthers();
    return response()->json(['message' => 'ok'],200);
});


// Vue Front End
Route::get('/{vue?}', function () {
    return view('app');
})->where('vue', '[\/\w\.-]*')->name('app');

// Dont Add Route Below