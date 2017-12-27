<?php

namespace Vuetified\Configuration;

use Closure;
use Illuminate\Support\Str;

trait CallsInteractions
{
    /**
     * The alternative implementation of interaction methods.
     *
     * @var array
     */
    public static $interactions = [];

    /**
     * Run an interaction method.
     *
     * @param  string  $interaction
     * @param  array  $parameters
     * @return mixed
     */
    public static function call($interaction, array $parameters = [])
    {
        return static::interact($interaction, $parameters);
    }

    /**
     * Run an interaction method.
     *
     * @param  string  $interaction
     * @param  array  $parameters
     * @return mixed
     */
    public static function interact($interaction, array $parameters = [])
    {
        if (! Str::contains($interaction, '@')) {
            $interaction = $interaction.'@handle';
        }

        list($class, $method) = explode('@', $interaction);

        if (isset(static::$interactions[$interaction])) {
            return static::callSwappedInteraction($interaction, $parameters, $class);
        }

        $base = class_basename($class);

        if (isset(static::$interactions[$base.'@'.$method])) {
            return static::callSwappedInteraction($base.'@'.$method, $parameters, $class);
        }

        return call_user_func_array([app($class), $method], $parameters);
    }

    /**
     * Run a swapped interaction method.
     *
     * @param  string  $interaction
     * @param  array  $parameters
     * @return mixed
     */
    protected static function callSwappedInteraction($interaction, array $parameters, $class)
    {
        if (is_string(static::$interactions[$interaction])) {
            return static::interact(static::$interactions[$interaction], $parameters);
        }

        $instance = app($class);

        $method = static::$interactions[$interaction]->bindTo($instance, $instance);

        return call_user_func_array($method, $parameters);
    }

    /**
     * Swap the implementation of an interaction method.
     *
     * @param  string  $interaction
     * @param  mixed  $callback
     * @return void
     */
    public static function swap($interaction, $callback)
    {
        static::$interactions[$interaction] = $callback;
    }
}
