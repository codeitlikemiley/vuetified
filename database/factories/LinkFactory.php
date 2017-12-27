<?php

use Faker\Generator as Faker;
use App\Models\Link;


$factory->define(Link::class, function (Faker $faker) {
    return [
        'link' => $faker->unique()->userName,
        'active' => true,
        'date_activated' => \Carbon\Carbon::now(),
    ];
});
