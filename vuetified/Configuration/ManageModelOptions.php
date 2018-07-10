<?php

namespace Vuetified\Configuration;

trait ManageModelOptions
{
    /**
     * The user model class name.
     *
     * @var string
     */
    public static $userModel = 'App\Models\User';

    /**
     * Set the user model class name.
     *
     * @param  string $userModel
     * @return void
     */
    public static function useUserModel($userModel)
    {
        static::$userModel = $userModel;
    }

    /**
     * Get a new user model instance.
     *
     * @return \Illuminate\Contracts\Auth\Authenticatable
     */
    public static function user()
    {
        return new static::$userModel;
    }

    /**
     * Get the user model class name.
     *
     * @return string
     */
    public static function userModel()
    {
        return static::$userModel;
    }
}
