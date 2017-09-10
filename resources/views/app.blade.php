<!doctype html>
<html lang="{{ app()->getLocale() }}">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- Necessary To Authenticate Request Using Axios -->
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <link rel="stylesheet" href="{{ mix('/css/app.css') }}">
    <link rel="shortcut icon" href="/img/favicon.ico?v=2" type="image/x-icon"/>
    <title>{{ config('app.name') }} </title>
    @include('partials.initial_state')
    <!-- Our Laravel Api Routes Name -->
    @routes
</head>

<body>
    <div id="app">
        <main-vue></main-vue>
    </div>
<!-- If Laravel Echo is Disable in Our Config Dont Load this -->
@if(config('echo.realtime')===true)
<script src="//{{ Request::getHost() }}:6001/socket.io/socket.io.js"></script>
@endif
<script src="{{ mix('/js/manifest.js') }}"></script>
<script src="{{mix('/js/vendor.js')}}"></script>
<script src="{{mix('/js/app.js')}}"></script>
</body>

</html>
