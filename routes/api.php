<?php
Route::group(['middleware' => ['auth:api']], function () {
    //? Users Page
    Route::post('/@me', 'User\UsersController@me')->name('api.@me');
    Route::post('/users', 'User\UsersController@index')->name('api.user.index');
    Route::post('/users/username/{username}', 'User\UsersController@findByUsername')->name('api.user.findByUsername');
    Route::post('/users/email/{email}', 'User\UsersController@findByEmail')->name('api.user.findByEmail');
    Route::get('/permissions', 'Auth\PermissionRolesController@getAllPermissions')->name('api.permissions.index');
    Route::get('/roles', 'Auth\PermissionRolesController@getAllRoles')->name('api.roles.index');
    Route::post('/users/{id}/syncRoles', 'Auth\PermissionRolesController@syncRoles')->name('api.user.roles.sync');
    Route::post('/users/{id}/syncPermissions', 'Auth\PermissionRolesController@syncPermissions')->name('api.user.permissions.sync');
    Route::get('/users/{id}/activateLink', 'Link\ActivationController@activateLink')->name('api.user.link.activate');
    Route::get('/users/{id}/deactivateLink', 'Link\ActivationController@deactivateLink')->name('api.user.link.deactivate');
    //? Settings Page
    Route::post('/users/settings/updateAccount', 'Account\AccountController@updateAccount')->name('api.user.updateAccount');
    Route::post('/users/settings/updateProfile', 'Account\AccountController@updateProfile')->name('api.user.updateProfile');
    Route::post('/users/settings/updateReferralLink', 'Account\AccountController@updateReferralLink')->name('api.user.updateReferralLink');
    //? Router Check For Auth User
    Route::post('/auth/check', 'Auth\LoginController@check')->name('api.auth.check');
    //? Helpers We Can Use For Permission and Roles
    Route::get('/getPermissionsViaRoles', 'Auth\ACLController@getPermissionsViaRoles')->name('api.auth.getPermissionsViaRoles');
    Route::get('/getDirectPermissions', 'Auth\ACLController@getDirectPermissions')->name('api.auth.getDirectPermissions');
    Route::get('/getAllPermissions', 'Auth\ACLController@getAllPermissions')->name('api.auth.getAllPermissions');
    Route::get('/hasPermissionTo', 'Auth\ACLController@hasPermissionTo')->name('api.auth.hasPermissionTo');
    Route::get('/hasAnyPermission', 'Auth\ACLController@hasAnyPermission')->name('api.auth.hasAnyPermission');
    Route::get('/getRoles', 'Auth\ACLController@getRoles')->name('api.auth.getRoles');
    Route::get('/hasRole', 'Auth\ACLController@hasRole')->name('api.auth.hasRole');
    Route::get('/hasAnyRole', 'Auth\ACLController@hasAnyRole')->name('api.auth.hasAnyRole');
    Route::get('/hasAllRoles', 'Auth\ACLController@hasAllRoles')->name('api.auth.hasAllRoles');
    //? Router For Logout
    Route::post('/auth/logout', 'Auth\LoginController@logout')->name('api.auth.logout');
});
/* Can Be Accessed Without Access Token */
//? Router For Authentication
Route::post('/auth/register', 'Auth\RegisterController@register')->name('api.auth.register');
Route::post('/auth/login', 'Auth\LoginController@login')->name('api.auth.login');
Route::post('/auth/refresh', 'Auth\LoginController@refresh')->name('api.auth.refresh');
Route::post('/auth/social', 'Auth\SocialAuthController@socialAuth')->name('api.auth.social');
Route::post('/sendResetEmail', 'Auth\ForgotPasswordController@sendResetEmail')->name('api.auth.forgotpassword');
Route::post('/resetPassword', 'Auth\ResetPasswordController@resetPassword')->name('api.auth.reset-password');
//? Router For Sending Customer Email
Route::post('/@contact', 'Homepage\ContactUsController@contact')->name('api.@contact');


