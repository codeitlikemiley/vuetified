<?php

namespace Api\Auth;

use Api\Controller;
use App\Models\Role;
use App\Models\User;
use App\Models\Permission;
use Illuminate\Http\Request;
use App\Exceptions\UserNotFound;
use App\Exceptions\RevokeAdminUpdate;
use App\Http\Resources\User\UserResource;

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
        $user = User::find($id);

        if ($user->isSuperAdmin()) {
            throw new RevokeAdminUpdate;
        }

        if ($user) {
            $user->syncPermissions($request->permissions);
            $user->load('profile', 'referralLink', 'roles', 'permissions');
            return new UserResource($user);
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
        $user = User::find($id);

        if ($user->isSuperAdmin()) {
            throw new RevokeAdminUpdate;
        }

        if ($user) {
            $user->syncRoles($request->roles);
            $user->load('profile', 'referralLink', 'roles', 'permissions');
            return new UserResource($user);
        } else {
            throw new UserNotFound;
        }
    }
}
