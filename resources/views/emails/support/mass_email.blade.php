@component('mail::message') @if($with_panel) @component('mail::panel') {{ $panel_message }} @endcomponent
@endif {{ $message }} @if($with_button) @component('mail::button', ['url' => $button_url, 'color' => $button_color]) {{ $button_message
}} @endcomponent @endif {{ $signature }}
<br> {{ config('app.name') }} @endcomponent