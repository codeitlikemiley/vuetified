<!doctype html>
<html lang="{{ app()->getLocale() }}">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- Necessary To Authenticate Request Using Axios -->
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <link rel="stylesheet" href="{{ mix('/css/app.css') }}">
    <title>{{ config('app.name') }} </title>
    @include('partials.initial_state')
    @routes
</head>

<body>
    <div id="app">
            <transition name="fade" mode="out-in">
                <keep-alive>
                    <router-view></router-view>
                </keep-alive>
            </transition>
    </div>
<script src="//{{ Request::getHost() }}:6001/socket.io/socket.io.js"></script>
<script src="{{ mix('/js/manifest.js') }}"></script>
<script src="{{mix('/js/vendor.js')}}"></script>
<script src="{{mix('/js/app.js')}}"></script>
</body>

</html>
