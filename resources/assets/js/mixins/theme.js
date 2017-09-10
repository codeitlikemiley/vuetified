/**
 * Export the Any Component
 */
module.exports = {
    data: () => ({
        darkClass: App.theme.dark,
        primaryClass: App.theme.primary,
        accentClass: App.theme.accent,
        secondaryClass: App.theme.secondary,
        infoClass: App.theme.info,
        warningClass: App.theme.warning,
        errorClass: App.theme.error,
        successClass: App.theme.success,
        toggleBarStyle: App.site.toggleBarStyle,
        titleStyle: App.site.titleStyle,
        navbarStyle: App.site.navbarStyle,
        footerStyle: App.site.footerStyle,
        sidebarStyle: App.site.sidebarStyle,
        domain: App.site.domain,
        year: (new Date()).getFullYear(),
        trademark: App.site.trademark,
        logo: App.site.logo.url,
        logoStyle: {
            width: App.site.logo.width,
            height: App.site.logo.height
        },
        showLogo: App.site.logo.show,
        showIcon: App.site.icon.show,
        icon: App.site.icon.name ? App.site.icon.name : null,
        iconColor: App.site.icon.color,
        title: App.site.trademark
    }),
    computed: {
        isDark () {
            return this.darkClass === true
        }
    }

}
