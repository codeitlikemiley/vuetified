<?php

namespace App\Traits\User;

trait Scopes
{
    public function scopeWhereCan($query, $ability)
    {
    $query->where(function ($query) use ($ability) {
        // direct
        $query->whereHas('abilities', function ($query) use ($ability) {
            $query->byName($ability);
        });
        // through roles
        $query->orWhereHas('roles', function ($query) use ($ability) {
             $query->whereHas('abilities', function ($query) use ($ability) {
                 $query->byName($ability);
             });
         });
     });
    }
}