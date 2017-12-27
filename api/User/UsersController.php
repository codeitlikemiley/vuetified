<?php

namespace Api\User;

use Api\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use App\Exceptions\EmailNotFound;
use App\Exceptions\UserTokenNotFound;
use App\Exceptions\UsernameNotFound;
use App\Http\Resources\User\UserResource;
use App\Http\Resources\User\UserCollection;

class UsersController extends Controller
{

    public function __construct()
    {
        $this->middleware(['role:admin'],['except' => ['me']]);
    }

    public function index(Request $request)
    {
        return UserResource::collection(User::with(['profile','referralLink', 'sponsor.referralLink'])->paginate(10));
    }

    public function me(Request $request)
    {
        $user = $request->user();
        if(!$user){
            throw new UserTokenNotFound;
        }
        return new UserResource($user->load('profile','referralLink', 'sponsor.referralLink'));
    }

    public function findByUsername($username)
    {
        $user = User::findByUsername($username);
        if(!$user){
            throw new UsernameNotFound;
        }
        return new UserResource($user->load('profile','referralLink', 'sponsor.referralLink'));
    }

    public function findByEmail($email)
    {
        $user = User::findByEmail($email);
        if(!$user){
            throw new EmailNotFound;
        }
        return new UserResource($user->load('profile','referralLink', 'sponsor.referralLink'));
    }

    
}
