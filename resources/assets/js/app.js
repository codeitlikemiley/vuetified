import '~/bootstrap'
import 'babel-polyfill'
import 'vuetify/src/stylus/app.styl'
import '~/plugins'
import store from '~/store'
import App from '~/App.vue'
import router from './router'
import Vue from 'vue'

window.vm = new Vue({
    el: '#app',
    store,
    router,
    render: h => h(App)
})
