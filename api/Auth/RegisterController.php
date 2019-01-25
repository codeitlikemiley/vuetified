<?php

namespace Api\Auth;

use Api\Controller;
use App\Models\Link;
use App\Models\User;
use App\Models\Profile;
use App\Rules\CheckSponsor;
use Illuminate\Http\Request;
use Laravel\Passport\Client;
use App\Traits\IssueTokenTrait;

class RegisterController extends Controller
{
    use IssueTokenTrait;

    /**
     * @var mixed
     */
    private $client;

    public function __construct()
    {
        $this->client = Client::first();
    }

    /**
     * @param  Request $request
     * @return mixed
     */
    public function register(Request $request)
    {
        /* validate request input */
        request()->validate([
            'name'                  => 'required',
            'username'              => 'required|email',
            'password'              => 'required|min:6|confirmed',
            'password_confirmation' => 'required',
            'role'                  => [
                'sometimes',
                'required',
                'exists:roles,name'
            ],
            'sponsor'               => [
                'sometimes',
                'required',
                /* will check for userid if correct */
                new CheckSponsor
            ]
        ]);
        /* create user account */
        $user = User::create([
            'name'     => request('name'),
            'email'    => request('username'),
            'password' => request('password')
        ]);

        /* create an empty profile */
        $profile = new Profile();
        $user->profile()->save($profile);

        /* attach specific role */
        if ($request->has('role')) {
            $user->assignRole(request('role'));
        } else {
            /* attach default role */
            $user->assignRole('customer');
        }

        /* create a new link for this account */
        $link       = new Link();
        $link->link = $user->username;
        $user->referralLink()->save($link);
        /* issue new access_token */
        return $this->issueToken($request, 'password');
    }
}
