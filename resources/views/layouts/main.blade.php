<!doctype html>
<html lang="{{ app()->getLocale() }}" class="wf-loading wf-materialicons-n4-loading wf-roboto-n4-loading">
<head>
@stack('meta')
@stack('favicon')
@stack('css')
@stack('header_js')
@stack('title')
</head>
<body>
@yield('content')
@stack('footer_js')
</body>
</html>