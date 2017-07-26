<?php

namespace Vuetified\Providers;

use Vuetified\Vuetified;
use Vuetified\Console\Commands\VersionCommand;
use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Facades\Auth;

class VuetifiedServiceProvider extends ServiceProvider
{

    public function boot()
    {   
        
    }

    public function register()
    {
        if (! class_exists('Vuetified')) {
            class_alias('Vuetified\Vuetified', 'Vuetified');
        }

        if ($this->app->runningInConsole()) {
            $this->commands([
                VersionCommand::class,
                // Add Console Command Here
            ]);
        }

        $this->registerServices();
    }

    /**
     * Register the Royalflush services.
     *
     * @return void
     */
    protected function registerServices()
    {
        
        $services = [
        //   Contracts                       =   Implementation Of Contracts
            'Contracts\InitialFrontendState' => 'InitialFrontendState',
        ];

        foreach ($services as $key => $value) {
            $this->app->singleton('Vuetified\\'.$key, 'Vuetified\\'.$value);
        }
    }
    
}
