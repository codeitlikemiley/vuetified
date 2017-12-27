<?php

namespace App\Models;

use App\Traits\User\Scopes;
use App\Traits\User\Methods;
use App\Traits\User\Mutators;
use App\Traits\GenerateUniqueID;
use Laravel\Passport\HasApiTokens;
use App\Traits\User\Relationships;
use Spatie\Permission\Traits\HasRoles;
use Illuminate\Notifications\Notifiable;
use Cviebrock\EloquentSluggable\Sluggable;
use Illuminate\Foundation\Auth\User as Authenticatable;
use App\Notifications\PasswordResetNotification;

class User extends Authenticatable
{
    use 
    Scopes,
    Methods,
    Mutators,
    GenerateUniqueID,
    HasApiTokens,
    Relationships,
    HasRoles,
    Notifiable,
    Sluggable;

    public $incrementing = false;

    protected $table = 'users';
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'email', 'password', 'username'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    /**
     * The attributes that should be casted by Carbon
     *
     * @var array
     */
    protected $dates = ['created_at', 'updated_at'];

    protected $appends = ['all_permissions','can', 'all_roles'];

    /**
     * Check For Sponsor During Account Creation
     * If Theres Non Use First User as Default
     * Note : First User Should Be Seed as User with ID : 1
     *
     */
    public static function boot()
    {
        parent::boot();

        static::creating(function ($user) {
            /* Our Default Referral Link if No Cookie Is Present */
            $user->sp_id = optional(self::first())->id;
            /* change this */
            $sponsorID = \Cookie::get('sponsor');
            
            /* if cookie is present */
            if ($sponsorID) {
                $sponsor = self::find($sponsorID);
                $user->sp_id = $sponsor->id;
            }
            /* override cookie with current request */
            if($sponsorID = request()->sponsor_id){
                $sponsor = self::find($sponsorID);
                $user->sp_id = $sponsor->id;
            }

        });
    }
    /**
     * The attributes that should be Slugify
     *
     */
    public function sluggable()
    {
        return [
            'username' => [
                'source' => 'name'
            ]
        ];
    }
    /**
     * Override Password Reset Default Built in Laravel
     *
     */
    public function sendPasswordResetNotification($token)
    {
        $this->notify(new PasswordResetNotification($token));
    }
}
