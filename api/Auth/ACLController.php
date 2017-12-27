<?php

namespace Api\Auth;

use Api\Controller;
use App\Models\User;
use Illuminate\Http\Request;

class ACLController extends Controller
{
    protected $request;

    public function __construct(Request $request)
    {
        $this->request = $request;
    }
    // All Permissions Inherited From Roles Assigned to a User
    public function getPermissionsViaRoles()
    {
        return $this->request->user()->getPermissionsViaRoles();
    }
    // All Permissions  Assigned Directly to a user
    public function getDirectPermissions()
    {
        return $this->request->user()->permissions;
    }
    // All permissions which apply on the user (inherited from roles and direct)
    public function getAllPermissions()
    {
        return $this->request->user()->getAllPermissions();
    }
    // Check Specific Permission
    public function hasPermissionTo()
    {
        return $this->request->user()->hasPermissionTo($this->request->permission);
    }
    // Check Any Permission
    public function hasAnyPermission()
    {
        return $this->request->user()->hasAnyPermission($this->request->permissions);
    }
    
    // get a collection of all defined roles
    public function getRoles()
    {
        return $this->request->user()->getRoleNames();
    }
    // Check For Specific Role
    public function hasRole()
    {
        return  $this->request->user()->hasRole($this->request->role);
    }
    // Check for Any Role
    public function hasAnyRole()
    {
        return  $this->request->user()->hasAnyRole($this->request->roles);
    }
    // Check if it has All The Roles
    public function hasAllRoles()
    {
        return  $this->request->user()->hasAllRoles($this->request->roles);
    }

    

    
}
