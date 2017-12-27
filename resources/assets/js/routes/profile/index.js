const Dashboard = () => import('Pages/Dashboard.vue')
const Settings = () => import('Pages/Settings.vue')
const Users = () => import('Pages/Users.vue')

export default [
    /* Start Authenticated Routes */
    {
        path: '/dashboard',
        component: Dashboard,
        name: 'dashboard',
        meta: {
            requiresAuth: true,
            permission: 'guest',
            fail: '/404.html'
        }
    },
    {
        path: '/settings',
        component: Settings,
        name: 'settings',
        meta: {
            requiresAuth: true,
            permission: 'guest',
            fail: '/404.html'
        }
    },
    {
        path: '/users',
        component: Users,
        name: 'users',
        meta: {
            requiresAuth: true,
            permission: 'guest',
            fail: '/404.html'
        }
    }
    /* End Authenticated Routes */
]
