import Vue from 'vue'

//! Import Only Components of Vuetify You Needed
import {
    Vuetify,
    VApp,
    VNavigationDrawer,
    VFooter,
    VList,
    VBtn,
    VIcon,
    VGrid,
    VToolbar,
    transitions,
    VCard,
    VAvatar,
    VCarousel,
    VChip,
    VTextField,
    VProgressCircular,
    VSubheader,
    VDataTable,
    VCheckbox,
    VSelect,
    VTabs,
    VAlert,
    VBreadcrumbs,
    VParallax
} from 'vuetify'

Vue.use(Vuetify, {
    components: {
        VApp,
        VNavigationDrawer,
        VFooter,
        VList,
        VBtn,
        VIcon,
        VGrid,
        VToolbar,
        transitions,
        VCard,
        VAvatar,
        VCarousel,
        VChip,
        VTextField,
        VProgressCircular,
        VSubheader,
        VDataTable,
        VCheckbox,
        VSelect,
        VTabs,
        VAlert,
        VBreadcrumbs,
        VParallax
    },
    //! Define Your Theme Here
    theme: {
        primary: '#ef9a9a',
        secondary: '#607d8b',
        accent: '#4db6ac',
        error: '#b71c1c',
        info: '#bbdefb',
        success: '#a5d6a7',
        warning: '#ffc107'
    }
})
