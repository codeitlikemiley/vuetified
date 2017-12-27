<?php

return [
    'realtime'  => env('ECHO_ON',false),
    'protocol'  => env('ECHO_PROTOCOL','http'),
    'client_id' => env('ECHO_CLIENT_ID'),
    'client_key' => env('ECHO_CLIENT_KEY'),
    'domain' => env('ECHO_DOMAIN', 'localhost'),
    'sslCertPath' => env('ECHO_CERTPATH', 'localhost'),
    'sslKeyPath' => env('ECHO_KEYPATH', 'localhost'),
    'sslCertChainPath' => env('ECHO_CERTCHAINPATH', 'localhost'),
    'sslPassphrase' => env('ECHO_PASSPHRASE', 'localhost')
];