<?php

namespace App\Providers;

use App\Models\User;
use App\Models\Link;
use App\Exceptions\LinkNotFound;
use App\Exceptions\UserNameNotFound;
use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Support\Providers\RouteServiceProvider as ServiceProvider;

class RouteServiceProvider extends ServiceProvider
{
    /**
     * This namespace is applied to your controller routes.
     *
     * In addition, it is set as the URL generator's root namespace.
     *
     * @var string
     */
    protected $namespace = 'App\Http\Controllers';

    protected $api_namespace = 'Api';

    /**
     * Define your route model bindings, pattern filters, etc.
     *
     * @return void
     */
    public function boot()
    {
        Route::pattern('id', '[0-9]+');
        Route::pattern('hash', '[a-z0-9]+');
        Route::pattern('hex', '[a-f0-9]+');
        Route::pattern('uuid', '[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}');
        Route::pattern('base', '[a-zA-Z0-9]+');
        Route::pattern('slug', '[a-z0-9-]+');
        Route::pattern('username', '[a-z0-9_-]{3,16}');
        Route::bind('username', function ($value) {
            $user = User::where('username', $value)->first();
            if($user){
                return $user;
            }
            throw new UserNameNotFound;
        });
        Route::pattern('referrallink', '[a-z0-9_-]{3,16}');
        Route::bind('referrallink', function ($value) {
            $link = Link::findByLink($value);
            if(optional($link)->active){
                return $link;
            }else {
             throw new LinkNotFound;
            }
        });
        Route::pattern('name', '[a-z]+');
        Route::model('user', User::class);
        Route::pattern('user', '[0-9]+');

        parent::boot();
    }

    /**
     * Define the routes for the application.
     *
     * @return void
     */
    public function map()
    {
        $this->mapApiRoutes();

        $this->mapWebRoutes();

        //
    }

    /**
     * Define the "web" routes for the application.
     *
     * These routes all receive session state, CSRF protection, etc.
     *
     * @return void
     */
    protected function mapWebRoutes()
    {
        Route::middleware('web')
             ->namespace($this->namespace)
             ->group(base_path('routes/web.php'));
    }

    /**
     * Define the "api" routes for the application.
     *
     * These routes are typically stateless.
     *
     * @return void
     */
    protected function mapApiRoutes()
    {
        Route::prefix('api')
             ->middleware('api')
             ->namespace($this->api_namespace)
             ->group(base_path('routes/api.php'));
    }
}
