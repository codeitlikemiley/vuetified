
import Echo from 'laravel-echo'

window.Pusher = require('pusher-js');

if (process.env.MIX_ECHO_SSL) {
  console.log('ssl-installed')
  window.Echo = new Echo({
    broadcaster: 'pusher',
    key: process.env.MIX_PUSHER_APP_KEY,
    wsHost: window.location.hostname,
    wsPort: 6001,
    wssPort: 6001,
    disableStats: true,
    // encrypted: true // uncomment this if you are using SSL
  });
} else {
  window.Echo = new Echo({
    broadcaster: 'pusher',
    key: process.env.MIX_PUSHER_APP_KEY,
    wsHost: window.location.hostname,
    wsPort: 6001,
    disableStats: true,
  });
}

