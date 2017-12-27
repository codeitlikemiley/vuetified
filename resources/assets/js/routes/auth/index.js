const Login = () => import('Pages/Login.vue')
const Logout = () => import('Pages/Logout.vue')
const Register = () => import('Pages/Register.vue')
const ResetPassword = () => import('Pages/ResetPassword.vue')
const ForgotPassword = () => import('Pages/ForgotPassword.vue')

export default [
    /* Start Authentication Routes */
    {
        path: '/login',
        component: Login,
        name: 'login',
        meta: {
            permission: 'guest',
            fail: '/404.html'
        }
    },
    {
        path: '/forgotpassword',
        component: ForgotPassword,
        name: 'forgotpassword',
        meta: {
            permission: 'guest',
            fail: '/404.html'
        }
    },
    {
        path: '/forgotpassword/:token',
        props: true,
        component: ResetPassword,
        name: 'resetpassword',
        meta: {
            permission: 'guest',
            fail: '/404.html'
        }
    },
    {
        path: '/logout',
        component: Logout,
        name: 'logout',
        meta: {
            permission: 'guest',
            fail: '/404.html'
        }
    },
    {
        path: '/register',
        component: Register,
        name: 'register',
        meta: {
            permission: 'guest',
            fail: '/404.html'
        }
    }
    /* End Authentication Routes */
]
