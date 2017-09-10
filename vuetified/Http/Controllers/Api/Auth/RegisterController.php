<?php

namespace Vuetified\Http\Controllers\Api\Auth;

use App\Http\Controllers\Controller;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Laravel\Passport\Client;
use Vuetified\Traits\IssueTokenTrait;

class RegisterController extends Controller
{
    use IssueTokenTrait;

	private $client;

	public function __construct(){
		$this->client = Client::first();
	}

    public function register(Request $request)
	{
		request()->validate([
			'name' => 'required',
    		'email' => 'required|email|unique:users',
    		'password' => 'required|min:6|confirmed',
			'password_confirmation' => 'required'
		]);

    	User::create([
    		'name' => request('name'),
    		'email' => request('email'),
    		'password' => request('password')
    	]);

    	return $this->issueToken($request, 'password');
    }
}