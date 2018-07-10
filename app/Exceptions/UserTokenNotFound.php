<?php

namespace App\Exceptions;

use Illuminate\Http\Request;

class UserTokenNotFound extends \Exception
{
    /**
     * @param Request $request
     */
    public function render(Request $request)
    {
        return response()->json(['message' => 'User Token Not Found Exception: This Resource Can Only Be Loaded With Authorized User Token'], 404);
    }
}
