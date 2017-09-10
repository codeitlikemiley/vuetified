<template>
 <v-app dark id="main-app" standalone v-cloak>
    <left-side-bar></left-side-bar>
    <app-nav-bar :title="title"></app-nav-bar>
    <main>
      <v-container>
        <transition>
          <slot></slot>
        </transition>
      </v-container>
    </main>
    <fab-button></fab-button>
    <app-footer></app-footer>
  </v-app>
</template>

<script>
import AppFooter from '../partials/AppFooter.vue'
import AppNavBar from '../partials/AppNavBar.vue'
import LeftSideBar from '../partials/LeftSideBar.vue'
import FabButton from '../components/FabButton.vue'
export default {
    data () {
        return {
            title: 'Vlogger'
        }
    },
    mounted () {
        console.log('Layout Loaded')
    },
    components: {
        AppFooter,
        AppNavBar,
        LeftSideBar,
        FabButton
    }
}
</script>
