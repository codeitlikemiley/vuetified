<?php

namespace Api\Auth;

use Api\Controller;
use Illuminate\Http\Request;
use Laravel\Passport\Client;
use App\Traits\IssueTokenTrait;
use Illuminate\Support\Facades\DB;
use App\Rules\MustBeEmailOrUsername;
use Illuminate\Support\Facades\Auth;

class LoginController extends Controller
{
    use IssueTokenTrait;

    /**
     * @var string
     */
    protected $username = 'email';

    /**
     * @var mixed
     */
    private $client;

    public function __construct()
    {
        $this->client = Client::first();
    }

    /**
     * @param Request $request
     */
    public function check(Request $request)
    {
        if ($request->user()) {
            return response()->json(['authenticated' => true], 200);
        }

        return response()->json(['authenticated' => false], 401);
    }

    /**
     * @param  Request $request
     * @return mixed
     */
    public function login(Request $request)
    {
        request()->validate([
            'username' => [
                'required',
                new MustBeEmailOrUsername
            ],
            'password' => 'required|min:8'
        ]);

        return $this->issueToken($request, 'password');
    }

    /**
     * @param Request $request
     */
    public function logout(Request $request)
    {
        $accessToken = $request->user()->token();

        DB::table('oauth_refresh_tokens')
            ->where('access_token_id', $accessToken->id)
            ->update(['revoked' => true]);

        $accessToken->revoke();
        return response()->json(['message' => 'User Logout.'], 200);
    }

    /**
     * @param  Request $request
     * @return mixed
     */
    public function refresh(Request $request)
    {
        request()->validate([
            'refresh_token' => 'required'
        ]);

        return $this->issueToken($request, 'refresh_token');
    }
}
