<?php

namespace App\Exceptions;

use Illuminate\Http\Request;

class RevokeAdminUpdate extends \Exception
{
    /**
     * @param Request $request
     */
    public function render(Request $request)
    {
        if ($request->wantsJson()) {
            return response()->json(['message' => 'Modifying Super Admin is Not Allowed!'], 404);
        }

        return redirect(\Config::get('app.url'));
    }
}
