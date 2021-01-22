## Vuetified
> Updated for Laravel 8.0 , Working Vuetify Loader Set with Inertia JS

## Stacks
- laravel echo (broadcasting realtime events)
- inertiajs (state)
- vuejs 2.6 + vuetify 2.4 (UI)
- vform & vee-validate v2 (form handling)
- ziggy (routing on UI)

## Requirements
- php 7.4 / 8.0
- Node >= 12.0 +
- fnm (optional for switching node versions)
- laravel valet (optional)

## Installation

1. git clone https://github.com/codeitlikemiley/vuetified YOURPROJECTNAME
2. cd YOURPROJECTNAME
3. composer install
4. yarn
5. cp .env.example .env
6. php artisan websockets:generate
7. php artisan migrate:fresh --seed

## [Using Websocket](https://beyondco.de/docs/laravel-websockets/getting-started/introduction) to [broadcast Events](https://laravel.com/docs/8.x/broadcasting)
- php artisan websocket:serve

## Development
- npm run watch
- php artisan ziggy:generate (needed to run this command everytime you change route)

## Issues
If you have seen any bugs please report it by making an [issue.](https://github.com/codeitlikemiley/vuetified/issues)

## Support
If you need support you can contact our [Facebook Page](https://www.facebook.com/goldcodersdev)

## Pull Request
If you want to add components to be part of vuetified please make a [pull request.](https://github.com/codeitlikemiley/vuetified/pulls)