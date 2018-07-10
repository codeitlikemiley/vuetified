<?php

use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;

class RolesAndPermissionsSeeder extends Seeder
{
    public function run()
    {
        // Reset cached roles and permissions
        app()['cache']->forget('spatie.permission.cache');

        Permission::create(['name' => 'edit_profile']);
        Permission::create(['name' => 'activate_link']);
        Permission::create(['name' => 'deactivate_link']);
        Permission::create(['name' => 'edit_link']);
        Permission::create(['name' => 'upload_avatar']);

        Permission::create(['name' => 'add_media']);
        Permission::create(['name' => 'edit_media']);
        Permission::create(['name' => 'delete_media']);

        Permission::create(['name' => 'manage_site']);
        Permission::create(['name' => 'manage_media']);
        Permission::create(['name' => 'manage_users']);
        Permission::create(['name' => 'manage_roles']);
        Permission::create(['name' => 'manage_permissions']);

        Permission::create(['name' => 'access_all']);

        $role = Role::create(['name' => 'admin']);
        $role->givePermissionTo('edit_profile');
        $role->givePermissionTo('edit_link');
        $role->givePermissionTo('activate_link');
        $role->givePermissionTo('upload_avatar');
        $role->givePermissionTo('deactivate_link');
        $role->givePermissionTo('add_media');
        $role->givePermissionTo('edit_media');
        $role->givePermissionTo('delete_media');
        $role->givePermissionTo('manage_site');
        $role->givePermissionTo('manage_media');
        $role->givePermissionTo('manage_users');
        $role->givePermissionTo('manage_roles');
        $role->givePermissionTo('manage_permissions');
        $role->givePermissionTo('access_all');

        $role = Role::create(['name' => 'freemium']);
        $role->givePermissionTo('edit_profile');
        $role->givePermissionTo('edit_link');
        $role->givePermissionTo('activate_link');
        $role->givePermissionTo('upload_avatar');

        $role = Role::create(['name' => 'premium']);
        $role->givePermissionTo('edit_profile');
        $role->givePermissionTo('edit_link');
        $role->givePermissionTo('activate_link');
        $role->givePermissionTo('deactivate_link');
        $role->givePermissionTo('upload_avatar');
        $role->givePermissionTo('add_media');
        $role->givePermissionTo('edit_media');
        $role->givePermissionTo('delete_media');

    }
}
