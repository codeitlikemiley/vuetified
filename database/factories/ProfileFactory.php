<?php

use App\Models\Profile;
use Faker\Generator as Faker;

$factory->define(Profile::class, function (Faker $faker) {
    return [
        'first_name'     => $faker->firstNameMale,
        'last_name'      => $faker->lastName,
        'contact_no'     => $faker->isbn10,
        'address_1'      => $faker->streetAddress,
        'address_2'      => $faker->secondaryAddress,
        'city'           => $faker->city,
        'country'        => $faker->country,
        'zip_code'       => $faker->postcode,
        'state_province' => $faker->state
    ];
});
