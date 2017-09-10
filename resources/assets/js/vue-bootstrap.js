/* IE 11 Compatible */
import Echo from 'laravel-echo'
import Vue from 'vue'
import Vuetify from 'vuetify'
import VueEcho from 'vue-echo'
import initialState from './mixins/initial-state'
import TurbolinksAdapter from 'vue-turbolinks'

/*
 * Load Wrapper for Turbolink
 */

Vue.use(TurbolinksAdapter)

/*
 * Load Vue
 *
 */
if (window.Vue === undefined) {
    window.Vue = Vue
    window.Bus = new Vue()
}
/*
 * Load Our Initial State From Our Backend
 *
 */
Vue.mixin(initialState)

/**
 * Form Helpers
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
