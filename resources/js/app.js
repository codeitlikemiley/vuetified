import { InertiaApp } from '@inertiajs/inertia-vue'
import { InertiaProgress } from '@inertiajs/progress'

import Vue from 'vue'
import './plugins'
import vuetify from './vuetify'

window._ = require("lodash")

Vue.use(InertiaApp)

Vue.config.productionTip = false
const app = document.getElementById('app')
InertiaProgress.init()

new Vue({
    vuetify,
    render: h => h(InertiaApp, {
        props: {
            initialPage: JSON.parse(app.dataset.page),
            resolveComponent: name => import(`./Pages/${name}`).then(module => module.default),
            resolveErrors: page => (page.props.errors || {}),
        },
    }),
    created() {
        this.$storage.setOptions({
            prefix: 'app_',
            driver: 'local',
            ttl: 60 * 60 * 24 * 1000 // 24 hours
        })
    }
}).$mount(app)
