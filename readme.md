# Laravel Vuetify Realtime Starter App
<p align="center">
<img src="https://github.com/codeitlikemiley/vuetified/blob/master/public/img/vuetified.png"/>
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

```
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

## Configure your .env

### Change these lines to reflect your correct settings

```
APP_NAME=Laravel
APP_URL=http://laravel.app
APP_DOMAIN=laravel.app
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
```
node websocket
```

## Run Laravel Mix

```
npm run watch
```

## Test Laravel Echo

To test Laravel Echo, uncomment these test routes in your web.php file.

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

Also, uncomment this in your app.js file.

```
// this.getCreatedUser()
// this.getAuth()
// this.getAnnouncement()
```

## Authentication with Laravel Passport

Open [Postman](https://www.getpostman.com/).

### Create a new user

url: `domain.app/api/register`

method: `post`

header: `Accept => application/json`

body: 

```json
{
"email": "test@test.com",
"password": "secret",
"password_confirmation": "secret",
"name": "test"
}
```

You will then get a response like this:

```json

{
    "token_type": "Bearer",
    "expires_in": 1296000,
    "access_token": "SomeLongString",
    "refresh_token": "SomeLongString"
}
```

### Accesing a protected route

url: `domain.app/api/user`

method: `get`

header: 

```json

{
"Accept": "application/json",
"Authorization": "Bearer SomeLongString"
}

```
You will then get a response like this:

```json

{
    "id": "707290381313499",
    "username": "test",
    "name": "test",
    "email": "test@test.com",
    "created_at": "2017-07-24 04:26:58",
    "updated_at": "2017-07-24 04:26:58"
}

```


### Logging in the user:

url: `domain.app/api/login`

method: `post`

header: `Accept => application/json`

body: 

```json

{
"username": "test@test.com",
"password": "secret",
}

````
or
```json

{
"username": "test",
"password": "secret",
}

```

You will get a response like this:

```json

{
    "token_type": "Bearer",
    "expires_in": 1295999,
    "access_token": "SomeLongString",
    "refresh_token": "SomeLongString"
}

```


### Refreshing Token

url: `domain.app/api/refresh`

method: `post`

header: `Accept => application/json`

body: 

```json

{
    "refresh_token":"SomeLongString"
}

```

You will get a response like this:

```json

{
    "token_type": "Bearer",
    "expires_in": 1296000,
    "access_token": "SomeLongString",
    "refresh_token": "SomeLongString"
}

```

### Logging Using Social Account

You need to make a URL to for callback for each social provider.

You may need to set it up using Socialite, but that callback will ping this URL with this body:

url: `domain.app/api/social_auth`

method: `post`

header: `Accept => application/json`

body: 

```json

{
"name":"power",
"email":"power@power.com",
"provider":"facebook",
"provider_user_id":"123123123123123123"
}

```

You will get a response something like this:

```json

{
    "token_type": "Bearer",
    "expires_in": 1296000,
    "access_token": "SomeLongString",
    "refresh_token": "SomeLongString"
}

```
