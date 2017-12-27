<?php

namespace App\Exceptions;

use Illuminate\Http\Request;

class UserNotFound extends \Exception

{
    public function render(Request $request)
    {
        if($request->wantsJson()){
        return response()->json(['message' => 'User ID: '.$request->id .' Not Found!'],404);
        }
        return redirect(\Config::get('app.url'));
    }
}
