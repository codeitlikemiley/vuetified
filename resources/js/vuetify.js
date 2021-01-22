import Vue from "vue";
import Vuetify from "vuetify/lib";
import "roboto-fontface/css/roboto/roboto-fontface.css";
// import 'vuetify/dist/vuetify.min.css'
// import colors from "vuetify/lib/util/colors";
//? https://vuetifyjs.com/en/framework/icons#using-custom-icons


import "material-design-icons-iconfont/dist/material-design-icons.css";     //! iconfont: 'md'
//? https://material.io/resources/icons/?style=baseline
import "@mdi/font/css/materialdesignicons.css";                          //! iconfont: 'mdi'
//? https://materialdesignicons.com/
import "@fortawesome/fontawesome-free/css/all.css";                      //! iconfont: 'fa'
//? https://fontawesome.com/icons?d=gallery&m=free
import "font-awesome/css/font-awesome.min.css";                          //! iconfont: 'fa4'
//? https://fontawesome.com/v4.7.0/icons/

//! ----------------mdiSvg Usage On Component ---------------------------------
// On Script Tag <script></script>
//! import '@mdi/js/' //! iconfont: mdiSvg
//! import {mdiAccount} from  '@mdi/js/'
//! data() {
//!     return {
//!         svgPath: mdiAccount
//!     }
//! },
// On template Tag <template></template>
//! <v-icon>{{ svgPath  }}</v-icon>
//! ----------------------------------------------------------------------------

Vue.use(Vuetify);

export default new Vuetify({
    icons: {
        iconfont: "mdi" || "mdiSvg" || "md" || "fa" || "fa4",
    },
    theme: {
        dark: false,
        // define our Theme for light and Dark
        themes: {
            light: {
                primary: "#BA9A5a",
                secondary: "#607D8B",
                accent: "#103050",
                error: "#800020",
                info: "#7fcac3",
                success: "#00695c",
                warning: "#f9a825",
            },
            dark: {
                primary: "#BA9A5a",
            },
        },
    },
    options: {
        customProperties: true,
    },
});



