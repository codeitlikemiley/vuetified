<?php

namespace App;

use App\SocialAccount;
use App\Mutators\UserMutator;
use Cviebrock\EloquentSluggable\Sluggable;
use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Laravel\Passport\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens,Notifiable, Sluggable, UserMutator;

    public $incrementing = false;
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
    
    protected $dates = ['created_at', 'updated_at'];

    public function socialAccounts()
    {
        return $this->hasMany(SocialAccount::class);
    }

    public function sluggable()
    {
        return [
            'username' => [
                'source' => 'name'
            ]
        ];
    }

    public function findForPassport($identifier) {
        return $this->orWhere('email', $identifier)->orWhere('username', $identifier)->first();
    }

    public function reservedSlugs()
    {
        return ['admin', 'support', 'api', 'administrator','helpdesk','customer-support','forum','blog','shop','billing','products'];
    }

}
