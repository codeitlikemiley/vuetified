<?php

namespace Api\Auth;

use Api\Controller;
use App\Models\User;
use Illuminate\Http\Request;

class ACLController extends Controller
{
    /**
     * @var mixed
     */
    protected $request;

    /**
     * @param Request $request
     */
    public function __construct(Request $request)
    {
        $this->request = $request;
    }

    // All permissions which apply on the user (inherited from roles and direct)
    /**
     * @return mixed
     */
    public function getAllPermissions()
    {
        return $this->request->user()->getAllPermissions();
    }

    // All Permissions  Assigned Directly to a user
    /**
     * @return mixed
     */
    public function getDirectPermissions()
    {
        return $this->request->user()->permissions;
    }

    // All Permissions Inherited From Roles Assigned to a User
    /**
     * @return mixed
     */
    public function getPermissionsViaRoles()
    {
        return $this->request->user()->getPermissionsViaRoles();
    }

    // get a collection of all defined roles
    /**
     * @return mixed
     */
    public function getRoles()
    {
        return $this->request->user()->getRoleNames();
    }

    // Check if it has All The Roles
    /**
     * @return mixed
     */
    public function hasAllRoles()
    {
        return $this->request->user()->hasAllRoles($this->request->roles);
    }

    // Check Any Permission
    /**
     * @return mixed
     */
    public function hasAnyPermission()
    {
        return $this->request->user()->hasAnyPermission($this->request->permissions);
    }

    // Check for Any Role
    /**
     * @return mixed
     */
    public function hasAnyRole()
    {
        return $this->request->user()->hasAnyRole($this->request->roles);
    }

    // Check Specific Permission
    /**
     * @return mixed
     */
    public function hasPermissionTo()
    {
        return $this->request->user()->hasPermissionTo($this->request->permission);
    }

    // Check For Specific Role
    /**
     * @return mixed
     */
    public function hasRole()
    {
        return $this->request->user()->hasRole($this->request->role);
    }
}
