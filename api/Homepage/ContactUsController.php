<?php

namespace Api\Homepage;

use Api\Controller;
use App\Models\User;
use App\Mail\ContactUsMail;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class ContactUsController extends Controller
{
    public function contact(Request $request)
    {
        $data = request()->validate([
            'name' => [
                'required',
                'regex:/(^[A-Za-z0-9 ]+$)+/'
            ],
            'email' => [
                'required',
                'email'
            ],
            'subject' => [
                'present',
                'required'
            ],
            'message' => [
                'present',
                'required'
            ],
        ]);
        $user = User::findByUsername('admin');
        Mail::to($user)
        ->queue(new ContactUsMail($data));
        return response()->json(['message' => 'Mail Sent'],200);
    }
}
