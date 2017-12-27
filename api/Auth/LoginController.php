<?php

namespace Api\Auth;

use Api\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Route;
use Laravel\Passport\Client;
use App\Rules\MustBeEmailOrUsername;
use App\Traits\IssueTokenTrait;

class LoginController extends Controller
{

    use IssueTokenTrait;

	private $client;

	protected $username = 'email';

	public function __construct()
	{
		$this->client = Client::first();
	}

    public function login(Request $request)
	{
		request()->validate([
			'username' => [
				'required',
				new MustBeEmailOrUsername
			],
			'password' => 'required|min:6'
		]);

        return $this->issueToken($request, 'password');

    }

    public function refresh(Request $request)
	{
		request()->validate([
			'refresh_token' => 'required',
		]);

    	return $this->issueToken($request, 'refresh_token');
    }

    public function logout(Request $request)
	{
    	$accessToken = $request->user()->token();

    	DB::table('oauth_refresh_tokens')
    		->where('access_token_id', $accessToken->id)
    		->update(['revoked' => true]);

    	$accessToken->revoke();
    	return response()->json(['message' => 'User Logout.'], 200);
	}
	
	public function check(Request $request){
		if($request->user()){
			return response()->json(['authenticated' => true],200);
		}
		return response()->json(['authenticated' =>false],401);
	}
}