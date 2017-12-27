<?php

namespace App\Traits\User;

use App\Models\Link;
use App\Models\SocialAccount;
use App\Models\Profile;
use App\Models\User;

trait Relationships

{
    /**
     * Social Account Relationship
     *
     */
    public function socialAccounts()
    {
        return $this->hasMany(SocialAccount::class);
    }
    /**
     * Referral Link Relationship
     *
     */
    public function referralLink()
    {
        return $this->hasOne(Link::class);
    }
    /**
     * Profile Relationship
     *
     */
    public function profile()
    {
        return $this->hasOne(Profile::class);
    }

    /**
     * Sponsor Relationship
     *
     */
    public function sponsor()
    {
        return $this->belongsTo(User::class, 'sp_id');
    }
     /**
     * Referrals Relationship
     *
     */
    public function referrals()
    {
        return $this->hasMany(User::class, 'sp_id');
    }
}