require('./forms')
require('./errors')

// Add methods to App Object for HTTP Request
_.extend(App, require('./http'))

// All Fields Declared Here When Initiated Will Be Reactive
App.forms = {
    loginForm: {
        username: '',
        password: '',
        remember: false,
        '_token': App.csrfToken
    },
    registerForm: {
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
        '_token': App.csrfToken
    }

    // Add Other Form Object Here
}
