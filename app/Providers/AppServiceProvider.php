<?php

namespace App\Providers;

use App\Models\Link;
use App\Models\User;
use App\Observers\LinkObserver;
use App\Observers\UserObserver;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Queue;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        //* Auto Generate ID
        User::observe(UserObserver::class);
        Link::observe(LinkObserver::class);

        //* Ensure We Rollback Failed Jobs
        Queue::looping(function () {
            while (DB::transactionLevel() > 0) {
                DB::rollBack();
            }
        });
    }

    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }
}
