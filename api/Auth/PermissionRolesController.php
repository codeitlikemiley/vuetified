<?php

namespace Api\Auth;

use Api\Controller;
use App\Models\Role;
use App\Models\User;
use App\Models\Permission;
use Illuminate\Http\Request;
use App\Exceptions\UserNotFound;
use App\Exceptions\RevokeAdminUpdate;
use App\Http\Resources\User\UserResouce;

class PermissionRolesController extends Controller
{
    public function __construct()
    {
        $this->middleware(['role:admin'], ['except' => ['getAllPermissions', 'getAllRoles']]);
    }

    // get a authenticated user
    public function getAllPermissions()
    {
        return Permission::all()->pluck('name')->toArray();
    }

    // All Permissions Inherited From Roles Assigned to a User
    public function getAllRoles()
    {
        return Role::all()->pluck('name')->toArray();
    }

    /**
     * @param $id
     * @param Request $request
     */
    public function syncPermissions($id, Request $request)
    {
        if ($request->user()->id === $id) {
            throw new RevokeAdminUpdate;
        }

        $user = User::find($id);

        if ($user) {
            $user->syncPermissions($request->permissions);
            return (new UserResouce($user->load('profile', 'referralLink', 'roles', 'permissions')))->additional(['message' => 'Permissions Updated!']);
        } else {
            throw new UserNotFound;
        }
    }

    /**
     * @param $id
     * @param Request $request
     */
    public function syncRoles($id, Request $request)
    {
        if ($request->user()->id === $id) {
            throw new RevokeAdminUpdate;
        }

        $user = User::find($id);

        if ($user) {
            $user->syncRoles($request->roles);
            return (new UserResouce($user->load('profile', 'referralLink', 'roles', 'permissions')))->additional(['message' => 'Roles Updated!']);
        } else {
            throw new UserNotFound;
        }
    }
}
