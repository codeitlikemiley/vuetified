<?php

namespace App\Exceptions;

use Illuminate\Http\Request;

class LinkNotFound extends \Exception
{
    /**
     * @param Request $request
     */
    public function render(Request $request)
    {
        if ($request->wantsJson()) {
            return response()->json(['message' => 'Link Not Found Exception: '.$request->referrallink.' not found.'], 404);
        }

        return redirect(\Config::get('app.url'));
    }
}
