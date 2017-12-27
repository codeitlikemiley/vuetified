export default {
    methods: {
        isLoggedIn () {
            return !!this.$store.state.auth.isAuthenticated
        },
        hasRole (payload) {
            let me = this.$store.getters['auth/getMe']
            return _.includes(me.roles, payload)
        },
        hasPermission (payload) {
            let me = this.$store.getters['auth/getMe']
            return _.includes(me.permissions, payload)
        },
        hasAnyPermission (permissions) {
            let me = this.$store.getters['auth/getMe']
            return permissions.some(p => me.permissions.includes(p))
        },
        hasAnyRole (roles) {
            let me = this.$store.getters['auth/getMe']
            return roles.some(r => me.roles.includes(r))
        },
        hasAllRoles (roles) {
            let me = this.$store.getters['auth/getMe']
            return _.difference(roles, me.roles).length === 0
        },
        hasAllPermissions (permissions) {
            let me = this.$store.getters['auth/getMe']
            return _.difference(permissions, me.permissions).length === 0
        },
        can (permission) {
            return this.$store.getters['auth/getMe'].can[permission]
        }
    }
}
