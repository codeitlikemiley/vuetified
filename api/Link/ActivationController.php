<?php

namespace Api\Link;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\User;
use App\Exceptions\LinkNotFound;

class ActivationController extends Controller
{
    public function __construct()
    {
        // $this->middleware(['roles:admin']);
    }
    public function activateLink($id)
    {
       $user =  User::find($id);
       $link = $user->referralLink;
       if($link){
           $link->active = true;
           $link->save();
           return response()->json(['message' => $user->name.' Link Activated!']);
       }else{
           throw new LinkNotFound;
       }

    }

    public function deactivateLink($id)
    {
        $user =  User::find($id);
        $link = $user->referralLink;
        if($link){
            $link->active = false;
            $link->save();
            return response()->json(['message' => $user->name.' Link Deactivated!']);
        }else{
            throw new LinkNotFound;
        }
    }
}
