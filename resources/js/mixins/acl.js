export default {
    methods: {
        isLoggedIn() {
            return !!this.$page.auth.isLoggedIn;
        },
        hasRole(payload) {
            let me = this.$page.auth.user;
            return _.includes(me.roles, payload);
        },
        hasPermission(payload) {
            let me = this.$page.auth.user;
            return _.includes(me.permissions, payload);
        },
        hasAnyPermission(permissions) {
            let me = this.$page.auth.user;
            return permissions.some(p => me.permissions.includes(p));
        },
        hasAnyRole(roles) {
            let me = this.$page.auth.user;
            return roles.some(r => me.roles.includes(r));
        },
        hasAllRoles(roles) {
            let me = this.$page.auth.user;
            return _.difference(roles, me.roles).length === 0;
        },
        hasAllPermissions(permissions) {
            let me = this.$page.auth.user;
            return _.difference(permissions, me.permissions).length === 0;
        },
        can(permission) {
            return this.$page.auth.user.can[permission];
        },
    },
};
