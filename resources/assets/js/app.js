import './bootstrap'
import 'babel-polyfill'
import './global-components'
import Echo from 'laravel-echo'
import base from './mixins/base'
import router from './routes'
import Vue from 'vue'
import Vuetify from 'vuetify'
import VueEcho from 'vue-echo'
import privateChannel from './mixins/private-channel'
import globalChannel from './mixins/global-channel'
import groupChannel from './mixins/presence-channel'
import listener from './mixins/listener'

/* Install Vuetify */
Vue.use(Vuetify)

/* Initialized Laravel Echo */

if (typeof io !== 'undefined') {
    let EchoInstance = new Echo({
        namespace: 'App\\Events',
        broadcaster: 'socket.io',
        host: `${window.location.hostname}:6001`
    })
    /* Install VueEcho */
    Vue.use(VueEcho, EchoInstance)
}

/* Add Global Event Bus */
window.Bus = new Vue()

/* Initialized Main Vue Instance */
const app = new Vue({
    mixins: [base, globalChannel, privateChannel, groupChannel, listener],
    router,
    mounted () {
        this.getCreatedUser()
        this.getAuth()
        this.getAnnouncement()
    },
    methods: {
        getAuth () {
            /* Instantly Get Update Upon Joining Global Channel */
            axios.get('/get-auth')
        },
        getCreatedUser () {
            /* Receive Only Update After The User Is In The Private Channel */
            axios.get('/user-created')
        },
        getAnnouncement () {
            /* Instantly Update The Users In The Channel */
            /* Receive Only Update After The User Is In The Presence Channel */
            axios.get('/announcement')
        }
    }
}).$mount('#app')
