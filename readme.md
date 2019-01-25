# Vuetified

## Laravel + Vuetify realtime starter app.

![vuetified](https://user-images.githubusercontent.com/28816690/34463373-b7649ca8-ee94-11e7-9dbc-a97de8574279.png)

# Table of Contents

1. [Requirements](#requirements)
2. [Installation](#installation)
3. [Stacks Used](#stacks-used)
4. [Plugins](#plugins)
5. [Theme](#theme)
6. [Initial State](#initial-state)
7. [Linting](#linting)
8. [Issues](#issues)
9. [Pull Request](#pull-request)

## Requirements

- PHP 7.1+
- Composer
- Node JS
- NPM
- Redis
- VS Code
- Laravel Valet (NGINX) or use Laradock or Homestead

## Installation

1. `git clone https://github.com/codeitlikemiley/vuetified YOURPROJECTNAME`
2. `cd YOURPROJECTNAME`
3. `composer install`
4. `yarn`
5. `cp env.example .env`
6. `php artisan passport:install`
7. `echo:generate`
8. set your `.env`

- If you want to use Laravel echo then change this to true

```
ECHO_ON=false
```

9. `php artisan migrate:fresh --seed`
10. node websocket
11. Serve Your Site

    - laravel valet - valet link YOURSITE
    - laradock - docker-compose up -d nginx redis mysql
    - homestead - homestead up
      [yourprojectname.test/](yourprojectname.test)

## Adding Git Commit Hooks

- added pre-commit hook file use this type : `cp pre-commit .git/hooks/pre-commit` to use this.
- make sure it is executable on your system
  `chmod +x .git/hooks/pre-commit`

## Stacks Used

- Laravel
- Vue
- Laravel Passport for Oauth and authentication
- Vuetified for UI
- Laravel Echo for real-time broadcasting
- Laravel Horizon for queueing jobs
- Laravel Socialite for integration of third-party OAuth
- VS Code plugins for intelligent code fixing and linting

## Plugins

Here you can add extra plugins to your app:

```
//! Order is important if other services depend on it */
//! Primary Services add here

import './services/vuetify' //! Configuring Themes and Components

import './services/vue-axios' //! For making API calls

import './services/bus' //! Global event bus

import './services/vuex' //! State management

import './services/echo' //! Websocket

import './services/initial-state' //! Seed initial data to your app
//! @ Vuetified/Configuration/ProvidesScriptVariables.php

import('./services/forms') //! Declare your global form objects here

import './services/vee-validate' //! Form validation

import './services/youtube' //! YouTube component


//! Secondary services that depend on the primary services
//! i.e: Vuex in our ACL service
import './services/acl'
```

## Theme

Open `resources/assets/js/services/vuetify.js` and the edit theme object:

```
theme: {
        primary: '#ef9a9a',
        secondary: '#607d8b',
        accent: '#4db6ac',
        error: '#b71c1c',
        info: '#bbdefb',
        success: '#a5d6a7',
        warning: '#ffc107'
    }
```

## Inital State

Open `Vuetified/Configuration/ProvidesScriptVariables.php`

Add your initial data as an array:

```
public static function scriptVariables()
    {
        return [
            'csrfToken' => csrf_token(),
            'env' => config('app.env'),
            'api_endpoint' => config('app.api'),
            'sponsor' => self::getSponsor()
        ];
    }
```

## VS Code Settings (Laravel/Vue - Auto Lint and Fix)

- install Vs code plugin "Settings Sync" or `ctrl + shift + x`
- press: `ctrl + shift + P`
- search/type: `Sync: Advance Option`
- Choose: `Download Settings From Public Gist`
- Enter Gist ID: `bb232eb1abd0734a815b658a91b9cba5`

Install VS Code, then install this plugin [Settings Sync](https://github.com/shanalikhan/code-settings-sync.git).

## Issues

- If you have seen any bugs please report it by making an [issue](https://github.com/codeitlikemiley/vuetified/issues).
- You can PM me directly at [Facebook](https://www.facebook.com/uriah.san)

## Pull Request

If you want to add components to be part of vuetified please make a [pull request](https://github.com/codeitlikemiley/vuetified/pulls).
