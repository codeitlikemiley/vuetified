<?php 

namespace App\Traits;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

trait IssueTokenTrait{
	public function issueToken(Request $request, $grantType, $scope = null)
	{
		$params = [
    		'grant_type' => $grantType,
    		'client_id' => $this->client->id,
    		'client_secret' => $this->client->secret,
    		'scope' => $scope
    	];

        if($grantType !== 'social'){
            $params['username'] = $request->username ?? $request->email;
		}else {
		//? add logic here for social to save also scope and access token in Social Accounts table
		//! Save Access Token, Refresh Token, Username, Expires At, Type, and Scope
		}
    	$request->request->add($params);

    	$proxy = Request::create('oauth/token', 'POST');

    	return Route::dispatch($proxy);

	}

}