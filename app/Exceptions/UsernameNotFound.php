<?php

namespace App\Exceptions;

use Illuminate\Http\Request;

class UsernameNotFound extends \Exception
{
    /**
     * @param Request $request
     */
    public function render(Request $request)
    {
        if ($request->wantsJson()) {
            return response()->json(['message' => 'Username Not Found Exception: '.$request->username.' not found.'], 404);
        }

        return redirect(\Config::get('app.url'));
    }
}
