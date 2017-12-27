<?php

namespace App\Http\Resources\User;

use Illuminate\Http\Resources\Json\Resource;

class LinkResource extends Resource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'link' => $this->link,
            'active' => $this->active,
            'sp_link_id' => $this->sp_link_id,
            'sp_user_id' => $this->sp_user_id,
        ];
    }
}
