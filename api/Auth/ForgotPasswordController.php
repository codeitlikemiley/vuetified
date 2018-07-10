<?php

namespace Api\Auth;

use Api\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use App\Exceptions\EmailNotFound;
use Illuminate\Support\Facades\Password;

class ForgotPasswordController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */

    public function sendResetEmail(Request $request)
    {
        $request->validate([
            'username' => [
                'required',
                'email'
            ]
        ]);
        // Check if the Email is Registered
        $user = User::findByEmail($request->username);

        // Throw Exception Email Not Found
        if (!$user) {
            throw new EmailNotFound;
        }

        // Check if We Exceeded Password Reset!

        // If Yes then We Show a Message We Reached the Limit and Avoid Sending More Email
        if ($user->resent >= 3) {
            return response()->json(['message' => 'Request Limit of ('.$user->resent.') Exceeded.'], 429);
        }

        // Send Mail
        $broker = $this->getPasswordBroker();

        $sendingResponse = $broker->sendResetLink(['email' => $request->username]);

        // Check if We Sent The Email
        if (Password::RESET_LINK_SENT !== $sendingResponse) {
            return response()->json(['message' => 'Failed To Send Reset Link.'], 500);
        }

        // Increase the Resent Number by 1 Each time We Sent An Email
        $user->resent++;
        $user->save();
        // Show Message We Have Successfully Email them the Reset Link
        return response()->json([
            'message' => 'Password Reset Link Sent!'
        ], 200);
    }

    /**
     * Get the broker to be used during password reset.
     *
     * @return \Illuminate\Contracts\Auth\PasswordBroker
     */
    private function getPasswordBroker()
    {
        return Password::broker();
    }
}
