# Laravel Vuetify Realtime Starter App
<p align="center">
<img src="https://github.com/codeitlikemiley/vuetified/blob/master/public/img/vuetified.png"/>
</p>

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

## Configure .env

### Add Your Correct Domain and URL
```
APP_NAME=Laravel
APP_URL=http://laravel.app
APP_DOMAIN=laravel.app
```

### If You Dont Have Redis Server
You Can Use Sqlite
go to ./database
```
touch laravel-echo-server.sqlite
```
Change Also Your Broadcast Driver to log Instead of Redis
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

### If You Dont Have MYSQL and Want Sqlite
```
DB_CONNECTION=sqlite
```

## Refresh With new Passport Client Password

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

## Test laravel Echo
Test laravel Echo Uncomment This Test ROutes in web.php

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

Also Uncomment this in your app.js
```
// this.getCreatedUser()
// this.getAuth()
// this.getAnnouncement()
```

## Authentication With Laravel Passport


Open Postman

### Create a New User

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
````

You will then get A response like this
```json

{
    "token_type": "Bearer",
    "expires_in": 1296000,
    "access_token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImQ2YWRhNjhmYjA4YjMxMGQ0ZmU4NjQ0NzhmMGZmYzRlMmFiMDQ0NDU0ZjMwYzFhYTU0YzQxMmMyYTNjOWYxYzMwNDJlNDQ0ZWJkZjc1ZGRhIn0.eyJhdWQiOiIxIiwianRpIjoiZDZhZGE2OGZiMDhiMzEwZDRmZTg2NDQ3OGYwZmZjNGUyYWIwNDQ0NTRmMzBjMWFhNTRjNDEyYzJhM2M5ZjFjMzA0MmU0NDRlYmRmNzVkZGEiLCJpYXQiOjE1MDA4NzA0MTgsIm5iZiI6MTUwMDg3MDQxOCwiZXhwIjoxNTAyMTY2NDE4LCJzdWIiOiI3MDcyOTAzODEzMTM0OTkiLCJzY29wZXMiOltdfQ.m-Yj7bgagq9AtbqedRcIfwR7H5ZxeMHp35aDlk0hVTbzN9_zKYabg4jFwwIENhmLOLz8U7pONwHjBuNBuZsdrhDVqTnCp1SO7SpOfjJfY1LD9_JWc7RNiUiK_QQ0gmidKn5xeXZLYoSV0zr0RyUh1TeylXMibinMNFLzhXhgVg4lzYAlGbFPPv2R1CV4yidLq06AaMbu9R5pbwajGC_t5gNY-70gUD5cPXquivuJXgxQ0wU1gp7EdYk8sGZpaLaLzW-_Gqs4c5oDvQVyokIMA2t0n3oNxesNS55lJI-4nS6RbEqbT-DKEWBgMUtNYHtlWGalrHWJ4D-dp5x70QYFhAZt_ZaacaucxGVTHOLH-Ic83mjjBNB0Ovt5APd-m87OkzegIfLYD7M2d3-LRfbJ-9CBssWgCXNX6Wn2M3BYm-OALGtWckeGAGwFpVGhE5xzqaNg3d9FnpYo6e4m2TdB9Hg5Xwc74gnMx2DAbf0-q-eIKncVq2OY_RiyZQGa2fgSCGHbZnDLOcF4aonuun_QDCNo5TB4VoRvnZr6JdbbzNXdPjLqBik8VmKW1C3xhMgLg5wBS5YH-qkT1IgJPfSRq4QDhYXFWlRA9FJkoIMdSGTw2yjsqAP-mO7JlgiRjqozkzQPgTRjoT0F4Rcf2N4IpXd11evPwRw9K7fOQULVTl0",
    "refresh_token": "def5020071435381d33974cb1a95c9a056d66c17dcb27ecd5f59d8b4037d6dbc7812aaa9ce38b761480447c10af70e75a89f152f122f21467de16860216811844325a2335b1728e1c23eeb86bebeee931d757ac9aa62e0e7c64b49dab9c69989e9c45266fe436fe727e3c17bda29b9047bd0a2ed02d36cc4a9b9bfa5e34bff4e7fe1dfbf1bd8c01bb8fd03ab07b5cee0f014db1339515850ba41ae23fc32bbccd636871a3223e61a2eb7a69ab8180d17450f234d7997e75e445e03b3f4873f436477ecee9a5b3063c5c5d8db6eb001adc54e7a739dec0a74ea8a6845744ef46b81a9c24a3f264405824d48c4242fd6b30beb1c22660813d7ed02ceb54404f31469b834e68e1220000771d92f7160b3108f028b517ccace15c3f15a54a0298cf599499132b81e16ae6ff5090aec5ab458dc731711ee33edeeca346c26076e70af48c0148430ee7ab7cdb0389ccdd852d58ac5ecc910d9a606d78c34d96a75181a3ce80205bd457c25fd11bad050fd8d"
}
```

### Accesing Protected Route


url: `domain.app/api/user`

method: `get`

header: 

```json

{
"Accept": "application/json",
"Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImQ2YWRhNjhmYjA4YjMxMGQ0ZmU4NjQ0NzhmMGZmYzRlMmFiMDQ0NDU0ZjMwYzFhYTU0YzQxMmMyYTNjOWYxYzMwNDJlNDQ0ZWJkZjc1ZGRhIn0.eyJhdWQiOiIxIiwianRpIjoiZDZhZGE2OGZiMDhiMzEwZDRmZTg2NDQ3OGYwZmZjNGUyYWIwNDQ0NTRmMzBjMWFhNTRjNDEyYzJhM2M5ZjFjMzA0MmU0NDRlYmRmNzVkZGEiLCJpYXQiOjE1MDA4NzA0MTgsIm5iZiI6MTUwMDg3MDQxOCwiZXhwIjoxNTAyMTY2NDE4LCJzdWIiOiI3MDcyOTAzODEzMTM0OTkiLCJzY29wZXMiOltdfQ.m-Yj7bgagq9AtbqedRcIfwR7H5ZxeMHp35aDlk0hVTbzN9_zKYabg4jFwwIENhmLOLz8U7pONwHjBuNBuZsdrhDVqTnCp1SO7SpOfjJfY1LD9_JWc7RNiUiK_QQ0gmidKn5xeXZLYoSV0zr0RyUh1TeylXMibinMNFLzhXhgVg4lzYAlGbFPPv2R1CV4yidLq06AaMbu9R5pbwajGC_t5gNY-70gUD5cPXquivuJXgxQ0wU1gp7EdYk8sGZpaLaLzW-_Gqs4c5oDvQVyokIMA2t0n3oNxesNS55lJI-4nS6RbEqbT-DKEWBgMUtNYHtlWGalrHWJ4D-dp5x70QYFhAZt_ZaacaucxGVTHOLH-Ic83mjjBNB0Ovt5APd-m87OkzegIfLYD7M2d3-LRfbJ-9CBssWgCXNX6Wn2M3BYm-OALGtWckeGAGwFpVGhE5xzqaNg3d9FnpYo6e4m2TdB9Hg5Xwc74gnMx2DAbf0-q-eIKncVq2OY_RiyZQGa2fgSCGHbZnDLOcF4aonuun_QDCNo5TB4VoRvnZr6JdbbzNXdPjLqBik8VmKW1C3xhMgLg5wBS5YH-qkT1IgJPfSRq4QDhYXFWlRA9FJkoIMdSGTw2yjsqAP-mO7JlgiRjqozkzQPgTRjoT0F4Rcf2N4IpXd11evPwRw9K7fOQULVTl0"
}

```

You will then get A response like this
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


### Login in User

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

You Will get Response Like this

```json

{
    "token_type": "Bearer",
    "expires_in": 1295999,
    "access_token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjQyNzIxMmY3ZWMwNTBlZTgyNWY0OTU3OTA2MGI2NjU4MzdjZTg2OWI4ODU1ZDI4MDNhMjg2ZjI2ZmZhZjdmMTRhYjViNWQ1YmZkM2NiODFiIn0.eyJhdWQiOiIxIiwianRpIjoiNDI3MjEyZjdlYzA1MGVlODI1ZjQ5NTc5MDYwYjY2NTgzN2NlODY5Yjg4NTVkMjgwM2EyODZmMjZmZmFmN2YxNGFiNWI1ZDViZmQzY2I4MWIiLCJpYXQiOjE1MDA4NzA4NjQsIm5iZiI6MTUwMDg3MDg2NCwiZXhwIjoxNTAyMTY2ODYzLCJzdWIiOiI3MDcyOTAzODEzMTM0OTkiLCJzY29wZXMiOltdfQ.Ih6Ok5rwOUpjMchOyHeGfNjlGIBEWVUrAsvRu3lAv6opqMkxBVa5FTksVG_FTbPJQetWj_4erGRzlJgok6AoVWj3drKtHS0Wo4IvxKrjutbcxOLUwfFNoQi0F5SqEug1ycyDosblxH2I5Gd3A0M1lx4RL0nnAvlOj_dxfASLPkN1qXsz-QOTsRo3pyXsozonuM7ncjMuvuCMXBcqhMJQjWi0CIUG62kW_3WpqUpf4zKUlnRHbjnjmjXjoPFiczxTTvg9J9zhUEODIJT2j43zfp1W-caBNcafqfOH7AdawTPS6CG7DfpnfuEAsBJ9-gAzQ0F_PujkhZ7-vl2add09dla0PK0pWcX3C0xcwQsxWG8UuvD9KCMtggElIrg22WtYoNxG4S9rg1lQasnHQlxExt4ChFrhmMv3Tuo11hPH0DHjsMu55SP5tgLGHLmBqJpdd8b1wu3rfaslRHcblDYuiradgy0cSL5VMBI4Bk_qIt4tI8XFpYCqWKGC7YQGJBItJkCWvuPqWVdAPTpYsjgDDOGCQIgyvTyUI5yblBo1iSufj0u0lOASs4P80T0XREPWNuMUIT9OkXlvx42FLe_4FbZCLB86P0UJo6jnKghgJFOkzZHj3JG04tPV7bbCr7hsf7fRM3pi2KamW9lHELAETMwTURvXvYoVroVJMEpudF0",
    "refresh_token": "def5020086efb2df2cd53b8869d480ecb3bb2fab93676f5c0e0a26bb4024686f8b455da3b887deeee3acff1c0c6f9631617a7ef1cd4c4fda196527963d8eec3ef60c9ade1733bf764174b7c7a326238edff2d1836677853414f16696dea60715de51e4019eb1e6fa991cccf7b6d49fa65665cde48a380aff56d0c8fd0d8215c86883b285c433f71437b616169a32e5007fcfb8c59f902ebf7a5a3f5ee99d6f8670bedd6b68592bfee860b60e346ee307ff1bfa3117a0772d3a9683a315d0fb89604c1967734e2ac57d22e24a75e59a2c1e3b99fb6edf15be28a94c322fb88222b946b08ba3cae1c2902efd333a89321ab89d82e53c98b03bd8aa021b162d7277d7d7d85eac5c67acae4bee70073f23b428549515091ac8029e3744159dd0ecf24bc1970abef8c644f29797d61d615f5960a2f6841d30a5eb1628d5f9ebd9834475f797ae1976862acbe6cb02fd58ef6bad26cd88dcc2baa30ecaf43023ab4e57ff1eb1a6e86914c6a9ea36580653f8"
}

```


### Refreshing Token

url: `domain.app/api/refresh`

method: `post`

header: `Accept => application/json`

body: 

```json

{
    "refresh_token":"def5020086efb2df2cd53b8869d480ecb3bb2fab93676f5c0e0a26bb4024686f8b455da3b887deeee3acff1c0c6f9631617a7ef1cd4c4fda196527963d8eec3ef60c9ade1733bf764174b7c7a326238edff2d1836677853414f16696dea60715de51e4019eb1e6fa991cccf7b6d49fa65665cde48a380aff56d0c8fd0d8215c86883b285c433f71437b616169a32e5007fcfb8c59f902ebf7a5a3f5ee99d6f8670bedd6b68592bfee860b60e346ee307ff1bfa3117a0772d3a9683a315d0fb89604c1967734e2ac57d22e24a75e59a2c1e3b99fb6edf15be28a94c322fb88222b946b08ba3cae1c2902efd333a89321ab89d82e53c98b03bd8aa021b162d7277d7d7d85eac5c67acae4bee70073f23b428549515091ac8029e3744159dd0ecf24bc1970abef8c644f29797d61d615f5960a2f6841d30a5eb1628d5f9ebd9834475f797ae1976862acbe6cb02fd58ef6bad26cd88dcc2baa30ecaf43023ab4e57ff1eb1a6e86914c6a9ea36580653f8"
}

```

You Will get this Response

```json

{
    "token_type": "Bearer",
    "expires_in": 1296000,
    "access_token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImMzMzA1NWU3ZmY3NzRjYWVhNGFmMjNlODE2ZjJlMWFmMGM5NzAxODE2Yzg5Nzk4ZWU4MGYxYzE5YTdkODljY2M3YTFhMzcwYzQ0OWU2YzYxIn0.eyJhdWQiOiIxIiwianRpIjoiYzMzMDU1ZTdmZjc3NGNhZWE0YWYyM2U4MTZmMmUxYWYwYzk3MDE4MTZjODk3OThlZTgwZjFjMTlhN2Q4OWNjYzdhMWEzNzBjNDQ5ZTZjNjEiLCJpYXQiOjE1MDA4NzExNDQsIm5iZiI6MTUwMDg3MTE0NCwiZXhwIjoxNTAyMTY3MTQ0LCJzdWIiOiI3MDcyOTAzODEzMTM0OTkiLCJzY29wZXMiOltdfQ.IG77UIX_WKf43ZLnGbg_3oIx6b13y4JssFYL-oylrCDV3awFaP4qt-qHRodLqub3VCTIFNDC8sDMOXFjSPvfO8d_yYGHbgagBKVgIt68L6QMUVqaqTqG_bGhZ61mitQv9xdmzQ8z5FkPAttXWPrH6pIbgFpTELraJrD7LVSgUrj62zP2yo3E53zduw9L0Lch7yfVLs7AeJZPTIUIbqZyMdnjkUGgENpQW7KPN4SCMFX6Gp1eQeobmXVxEQ2QzWmvDacnR7V1lKNngKMyXUnMLcKjd_vwgN-iN4NJapuHeFWr_4QI-fxRW1UZminPAPr_v6S2Zzx05_woNZuO_6BQ5NeA02g2NClHwva3KyWQTmiNkquapW-3Kbquqwvt8xd-92BO-PepLSQWgLXJ7AamctU6VWyIHbCw3uPB9Qad7CAptcJfvHQVQ7XKD8SbPd-cmdygbypCeWvDLQbk21nPjxkaVE4bdS6rZKL9r8iNCANTDyAU30ml31tSuPf1vAl_huJAYtCdxGl39rsGajZIEjHeJIycVlaVLSOs0ILnqy5FZtKax6xwadymxjFfSFU-NDdYaUaw5EC9h3enY8yI9f8yESW5RKvwJ56p9QDdZfOxJtiVQNb_EMG2PyudQDWgll9QmHSwruUSkELYvmESv6SaVcWolVb0tTq9OLh6W1M",
    "refresh_token": "def50200c3c44fc5128bd6c1be2750c0f6cefd743de2835353655008b57bf63419b2620369fc90c81da5deb9e4640b8f8363e52014662557a11e565b522316795ac43e6d7110c3833d0cf8ec410f1a57d6531895495994c9fe60a8ad596f6f2d06b7c64eb7ff26733d7b0e68b926b5631a99888f23566d601c1e4d332079647c15f2c5f01dded1652dc4db8a21dd055202e3066b713fdd0ab885cd77d2e25ef697848fdf76cca86015b2f80c45814c4533edadc0fffe51466b6239ad739cb10be3e0da8333c99abf043aec73eb9f500a40ca508e3ef860c66603c8e17f28aad57f0a497b42b19a12e62929b966ae5c95999ab6f070b1120b53fd9d5d7f615cd41c7d81f2d93ca9292e8def09e4b63da12c090f69b83304a4a69ff94045e421ffea196a4fff00f8930f492ad96401b02fac06465d64a266567a0d0708f7f7039794f78e31568100392ba1448897f196049cc2e3307b4c0302de78ac8c490fe2fee21f869b9c6d095d2c633f383c231d"
}

```

### Logging Using Social Account

You make a Url to For Callback for Each Social Provider.

You may Need to Set it up Using Socialite. But That Call back Will Ping

This URL with this Body

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

You Will Get Response Like this

```json

{
    "token_type": "Bearer",
    "expires_in": 1296000,
    "access_token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjBhZDkyYWI4YzgzNzAzY2NlMDg3Njg0MWQ5NjVkYWMxMmUzM2MwMWNlNzkyYzczNjc3Njg0MGY5ODY5NzQ3ZGMxMDYyOGUwZWNhYzkxOGEwIn0.eyJhdWQiOiIxIiwianRpIjoiMGFkOTJhYjhjODM3MDNjY2UwODc2ODQxZDk2NWRhYzEyZTMzYzAxY2U3OTJjNzM2Nzc2ODQwZjk4Njk3NDdkYzEwNjI4ZTBlY2FjOTE4YTAiLCJpYXQiOjE1MDA4NzE0MTcsIm5iZiI6MTUwMDg3MTQxNywiZXhwIjoxNTAyMTY3NDE3LCJzdWIiOiIxMzUyMjk4NDAyMzA2NzEiLCJzY29wZXMiOltdfQ.RvrMF8976xMcj_IIlv_AgY5ubSL-AFRFFcVPYBFY_A4r0YJIyW-9c2SU9hxCdhVcfsKxKIUcN_eS3KxBxvEN9jWn2NHMJaHJ-ExnltWuTonFtV-UsS51ktHjb-flBVSaPbZRveqpHrxsPiSJ24a4J2UP22xygJv5GtsM-2w48c8RTOfoWp8bER76G4bdhPaDAlINmwfbFK46RkDZhDtiwcspWqutcATBEiVPGZDz7OGgyVRtjefkcncKrOjE_XfMV4LlebsJ1lzbbVn3Sj7NezxOF0WpaAru-BBnhDBeHjtZfG-oCiVsrSDcIyBarqY0vrw6Zhh5vDHVlAt__3RCZqPlVVKO4jGZL6X3Lhp5na4zfwBLw44SsrhReNQsdaIF2go9E-g7j39ZL5uixrbhXeEfjydx_iSSvsT-ZjHJZcmDe6SI3i3R5BiE2okqpr39XesIIxI_QjitraTKZHNIPyYTcmvQE1ZAunBBKVI997NmtPq16m891SgXkvsqKbvSBBde6X8IeXS5upS-kPKggWBDrhIKG4Crn1CFmb3jMCY2cPt3qwxjBQXA8R40vTbnelJqw6XghlFv1_fRX2ZYpMAQS8vHOpvqQVXKshL2gW_NCbezHexe_6pwjmCxzFjLPSOYYzhPCVH2ohUatcJCw0c1MMb8_NVHVIsiZ2YFKuk",
    "refresh_token": "def502003dcf1eddc3d7c2067eec95bdddec1130f37880ac21eabf386f86207433d61c85ae183e558f05c26003acc7c3ac9100ce236ba2f476e763f349c1e4578625e662c544d6f3d2b8ff7c6c8e9268747330daf6e869674e21c607e4ffda702a3e495aa20e8e2d890825d68b37629b8acddee26da899de63c714034756d648d8c9830136b5659574240d42bb2dfefdc04659378613941d5887c9ec297b341b054bea183a4421a2a2bb3e5eea9db11cc35b09152414aa8d854e11cea1ef45f9db52b8d1a485e0bd7e55bcdd72ab0c2ecec7c8bac703053326cfc6af2b5e2c9d3cb7183eb1388adc6e5a679b3aae36a201422b74edc8ad11e145b5230a33c1e36b5ee054d98d06f32329708ddf486d2ca57d952db1f634df04b385aa6218ebdea37d57fc936e6e5abfb4083bcfeeba18184aa22f7e6c47ea48be5acdc4dfd8afe8adea27bc95784fb9cbe55135d85353ca496b66b0f4d6ad893bbec606c9bf320f13afc87e8f4ef8036936200a0a06"
}

```