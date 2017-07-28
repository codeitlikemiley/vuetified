/* IE 11 Compatible */
import 'babel-polyfill'
import Echo from 'laravel-echo'
import Vue from 'vue'
import Vuetify from 'vuetify'
import VueEcho from 'vue-echo'
import initialState from './mixins/initial-state'

/*
 * Load Vue
 *
 */
if (window.Vue === undefined) {
    window.Vue = Vue
    window.Bus = new Vue()
}
/*
 * All Global Mixins
 *
 */
Vue.mixin(initialState)

/**
 * Load the Vuetified form utilities.
 */
require('./forms/form-bootstrap')

/**
 * Load Vuetify Components
 */
Vue.use(Vuetify)

/**
 * Load Laravel Echo
 */

window.Echo = Echo

if (typeof io !== 'undefined') {
    let EchoInstance = new Echo({
        namespace: 'App\\Events',
        broadcaster: 'socket.io',
        host: `${window.location.hostname}:6001`
    })
    /* Install VueEcho: this.$echo */
    Vue.use(VueEcho, EchoInstance)
}
