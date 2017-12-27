import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)

window.axios = axios

/* Allows Us To Authorized Api Request If Authenticated Using Web Middleware */
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'
/* Set The Token if Present So We Can Authorize Request */
let token = document.head.querySelector('meta[name="csrf-token"]')
if (token) {
    window.axios.defaults.headers.common['X-CSRF-TOKEN'] = token.content
} else {
    console.error('CSRF token not found: https://laravel.com/docs/csrf#csrf-x-csrf-token')
}

window.axios.interceptors.response.use((response) => {
    return response
}, (error) => {
    switch (error.response.status) {
    case 401:
        //! If You Wawnt to Override the LocalStorage Name
        //! check provider.js for the `${storageNamespace}.${tokenPrefix}_token`
        window.localStorage.removeItem('vue-authenticate.vueauth_token')
        vm.$store.commit('auth/setMe', null)
        vm.$store.commit('auth/isAuthenticated', false)
        vm.$router.push({ name: 'login' })
        break
    case 402:
        vm.$router.push('subscribe')
        break
    }
    return Promise.reject(error)
})
