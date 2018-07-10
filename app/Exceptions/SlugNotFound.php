<?php

namespace App\Exceptions;

use Illuminate\Http\Request;

class SlugNotFound extends \Exception
{
    /**
     * @param Request $request
     */
    public function render(Request $request)
    {
        return response()->json(['message' => 'Slug Not Found Exception: '.$request->slug.' slug not found.'], 404);
    }
}
