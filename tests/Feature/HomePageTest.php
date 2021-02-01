<?php

namespace Tests\Feature;

use Tests\TestCase;
use ClaudioDekker\Inertia\Assert;

class HomePageTest extends TestCase
{
    /**
     * A basic feature test example.
     *
     * @return void
     */
    public function test_home_is_using_inertia_handle_request_shared_data()
    {
        $response = $this->get(route('home'));
        $response->assertHasProp('auth');
        $response->assertHasProp('app');
        $response->assertHasProp('flash');
        $response->assertHasProp('errors');
    }

    public function test_using_inertia_testing_package()
    {

        $response = $this->get(route('home'));
        $response->assertInertia(fn(Assert $page) =>
            $page->hasAll([
                'app',
                'auth',
                'flash',
                'errors',
            ]));
    }
}
