# Vuetified 
## Laravel Vuetify Real Time Starter App

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
1. git clone https://github.com/codeitlikemiley/vuetified YOURPROJECTNAME
2. cd YOURPROJECTNAME
3. composer install
4. yarn
5. cp env.example .env
6. php artisan passport:install
7. echo:generate
8. set your .env
- if you want to use laravel echo then change this to true
```
ECHO_ON=false
```
9. php artisan migrate:fresh --seed
10. node websocket
11. Serve Your Site
    - laravel valet - valet link YOURSITE
    - laradock - docker-compose up -d nginx redis mysql
    - homestead - homestead up
    [yourprojectname.test/](yourprojectname.test)
## Stacks Used
- Laravel 
- Vue
- Laravel Passport for Oauth and Authentication 
- Vuetified for UI
- Laravel Echo for Realtime Broadcasting
- Laravel Horizon for Queueing Jobs
- Laravel Socialite for Integration of Third Party OAuth
- VS Code Plugins For Intelligent Code Fix and Linting

## Plugins

Here You can Add Extra Plugins to Your App

```
//! Order is Important if Other Services Dependes On it */
//! Primary Services Add Here


import './services/vuetify' //! Configuring Themes and Components

import './services/vue-axios' //! For Making Api Calls

import './services/bus' //! Global Event Bus

import './services/vuex' //! State Management

import './services/echo' //! Websocket

import './services/initial-state' //! Seed Initial Data To Your App 
//! @ Vuetified/Configuration/ProvidesScriptVariables.php

import('./services/forms') //! Declare Your Global Form Object Here

import './services/vee-validate' //! Form Validation

import './services/youtube' //! Youtube Component


//! Secondary Services That Depends On the Primary Services
//! i.e: Vuex in our ACL Service
import './services/acl'
```

## Theme

open resources/assets/js/services/vuetify.js edit theme object

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

Open Vuetified/Configuration/ProvidesScriptVariables.php

Add Your Initial Data As an Array

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
## Linting
If Your Using VS Code which i highly recommend since they offer great Plugins For Vue and ES lint

You can Pm me Directly at [Facebook](https://www.facebook.com/uriah.san) So i Can Share My Settings 

Install VS Code , then install this plugin [Settings Sync](https://github.com/shanalikhan/code-settings-sync.git)

## Issues
If You Have Any Seen Any Bugs Please Report Make an [Issue](https://github.com/codeitlikemiley/vuetified/issues)

## Pull Request
If You Want To Add Components To Be Part Of Vuetified Please Make a [Pull Request](https://github.com/codeitlikemiley/vuetified/pulls)