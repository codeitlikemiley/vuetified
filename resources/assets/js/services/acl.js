import Vue from 'vue'
import store from '~/store'
import Access from 'Services/access'
import router from '~/router'

Vue.use( Access, { router: router, store: store, init: 'guest', fail: '/404.html', save: true } )
