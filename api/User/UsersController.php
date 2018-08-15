<?php

namespace Api\User;

use Api\Controller;
use App\Models\User;
use App\Models\Profile;
use App\Rules\ValidateZip;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use App\Exceptions\EmailNotFound;
use Illuminate\Support\Facades\DB;
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
        $data = request()->validate([
            'name'                  => 'required',
            'username'              => 'nullable',
            'email'                 => 'nullable|email|unique:users',
            'password'              => 'required|min:6|confirmed',
            'password_confirmation' => 'required',
            'roles'                 => [
                'sometimes',
                'required',
                'exists:roles,name'
            ],
            'active'                => 'boolean',
            'contact_no'            => 'nullable',
            'address_1'             => 'nullable',
            'address_2'             => 'nullable',
            'city'                  => 'nullable',
            'state'                 => 'nullable',
            'zip'                   => [
                'nullable',
                new ValidateZip
            ],
            'country'               => 'nullable'
        ]);
        DB::beginTransaction();
        $user = User::create($data);
        /* create an empty profile */
        $profile = Profile::create($data);
        $user->profile()->save($profile);
        $role = request('roles');
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

        return new UserResource($user->load('profile'));
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
    public function massDelete(Request $request)
    {
        $ids = $this->selectExceptSuperAdmin();
        DB::beginTransaction();
        try {
            User::whereIn('id', $ids)->delete();
        } catch (\Exception $e) {
            return response()->json(['message' => 'Failed To Delete Selected Users!']);
        }
        DB::commit();
        return response()->json(['message' => 'Successfully Deleted Selected Users.']);
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

        $user->active = !$user->active;
        $saved        = $user->save();

        if (!$saved) {
            throw new UpdatingRecordFailed;
        }

        return response()->json(['status' => $user->active], 200);
    }

    /**
     * @param User    $user
     * @param Request $request
     */
    public function update(User $user, Request $request)
    {
        if (!$user) {
            return response()->json(['message' => 'Cant Find User With ID of '.$request->id]);
        }

        $data = $request->validate([
            'username'              => [
                'nullable',
                Rule::unique('users')->ignore($user->id)
            ],
            'active'                => 'required|boolean',
            'password'              => 'nullable|min:6|confirmed',
            'password_confirmation' => 'required_with:password',
            'email'                 => [
                'nullable',
                Rule::unique('users')->ignore($user->id)
            ],
            'contact_no'            => 'required',
            'address_1'             => 'nullable',
            'address_2'             => 'nullable',
            'city'                  => 'nullable',
            'state'                 => 'nullable',
            'zip'                   => [
                new ValidateZip
            ],
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
            return $id <= 1000;
        });

        if (count($except) > 0) {
            foreach ($except as $key => $value) {
                unset($ids[$key]);
            }
        }

        return $ids;
    }
}
