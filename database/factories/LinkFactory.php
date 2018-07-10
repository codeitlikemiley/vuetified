<?php

use App\Models\Link;
use Faker\Generator as Faker;

$factory->define(Link::class, function (Faker $faker) {
    return [
        'link'           => $faker->unique()->userName,
        'active'         => true,
        'date_activated' => \Carbon\Carbon::now()
    ];
});
