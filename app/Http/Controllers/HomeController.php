<?php

namespace App\Http\Controllers;

use Inertia\Inertia;

class HomeController extends Controller
{
    public function home()
    {
        return Inertia::render('Home', [
            'url' => url('/'),
        ]);
    }
}
