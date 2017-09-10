
window._ = require('lodash')
window.moment = require('moment')
window.Promise = require('promise')

/*
 * Define Moment locales
 */
window.moment.defineLocale('en-short', {
    parentLocale: 'en',
    relativeTime: {
        future: 'in %s',
        past: '%s',
        s: '1s',
        m: '1m',
        mm: '%dm',
        h: '1h',
        hh: '%dh',
        d: '1d',
        dd: '%dd',
        M: '1 month ago',
        MM: '%d months ago',
        y: '1y',
        yy: '%dy'
    }
})
window.moment.locale('en')

if (window.$ === undefined || window.jQuery === undefined) {
    window.$ = window.jQuery = require('jquery')
}

if ($('#app').length > 0) {
    require('./vue-bootstrap')
}

/**
 * We'll load the axios HTTP library which allows us to easily issue requests
 * to our Laravel back-end. This library automatically handles sending the
 * CSRF token as a header based on the value of the "XSRF" token cookie.
 */

window.axios = require('axios')

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'

/**
 * Next we will register the CSRF Token as a common header with Axios so that
 * all outgoing HTTP requests automatically have it attached. This is just
 * a simple convenience so we don't have to attach every token manually.
 */

let token = document.head.querySelector('meta[name="csrf-token"]')

if (token) {
    window.axios.defaults.headers.common['X-CSRF-TOKEN'] = token.content
} else {
    console.error('CSRF token not found: https://laravel.com/docs/csrf#csrf-x-csrf-token')
}

window.axios.interceptors.response.use(function (response) {
    return response
}, function (error) {
    switch (error.response.status) {
    case 401:
        // LogOuts All Type of User...
        window.axios.get('/logout')

        // Show Modal Session Expired
        break
        // Payment required Permission
    case 402:
        // Redirect To Payment Page
        break
    }

    return Promise.reject(error)
})
