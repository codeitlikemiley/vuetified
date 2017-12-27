<?php

namespace App\Observers;

use App\Models\User;

class UserObserver
{
    /**
     * Listen to the User created event.
     *
     * @param  User  $user
     * @return void
     */
    public function creating(User $user)
    {
        // If We Didnt Passed Any  Id On user Creation then We Generate One
        if(is_null($user->id) && !is_numeric($user->id)){
            $user->id = User::generateUniqueID();
        }
        
    }

    /**
     * Listen to the User deleting event.
     *
     * @param  User  $user
     * @return void
     */
    public function deleting(User $user)
    {
        //
    }

}