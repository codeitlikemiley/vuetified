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
git clone https://github.com/codeitlikemiley/vuetified
cd vuetified
cp .env.example .env
composer install
php artisan key:generate
php artisan echo:generate
php artisan passport:keys
php artisan migrate:fresh --seed
php artisan passport:client --password
yarn install
```

Configure .env
Add Your Correct Domain and URL
```
APP_NAME=Laravel
APP_URL=http://laravel.app
APP_DOMAIN=laravel.app
```

If You Dont Have Redis Server
You Can Use Sqlite
go to ./database
```
touch laravel-echo-server.sqlite
```
Change Also Your Broadcast Driver to log Instead of Redis
```
BROADCAST_DRIVER=log
```

Edit Your DB Config
```
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=homestead
DB_USERNAME=homestead
DB_PASSWORD=secret
```

If You Dont Have MYSQL and Want Sqlite
```
DB_CONNECTION=sqlite
```

Refresh With new Passport Client Password

```
php artisan migrate:fresh --seed
```

Run Laravel Echo Server
```
node websocket
```

Run Laravel Mix
```
npm run watch
```


Test laravel Echo Add this to your web Routes...
Make Sure it is Above the Wildcard Route Catcher for Vue

```
use App\User;

$user = User::first();
\Auth::loginUsingId($user->id);

Route::get('get-auth', function () {
    broadcast(new \App\Events\GetAuthUser(auth()->user()))->toOthers();
    return response()->json(['message' => 'ok'],200);
});

Route::get('user-created', function () {
    $user = App\User::all()->last();
    broadcast(new \App\Events\UserCreated($user))->toOthers();
    return response()->json(['message' => 'ok'],200);
});

Route::get('get-announcement', function () {
    $user = App\User::all()->last();
    broadcast(new \App\Events\NewMessage($user,'New Group Message!'))->toOthers();
    return response()->json(['message' => 'ok'],200);
});
```