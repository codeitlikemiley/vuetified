# Laravel Vuetify Realtime Starter App

## Server and DEV Requirement

`latest during this time`
- Node (^8.1.0) && NPM (^5.0.3)
- Redis (^3.2.100)
- PHP (^7.1)
- Laravel (^5.5)
- Composer (^1.4.1)
- VSCODE Insiders && Plugins (ESLINT)
- Laravel (^5.5)
- Laravel Echo Server(^1.2.9)
- Laravel Passport (^3.0.0)
- Laravel Mix (^1.3.0)
- Laravel Valet for Windows (^2.0.8)
- Vue (^2.4.2)
- Vuetify (^0.15)

## Installation

```
git clone repo myproject
composer install
cp .env.example .env
php artisan key:generate
php artisan echo:generate
php artisan passport:keys
php artisan migrate:fresh --seed
php artisan passport:client --password
npm install or yarn install
node websocket
```

Refresh With new Passport Client Password

```
php artisan migrate:fresh --seed
```
