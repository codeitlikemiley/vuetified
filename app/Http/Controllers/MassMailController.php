<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Mail\MassMail;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class MassMailController extends Controller
{
    /**
     * @param Request $request
     */
    public function massMailExample(Request $request)
    {
        $data['subject']        = $request->subject ?? 'Subject';
        $data['message']        = $request->message ?? 'Message';
        $data['with_panel']     = $request->withPanel ?? true;
        $data['panel_message']  = $request->panel_message ?? 'Panel Message';
        $data['with_button']    = $request->with_button ?? true;
        $data['button_url']     = $request->button_url ?? '/';
        $data['button_color']   = $request->button_color ?? 'blue';
        $data['button_message'] = $request->button_message ?? 'click here';
        $data['signature']      = $request->signature ?? 'Thanks!';

        $user_ids = $request->user_ids;
        $users    = User::all();

        foreach ($users as $key => $user) {
            Mail::to($user)->queue(new Massmail($data, $user));
        }
        return 'MASS MAIL SENDING! CHECK YOUR MAILTRAP.IO ACCOUNT';
    }

    /**
     * @param Request $request
     */
    public function viewMailTemplate(Request $request)
    {
        $data['subject']        = $request->subject ?? 'Mass Mail Example Subject';
        $data['message']        = $request->message ?? 'This is An Example Message For Mass Mail Render Template';
        $data['with_panel']     = $request->has('with_panel') ? true : false;
        $data['panel_message']  = $request->panel_message ?? 'You Can Add Here Your Panel Message...';
        $data['with_button']    = $request->has('with_button') ? true : false;
        $data['button_url']     = $request->button_url ?? '/';
        $data['button_color']   = $request->button_color ?? 'blue';
        $data['button_message'] = $request->button_message ?? 'Call To Action! Click Here!';
        $data['signature']      = $request->signature ?? 'Thanks!';
        $user = User::first();
        return (new MassMail($data, $user))->render();
    }
}
