<?php

namespace Api\Auth;

use Api\Controller;
use Illuminate\Support\Facades\Password;
use Illuminate\Http\Request;
use App\Traits\IssueTokenTrait;
use Laravel\Passport\Client;

class ResetPasswordController extends Controller
{

    use IssueTokenTrait;

    private $client;
    
    public function __construct()
    {
        $this->client = Client::first();
    }

    public function resetPassword(Request $request)
    {
        $data = $request->validate([
			'email' => 'required|email',
            'token' => 'required',
            'password' => 'required|min:6|confirmed',
            'password_confirmation' => 'required'
        ]);
        
        // Reset Password
        $response = $this->broker()->reset(
            $data, function ($user, $password) {
                $this->reset($user, $password);
            }
        );
        // Check if We Have Reset Password
        if($response !== Password::PASSWORD_RESET) {
            return response()->json(['message' => 'Failed To Reset Password.'],500);
        }
        // Issue a New Access Token
        return $this->issueToken($request, 'password');
    }

    /**
     * Get the broker to be used during password reset.
     *
     * @return \Illuminate\Contracts\Auth\PasswordBroker
     */
    public function broker()
    {
        return Password::broker();
    }

    /**
     * Reset the given user's password.
     *
     * @param  \Illuminate\Contracts\Auth\CanResetPassword  $user
     * @param  string  $password
     * @return void
     */
    protected function reset($user, $password)
    {
        // Change New Pass
        $user->password = $password;
        //  We Reset Resent Count back to Zero
        $user->resent = 0;
        $user->save();
    }
}