<?php

/* Only Add this Example Route if Users Table is Created */
/* The Following Routes Are Triggered in app.js Mounted Life Hoook Cycle */

if(\Schema::hasTable('users')){
$user = \App\User::first();
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
}

/* Vue Front End Wildcard Catcher */
Route::get('/{vue?}', function () {
    return view('app');
})->where('vue', '[\/\w\.-]*')->name('app');

/* Avoid Adding Routes Below This Line */