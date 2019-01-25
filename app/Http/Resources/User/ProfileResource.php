<?php

namespace App\Http\Resources\User;

use Illuminate\Http\Resources\Json\Resource;

class ProfileResource extends Resource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'contact_no' => $this->contact_no,
            'address_1'  => $this->address_1,
            'address_2'  => $this->address_2,
            'city'       => $this->city,
            'country'    => $this->country,
            'zip'        => $this->zip,
            'state'      => $this->state
        ];
    }
}
