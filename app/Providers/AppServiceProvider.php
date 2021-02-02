<?php

namespace App\Providers;

use Closure;
use Illuminate\Support\ServiceProvider;
use Illuminate\Pagination\LengthAwarePaginator;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        //
    }

    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        $this->registerLengthAwarePaginator();
    }

    /**
     * @return mixed
     */
    protected function registerLengthAwarePaginator()
    {
        $this->app->bind(LengthAwarePaginator::class, function ($app, $values) {
            return new class(...array_values($values)) extends LengthAwarePaginator
            {
                /**
                 * @param  array<int,mixed> $attributes
                 * @return mixed
                 */
                public function only(...$attributes)
                {
                    return $this->transform(function ($item) use ($attributes) {
                        return $item->only($attributes);
                    });
                }

                /**
                 * @param  Closure $callback
                 * @return mixed
                 */
                public function transform($callback)
                {
                    $this->items->transform($callback);

                    return $this;
                }

                public function toArray()
                {
                    $total_pages     = ceil($this->total() / $this->perPage());
                    $show_pagination = false;

                    if ($total_pages > 1) {
                        $show_pagination = true;
                    }

                    return [
                        'data' => $this->items->toArray(),
                        'meta' => [
                            'page'        => $this->currentPage(),
                            'total_pages' => $total_pages,
                            'per_page'    => $this->perPage(),
                            'visible'     => $show_pagination,
                        ],
                    ];
                }
            };
        });
    }
}
