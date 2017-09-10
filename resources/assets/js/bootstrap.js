
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

/**
 * Add Turbolinks
 */

var Turbolinks = require('turbolinks')
Turbolinks.start()

/**
 * Load Only Once Babel Polyfill
 */

if (!global._babelPolyfill) {
    require('babel-polyfill')
}

/**
 * Load Our Vue App
 */

if ($('#app').length > 0) {
    require('./vue-bootstrap')
}

/**
 * We'll load the axios HTTP library which allows us to easily issue requests
 * to our Laravel back-end. This library automatically handles sending the
 * CSRF token as a header based on the value of the "XSRF" token cookie.
 */

window.axios = require('axios')

window.axios.defaults.headers.common = {
    'X-Requested-With': 'XMLHttpRequest',
    'X-CSRF-TOKEN': App.csrfToken
}

window.axios.interceptors.response.use((response) => {
    return response
}, (error) => {
    switch (error.response.status) {
    case 401:
        console.log('show login modal')
        break
    case 402:
        console.log('show subscription modal')
        break
    }
    return Promise.reject(error)
})
