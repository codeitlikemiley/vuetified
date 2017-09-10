<template>
 <v-app :dark="App.theme.dark"  standalone v-cloak>
    <left-side-bar></left-side-bar>
    <app-nav-bar></app-nav-bar>
    <main>
      <v-container transition="slide-x-transition">
          <slot></slot>
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
    mounted () {
        console.log('Main Layout Loaded')
    },
    components: {
        AppFooter,
        AppNavBar,
        LeftSideBar,
        FabButton
    }
}
</script>
