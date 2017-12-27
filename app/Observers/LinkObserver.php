<?php

namespace App\Observers;

use App\Models\Link;

class LinkObserver
{
    /**
     * Listen to the Link created event.
     *
     * @param  Link  $link
     * @return void
     */
    public function creating(Link $link)
    {
        // If We Didnt Passed Any  Id On Link Creation then We Generate One
        if(is_null($link->id) && !is_numeric($link->id)){
            $link->id = Link::generateUniqueID();
        }
        
    }

    /**
     * Listen to the Link deleting event.
     *
     * @param  Link  $link
     * @return void
     */
    public function deleting(Link $link)
    {
        //
    }

}