<?php

return [
    'title' => 'Home', // Title
    'titleStyle' => [
        'color' => '#BA9A5A' , //gold
    ],
    'navbarStyle' => [
        'background-color' => '#103050' //dark-blue
    ],
    'footerStyle' => [
        'background-color' => '#103050',
        'color'            => '#BA9A5A'
    ],
    'sidebarStyle' => [
        'background-color' => '#103050',
        'color'            => '#BA9A5A'
    ],
    'toggleBarStyle' => [
        'color' => '#BA9A5A' , //gold
    ],
    'icon' => [
        'name' => 'fa-globe', // font-awesome or material icon
        'color' => '#BA9A5A',
        'show'  => true
    ],
    'logo' => [
        'url' => 'http://nelib.org/wp-content/uploads/sites/6/2016/06/CL_Logo_RGB_PNG-768x336.png',
        'width' => '150px',
        'height' => '50px',
        'show'  => true
    ],
    'trademark' => env('HOME_TRADEMARK','Vuetified'),
    'domain' => env('APP_DOMAIN', 'vuetified.app'),
    'url' => env('APP_URL', 'http://localhost'),
    'email' => env('MAIL_USERNAME', 'admin@vuetified.app'),
    'social_links' => [
        'facebook' => env('HOME_FB','https://www.facebook.com/vuetified'),
        'instagram' => env('HOME_INSTA','https://www.instagram.com/vuetified'),
        'twitter' => env('HOME_TWITTER','https://twitter.com/@vuetified'),
        'youtube' => env('HOME_YOUTUBE','https://www.youtube.com/vuetified'),
        'linkedIn' => env('HOME_LINKEDIN','https://www.linkedin.com/in/vuetified'),
    ]
];