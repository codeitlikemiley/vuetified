# Laravel Vuetify Realtime Starter App
<p align="center">
<img src="https://user-images.githubusercontent.com/28816690/30248403-c4681e22-9659-11e7-9ed9-7e3f58ae061d.png"/>
</p>

## Server and development requirements

**Latest as of now:**

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


```php
git clone https://github.com/codeitlikemiley/vuetified.git Vuetified
cd Vuetified
cp .env.example .env
composer install
php artisan key:generate
php artisan echo:generate
php artisan passport:keys 
php artisan migrate:fresh --seed 
php artisan passport:client --password
yarn install
```

***Added New Feature***
If You Dont Want to Use laravel Echo just modify echo.php

```php
'realtime' => false
```
Vuetified Will Still Works Because it will Only Be Used In Socket.io Present in the Script.

## Configure your .env

### Change these lines to reflect your correct settings

```
APP_NAME=Laravel
APP_URL=http://laravel.app
APP_DOMAIN=laravel.app
ECHO_ON=true
HOME_TRADEMARK=Vuetified
HOME_FB=
HOME_INSTA=
HOME_TWITTER=
HOME_YOUTUBE=
HOME_LINKEDIN=
```

### If you don't have Redis server

You can use SQLite 

```
touch laravel-echo-server.sqlite
```

Also change your Broadcast Driver to log instead of Redis

```
BROADCAST_DRIVER=log
```

### Edit Your DB Config
```
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=homestead
DB_USERNAME=homestead
DB_PASSWORD=secret
```

### If you don't have MySQL and want SQLite
```
DB_CONNECTION=sqlite
```

## Refresh with new Passport Client Password

```
php artisan migrate:fresh --seed
```

## Run Laravel Echo Server
***If You Dont Want to Register Routes For Broadcast Uncomment this in config/app.php***
- this is on by default so you can start broadcasting events
```
// App\Providers\BroadcastServiceProvider::class,
```

```
node websocket
```

## Run Laravel Mix

```
npm run watch
```

### Themes

You may Modify The Look Of Your Vuetified Starter By Going To
config/site.php and config/theme.php
- in the future ill make a model to keep this and implement caching

site.php holds all config for your front page initial state
while theme.php is used to modify primary color, secondary etc.

### Added Ziggy For Fluent Routing In Your Vue App
***For More info Visit https://github.com/tightenco/ziggy***

This basically Allows Us to use route name as defined in our Laravel Routes

for example
```javascript
    {
        path: route('api.user.idex'),
        component: Users
    },
```
- Useful for api route

## Changelogs

***The Following Route Was Remove For the Mean Time***
- will added it back ASAP, but using passport routes i think is enough for now,
- if you need this just copy the old files from the older version
- Im Still on the Process of Moving all to Vuetified Namespace.
```
api/login ,api/logout ,api/refresh ,api/register ,api/social_auth
```

***Remove All Sample Events For Laravel Echo If You Need it I placed in Inside Vuetified Namespace***

## Todo:
- In Addition to Ziggy Fluent Routing, This App Has Dynamic Component For Pages or Widget  which we can Loaded At Any Time. 
(Create A Routes to Fetch All Components Depending on Type: Partials, Layout, Widget, Page)
- Add Voyager, But Already Test this , Had Some Minor Issue , already got the fix still waiting for the owner to add it though. (Will Add Soon)
