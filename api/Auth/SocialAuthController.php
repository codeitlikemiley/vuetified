<?php

namespace Api\Auth;

use Api\Controller;
use App\Models\User;
use App\Models\SocialAccount;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Validation\Rule;
use Laravel\Passport\Client;
use App\Traits\IssueTokenTrait;

class SocialAuthController extends Controller
{

	use IssueTokenTrait;

	private $client;

	public function __construct(){
		$this->client = Client::first();
	}

    public function socialAuth(Request $request){

    	$this->validate($request, [
    		'name' => 'required',
    		'email' => 'email',
    		'provider' => 'required|in:facebook,twitter,google',
    		'provider_user_id' => 'required'
    	]);

    	$socialAccount = SocialAccount::where('provider', $request->provider)->where('provider_user_id', $request->provider_user_id)->first();

    	if($socialAccount){
    		return $this->issueToken($request, 'social');
    	}

    	$user = User::where('email', $request->email)->first();

    	if($user){
    		$this->addSocialAccountToUser($request, $user);
    	}else{
    		try{
    			$this->createUserAccount($request);
    		}catch(\Exception $e){
    			return response("An Error Occured, please retry later", 422);
    		}
    	}

    	return $this->issueToken($request, 'social');
    }

    /**
     * Associate social account to user
     * @param Request $request [description]
     * @param User    $user    [description]
     */
    private function addSocialAccountToUser(Request $request, $user){

    	$this->validate($request, [
    		'provider' => ['required', Rule::unique('social_accounts')->where(function($query) use ($user) {
    			return $query->where('user_id', $user->id);
    		})],
    		'provider_user_id' => 'required'
    	]);

    	$user->socialAccounts()->create([
			'provider' => $request->provider,
    		'provider_user_id' => $request->provider_user_id
    	]);

    }

    /**
     * Create user accound and Social account
     * @param  Request $request [description]
     * @return [type]           [description]
     */
    private function createUserAccount(Request $request){

    	DB::transaction( function () use ($request){

    		$user = User::create([
    			'name' => $request->name,
    			'email' => $request->email
    		]);

    		$this->addSocialAccountToUser($request, $user);

    	});

    }
}