import Vue from "vue";
import Echo from "laravel-echo"; /* Make App Realtime */
import VueEcho from "vue-echo"; /* Vue Wrapper for laravel echo */

if (typeof io !== "undefined") {
  window.Echo = Echo;
  let EchoInstance = new Echo({
    namespace: "App\\Events",
    broadcaster: "socket.io",
    host: `${window.location.hostname}:6001`
  });
  /* Install VueEcho: this.$echo */
  Vue.use(VueEcho, EchoInstance);
}
