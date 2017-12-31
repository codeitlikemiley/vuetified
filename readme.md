# Vuetified 
## Laravel Vuetify Real Time Starter App

![vuetified](https://user-images.githubusercontent.com/28816690/34463373-b7649ca8-ee94-11e7-9dbc-a97de8574279.png)

# Table of Contents
1. [Requirements](#requirements)
2. [Installation](#installation)
3. [Stacks Used](#stacks-used)
4. [Issues](#issues)
5. [Extra](#extra)

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
8. php artisan migrate:fresh --seed
9. Serve Your Site
    - laravel valet - valet link YOURSITE
    - laradock - docker-compose up -d nginx redis mysql
    - homestead - homestead up
10. visit your local site

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


## Issues
If You Have Any Seen Any Bugs Please Report Make an [Issue](https://github.com/codeitlikemiley/vuetified/issues)

## Pull Request
If You Want To Add Components To Be Part Of Vuetified Please Make a [Pull Request](https://github.com/codeitlikemiley/vuetified/pulls)

## Extra
If Your Using VS Code which i highly recommend since they offer great Plugins For Vue and ES lint

You can Pm me Directly at [Facebook](https://www.facebook.com/uriah.san) So i Can Share My Settings 

Install VS Code , then install this plugin [Settings Sync](https://github.com/shanalikhan/code-settings-sync.git)


