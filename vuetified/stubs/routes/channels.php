<?php

/*
|--------------------------------------------------------------------------
| Broadcast Channels
|--------------------------------------------------------------------------
|
| Here you may register all of the event broadcasting channels that your
| application supports. The given channel authorization callbacks are
| used to check if an authenticated user can listen to the channel.
|
*/
// Example Private Channel
Broadcast::channel('App.User.{id}', function ($user, $id) {
    return (int) $user->id === (int) $id;
});
// Example Presence Channel
Broadcast::channel('chat', function ($user) {
    // Create a Logic for CanJoinRoom In User Model
    // Return an Array Or Null or False
    // for Now Lets Just Fake it
    $canJoinRoom = true;
    if ($canJoinRoom) {
        return ['id' => $user->id, 'name' => $user->name];
    }
});
