<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use Inertia\Inertia;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        Inertia::share([
            'locale' => function () {
                return app()->getLocale();
            },
            'language' => function () {
                return $this->translations(
                    app_path('../lang/' . app()->getLocale() . '.json')
                );
            }
        ]);
    }

    private function translations($json)
    {
        if(!file_exists($json)) {
            return [];
        }
        return json_decode(file_get_contents($json), true);
    }

}
