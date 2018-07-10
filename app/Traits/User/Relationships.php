<?php

namespace App\Traits\User;

use App\Models\Link;
use App\Models\User;
use App\Models\Profile;
use App\Models\SocialAccount;

trait Relationships
{
    /**
     * Profile Relationship
     *
     */
    public function profile()
    {
        return $this->hasOne(Profile::class);
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
     * Referrals Relationship
     *
     */
    public function referrals()
    {
        return $this->hasMany(User::class, 'sp_id');
    }

    /**
     * Social Account Relationship
     *
     */
    public function socialAccounts()
    {
        return $this->hasMany(SocialAccount::class);
    }

    /**
     * Sponsor Relationship
     *
     */
    public function sponsor()
    {
        return $this->belongsTo(User::class, 'sp_id');
    }
}
