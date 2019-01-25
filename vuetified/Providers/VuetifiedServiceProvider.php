<?php

namespace Vuetified\Providers;

use Vuetified\Vuetified;
use Illuminate\Support\ServiceProvider;
use Vuetified\Console\Commands\VersionCommand;
use Vuetified\Console\Commands\GenerateEchoKeys;
use Vuetified\Console\Commands\GenerateEchoAppID;
use Vuetified\Console\Commands\GenerateEchoAppKey;

class VuetifiedServiceProvider extends ServiceProvider
{
    public function boot()
    {
        //
    }

    public function register()
    {
        if (!class_exists('Vuetified')) {
            class_alias('Vuetified\Vuetified', 'Vuetified');
        }

        if ($this->app->runningInConsole()) {
            $this->commands([
                VersionCommand::class,
                GenerateEchoAppID::class,
                GenerateEchoAppKey::class,
                GenerateEchoKeys::class
                // Add Console Command Here
            ]);
        }

        $this->registerServices();
    }

    /**
     * Register the Vuetified services.
     *
     * @return void
     */
    protected function registerServices()
    {
        $services = [
            //   Contracts                       =   Implementation Of Contracts
            'Contracts\InitialFrontendState' => 'InitialFrontendState'
        ];

        foreach ($services as $key => $value) {
            $this->app->singleton('Vuetified\\'.$key, 'Vuetified\\'.$value);
        }
    }
}
