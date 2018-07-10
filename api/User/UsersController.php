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
    public function create(Request $request)
    {
        request()->validate([
            'username'              => 'required|unique:users',
            'email'                 => 'nullable|email|unique:profiles',
            'password'              => 'required|min:6|confirmed',
            'password_confirmation' => 'required',
            'roles'                 => [
                'sometimes',
                'required',
                'exists:roles,name'
            ],
            'company_name'          => 'nullable',
            'active'                => 'boolean',
            'first_name'            => 'required',
            'last_name'             => 'required',
            'phone'                 => 'nullable',
            'address_1'             => 'nullable',
            'address_2'             => 'nullable',
            'city'                  => 'nullable',
            'state'                 => 'nullable',
            'zip'                   => [
                'nullable',
                new ValidateZip
            ]
        ]);
        DB::beginTransaction();
        $user = User::forceCreate([
            'username' => request('username'),
            'password' => request('password'),
            'active'   => request('active')
        ]);

        /* create an empty profile */
        $profile               = new Profile();
        $profile->email        = request('email');
        $profile->first_name   = request('first_name');
        $profile->last_name    = request('last_name');
        $profile->phone        = request('phone');
        $profile->address_1    = request('address_1');
        $profile->address_2    = request('address_2');
        $profile->city         = request('city');
        $profile->state        = request('state');
        $profile->zip          = request('zip');
        $profile->company_name = request('company_name');
        $profile->notes        = request('notes');

        $user->profile()->save($profile);
        $roles = Role::all()->pluck('name');
        $role  = request('roles');
        $user->assignRole($role);

        /* Check If We Dont Have Any Errors , Rollback Account Creation if Any! */
        try {
            if (!$user && !$profile) {
                throw new AccountCreationFailed;
            }
        } catch (\Exception $e) {
            DB::rollback();
            return response()->json(['message' => $e->getMessage()], 400); // Failed Creation
        }

        DB::commit();
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
     * @param User $user
     */
    public function edit(User $user)
    {
        if (!$user) {
            return response()->json(['message' => 'Cant Find User With ID of '.$request->id]);
        }

        return new AccountResource($user->load('profile'));
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
    public function massActivate(Request $request)
    {
        $ids     = $this->selectExceptSuperAdmin();
        $updated = User::whereIn('id', $ids)->update(['active' => true]);

        if (count($ids) !== $updated) {
            throw new UpdatingRecordFailed;
        }

        return response()->json(['message' => 'Selected Users Activated!', 'updated' => $ids]);
    }

    /**
     * @param Request $request
     */
    public function massDeactivate(Request $request)
    {
        $ids     = $this->selectExceptSuperAdmin();
        $updated = User::whereIn('id', $ids)->update(['active' => false]);

        if (count($ids) !== $updated) {
            throw new UpdatingRecordFailed;
        }

        return response()->json(['message' => 'Selected Users Deactivated!', 'updated' => $ids]);
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

    /**
     * @param Request $request
     */
    public function toggleStatus(Request $request)
    {
        $user = User::find($request->user_id);

        if ($user->isSuperAdmin()) {
            return response()->json(['message' => 'You Cannot Modify Super Admin!'], 400);
        }

        $user->active = $request->toggle;
        $saved        = $user->save();

        if (!$saved) {
            throw new UpdatingRecordFailed;
        }

        return response()->json(['status' => $user->active], 200);
    }

    /**
     * @param User $user
     * @param Request $request
     */
    public function update(User $user, Request $request)
    {
        if (!$user) {
            return response()->json(['message' => 'Cant Find User With ID of '.$request->id]);
        }

        $data = $request->validate([
            'username'              => [
                'required',
                Rule::unique('users')->ignore($user->id)
            ],
            'active'                => 'required|boolean',
            'password'              => 'nullable|min:6|confirmed',
            'password_confirmation' => 'required_with:password',
            'company_name'          => 'nullable',
            'email'                 => [
                'nullable',
                Rule::unique('profiles')->ignore($user->id, 'user_id')
            ],
            'first_name'            => 'required',
            'last_name'             => 'required',
            'phone'                 => 'required',
            'address_1'             => 'nullable',
            'address_2'             => 'nullable',
            'city'                  => 'nullable',
            'state'                 => 'nullable',
            'zip'                   => [
                new ValidateZip
            ],
            'notes'                 => 'nullable|max:255',
            'roles'                 => [
                'required',
                'exists:roles,name'
            ]
        ]);

        if ($request->password && $request->password_confirmation) {
            $user->password = $request->password;
        }

        $user->username = $request->username;

        if ($user->isSuperAdmin()) {
            $user->active = true;
        } else {
            $user->active = $request->active;
        }

        $saved = $user->save();

        if (!$saved) {
            throw new UpdatingRecordFailed;
        }

        $profile = $user->profile;
        $updated = $profile->update($data);

        if (!$updated) {
            throw new UpdatingRecordFailed;
        }

        $roles = request('roles');

        if (!$user->isSuperAdmin()) {
            $user->syncRoles($roles);
        }

        return response()->json(['message' => 'User Account Updated!']);
    }

    /**
     * @return mixed
     */
    private function selectExceptSuperAdmin()
    {
        $ids = request()->input('selected');

        $except = array_filter($ids, function ($id) {
            return $id < 1000;
        });

        if (count($except) > 0) {
            foreach ($except as $key => $value) {
                unset($ids[$key]);
            }
        }

        return $ids;
    }
}
