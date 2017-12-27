const NotFound = () => import('Pages/NotFound.vue')

export default [
    /* Start Error Handing Routes */
    {
        path: '/404.html',
        component: NotFound,
        name: 'error',
        meta: {
            permission: 'guest'
        }
    },
    /* End Error Handing Routes */

    /* Default Route */
    {
        path: '*',
        component: NotFound,
        name: 'default',
        meta: {
            permission: 'guest'
        }
    }
]
