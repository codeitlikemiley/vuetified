/* Boostrap Our App */
import './bootstrap'
/* Vue Data */
import base from './mixins/base'
/* Vue Routing */
import router from './routes'
/* Listen to Echo Channels */
import privateChannel from './mixins/private-channel'
import globalChannel from './mixins/global-channel'
import groupChannel from './mixins/presence-channel'
/* Global Event Bus Dispatcher */
import dispatcher from './mixins/dispatcher'

/* Vue Instance */
const app = new Vue({
    mixins: [base, globalChannel, privateChannel, groupChannel, dispatcher],
    router,
    mounted () {
        /* Trigger Example Events at Laravel Web Routes */

        /* Global Channel */
        this.getCreatedUser()

        if (this.user) {
            /* Private Channel */
            this.getAuth()
            /* Presence Channel */
            this.getAnnouncement()
        }
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
