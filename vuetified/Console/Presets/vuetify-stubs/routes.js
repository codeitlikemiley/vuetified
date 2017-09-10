import Vue from 'vue'
import VueRouter from 'vue-router'
import AuthService from './services/auth'
/* Lazy Loading Routes */
const Home = () => import('./pages/Home.vue')
const About = () => import('./pages/About.vue')
const Courses = () => import('./pages/Courses.vue')
const Login = () => import('./pages/Login.vue')
const Register = () => import('./pages/Register.vue')
const Support = () => import('./pages/Support.vue')
const NotFound = () => import('./pages/NotFound.vue')

Vue.use(VueRouter)

const routes = [

    {
        path: '/',
        component: Home
    },
    {
        path: '/about',
        component: About
    },
    {
        path: '/courses',
        component: Courses
    },
    {
        path: '/login',
        component: Login
    },
    {
        path: '/register',
        component: Register
    },
    {
        path: '/support',
        component: Support
    },
    /* Default Route */
    { path: '*', component: NotFound }
]

const router = new VueRouter({
    routes,
    mode: 'history'
})

router.beforeEach((to, from, next) => {
    /* Middlewares */
    if (to.matched.some(m => m.meta.requiresAuth)) {
        return AuthService.check().then(authenticated => {
            if (!authenticated) {
                return next({ path: '/login' })
            }
        })
    }
    if (to.matched.some(m => m.meta.isAdmin)) {
        return AuthService.checkIsAdmin().then(admin => {
            if (!admin) {
                return next({ path: '/dashboard' })
            }
            return next()
        })
    }

    return next()
})

export default router
