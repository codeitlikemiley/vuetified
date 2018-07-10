<?php

namespace App\Models;

use App\Traits\GenerateUniqueID;
use Illuminate\Database\Eloquent\Model;

class Link extends Model
{
    use GenerateUniqueID;

    /**
     * @var mixed
     */
    public $incrementing = false;

    /**
     * @var array
     */
    protected $dates = ['created_at', 'updated_at', 'date_activated'];

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = ['link'];

    /**
     * The database table used by the model.
     *
     * @var string
     */
    protected $table = 'links';

    /**
     * [activeSponsor Loops On Leap Frog Until Status Active].
     *
     * @param  [int] $sp_lid  [sp_link_id]
     * @return [int] [Returns the First Active Sponsor Link]
     */
    public function activeSponsor($sp_lid)
    {
        $lid = $sp_lid;

        while ($this->spStatus($lid) === false) {
            $lid = $this->leapfrog($lid);
        }

        return $lid;
    }

    public static function boot()
    {
        parent::boot();

        static::creating(function ($link) {
            /* Our Default Referral Link if No Cookie Is Present */
            $link->sp_user_id = optional(User::first())->id;
            $link->sp_link_id = optional(self::first())->id;
            /* change this */
            $userID = \Cookie::get('sponsor');

            /* if cookie is present */
            if ($userID) {
                $user             = User::find($userID);
                $link->sp_user_id = $userID;
                $link->sp_link_id = $user->referralLink->id;
            }

            /* override cookie with current request */
            if ($sponsor = request()->sponsor_id) {
                $user             = User::find($sponsor);
                $link->sp_user_id = $user->id;
                $link->sp_link_id = $user->referralLink->id;
            }
        });
    }

    /**
     * [findByLink Get Link Object By Link].
     *
     * @param  [string] $link        [registered link]
     * @return [object] [linkData]
     */
    public static function findByLink($link)
    {
        return self::where('link', $link)->first();
    }

    public static function last()
    {
        return self::latest()->first();
    }

    /**
     * [setLinkAttribute Link Setter Mutator].
     *
     * @param [string] $value [Set Link to Lowercase on Save]
     */
    public function setLinkAttribute($value)
    {
        $this->attributes['link'] = strtolower($value);
    }

    /**
     * [user Eloquent Relationship].
     *
     * @return [Collection] [Link Belongs To Relationship]
     */
    public function user()
    {
        return $this->belongsTo(User::class);
    }

    /**
     * [leapfrog Sponsor Link if Not Active].
     *
     * @param  [int] $lid    [sp_link_id]
     * @return [int] [Return The Next Sponsor if Not Active]
     */
    protected function leapfrog($lid)
    {
        $sponsor = self::find($lid);

        if (!$sponsor->active) {
            return $sponsor->sp_link_id;
        }

        return $sponsor->id;
    }

    /**
     * [spStatus Get Status of Sponsor Link].
     *
     * @param  [int]     $lid    [sp_link_id]
     * @return [Boolean] [Return The Status]
     */
    protected function spStatus($lid)
    {
        $sponsor = self::find($lid);

        if (!$sponsor->active) {
            return false;
        }

        return true;
    }
}
