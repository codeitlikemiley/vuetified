@component('mail::message')
You got a Message From {{ $sender }}

{{ $subject }}

---

Message:

{{ $message }}


You can Reply To This Email : {{ $email  }}

@endcomponent
