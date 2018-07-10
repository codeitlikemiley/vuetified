<?php

namespace Api\User;

use Api\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use App\Exceptions\EmailNotFound;
use App\Exceptions\UsernameNotFound;
use App\Exceptions\UserTokenNotFound;
use App\Http\Resources\User\UserResource;

class UsersController extends Controller
{
    public function __construct()
    {
        $this->middleware(['role:admin'], ['except' => ['me']]);
    }

    /**
     * @param Request $request
     */
    public function delete(Request $request)
    {
        $user    = User::find($request->user_id);
        $deleted = false;

        if (!$user->isSuperAdmin()) {
            $deleted = $user->delete();

            if (!$deleted) {
                throw new UpdatingRecordFailed;
            }
        }

        return response()->json(['status' => $deleted], 200);
    }

    /**
     * @param $email
     */
    public function findByEmail($email)
    {
        $user = User::findByEmail($email);

        if (!$user) {
            throw new EmailNotFound;
        }

        return new UserResource($user->load('profile', 'referralLink', 'sponsor.referralLink'));
    }

    /**
     * @param $username
     */
    public function findByUsername($username)
    {
        $user = User::findByUsername($username);

        if (!$user) {
            throw new UsernameNotFound;
        }

        return new UserResource($user->load('profile', 'referralLink', 'sponsor.referralLink'));
    }

    /**
     * @param Request $request
     */
    public function index(Request $request)
    {
        return UserResource::collection(User::with(['profile', 'referralLink', 'sponsor.referralLink'])->paginate(10));
    }

    /**
     * @param Request $request
     */
    public function me(Request $request)
    {
        $user = $request->user();

        if (!$user) {
            throw new UserTokenNotFound;
        }

        return new UserResource($user->load('profile', 'referralLink', 'sponsor.referralLink'));
    }
}
