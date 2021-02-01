<?php

namespace App\Http\Middleware;

use Inertia\Middleware;
use Illuminate\Http\Request;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that's loaded on the first page visit.
     *
     * @see https://inertiajs.com/server-side-setup#root-template
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Defines the props that are shared by default.
     *
     * @see https://inertiajs.com/shared-data
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function share(Request $request)
    {
        return array_merge(parent::share($request), [
            'app'    => function () use ($request) {
                return ['name' => config('app.name')];
            },
            'auth'   => function () use ($request) {
                $user          = $request->user();
                $impersonating = $request->session()->get('impersonated_by');
                // $routeName = $request->route()->getName();

                return [
                    'isLoggedIn'      => $user ? true : false,
                    'isImpersonating' => $impersonating,
                    'user'            => $user ? [
                        'id'    => $user->id,
                        'email' => $user->email,
                        'name'  => $user->name,
                    ] : null,
                ];
            },
            'flash'  => function () use ($request) {
                return [
                    'success' => $request->session()->get('success'),
                    'warning' => $request->session()->get('warning'),
                    'info'    => $request->session()->get('info'),
                    'error'   => $request->session()->get('error'),
                ];
            },
            'errors' => function () use ($request) {
                return $request->session()->get('errors') ? $request->session()->get('errors')->getBag('default')->getMessages() : (object) [];
            },
        ]);
    }

    /**
     * Determines the current asset version.
     *
     * @see https://inertiajs.com/asset-versioning
     * @param  \Illuminate\Http\Request  $request
     * @return string|null
     */
    public function version(Request $request)
    {
        return parent::version($request);
    }
}
