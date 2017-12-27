<?php

namespace App\Http\Resources\User;

use Illuminate\Http\Resources\Json\Resource;
use App\Http\Resources\User\SponsorResource;
use App\Http\Resources\User\LinkResource;
use App\Http\Resources\User\ProfileResource;

class UserResource extends Resource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'username' => $this->username,
            'email' => $this->email,
            'photo_url' => $this->photo_url,
            /* load the user profile that will be use as default for payment and shipment */
            'profile' => new ProfileResource($this->whenLoaded('profile')),
            /* load referral link details */
            'referral_link' => new LinkResource($this->whenLoaded('referralLink')),
            /* load sponsor and link details */
            'sponsor' =>  new SponsorResource($this->whenLoaded('sponsor')),
            /* list all roles */
            'roles' => $this->role_list,
            /* list all users inherited permissions from any role */
            'permissions' => $this->all_permissions,
            /* list all granted permissions to a user */
            /* use mainly in our vue auth permission check */
            'can' => $this->can,
        ];
    }
}
