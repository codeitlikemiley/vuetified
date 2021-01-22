import Vue from 'vue'
import { Vue2Storage } from 'vue2-storage'

Vue.use(Vue2Storage)
// You can pass options
Vue.use(Vue2Storage, {
    prefix: "app_",
    driver: "local",
    ttl: 0 // disables the lifetime and the record will be kept forever
    // ttl: 60 * 60 * 24 * 1000 // 24 hours
});
  
// add this event to remove all ls at window closed
// window.onbeforeunload = function() {
//     localStorage.removeItem(key);
//     return "";
// };
