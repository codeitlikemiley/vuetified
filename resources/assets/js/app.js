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
import MainVue from './App.vue'

/* Vue Instance with TurboLinks */
document.addEventListener('turbolinks:load', () => {
    var element = document.getElementById('app')
    if (element != null) {
        var app = new Vue({
            mixins: [base, globalChannel, privateChannel, groupChannel, dispatcher],
            router,
            el: element,
            template: '<MainVue/>',
            components: { MainVue }
        })
    }
})
