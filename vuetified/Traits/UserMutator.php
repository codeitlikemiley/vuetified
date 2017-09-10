<?php

namespace Vuetified\Traits;
use Keygen;

trait UserMutator
{
    public function setEmailAttribute($email)
    {
        // Ensure valid email
        if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
            throw new \Exception("Invalid email address.");
        }
        $this->attributes['email'] = $email;
    }
    public function setUsernameAttribute($username)
    {
        if(static::whereUsername($username)->count() > 0){
            throw new \Exception("Username already exists.");
        }
        // Make Username Lowercase plus Use Underscore on spaces
        $this->attributes['username'] = strtolower(str_replace(' ', '_', $username));
    }
    public function setIdAttribute($id)
    {
        if(static::whereId($id)->count() > 0){
            throw new \Exception("Id already exists.");
        }
        $this->attributes['id'] = $id;
    }

    public function setPasswordAttribute($password)
    {
        $this->attributes['password'] = bcrypt($password);
    }

    private static function generateID()
    {
       return Keygen::numeric(14)->prefix(mt_rand(1, 9))->generate(true);
    }
    
    public static function generateUniqueID()
    {
    $id = self::generateID();

    // Ensure ID does not exist
    // Generate new one if ID already exists
    while (self::whereId($id)->count() > 0) {
        $id = self::generateID();
    }

    return $id;
    }

    public static function findByUsername($username)
    {
        return self::whereUsername($username)->firstOrFail();
    }

    public static function findByEmail($email)
    {
        return self::whereEmail($email)->firstOrFail();
    }

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