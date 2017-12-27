<?php

namespace App\Exceptions;

use Illuminate\Http\Request;

class EmailNotFound extends \Exception

{
    public function render(Request $request)
    {
        return response()->json(['message' => 'Email Not Found Exception: '.$request->email.' not found.'],404);
    }
}
