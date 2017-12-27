<template>
  <v-navigation-drawer hide-overlay :mini-variant.sync="mini" v-model="drawer" app class="primary" dark>
    <v-toolbar flat class="transparent">
      <v-list class="pa-0 primary">
        <v-list-tile avatar>
          <v-list-tile-avatar>
            <img src="https://randomuser.me/api/portraits/men/85.jpg" >
          </v-list-tile-avatar>
          <v-list-tile-content>
            <v-list-tile-title>John Leider</v-list-tile-title>
          </v-list-tile-content>
          <v-list-tile-action>
            <v-btn icon @click.native.stop="mini = !mini">
              <v-icon>chevron_left</v-icon>
            </v-btn>
          </v-list-tile-action>
        </v-list-tile>
      </v-list>
    </v-toolbar>
    <v-list class="pt-0 primary" dense>
      <v-list-tile v-for="item in items" :key="item.title" @click="">
        <v-list-tile-action>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>{{ item.title }}</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import VLink from 'Components/VLink.vue'
import { createNamespacedHelpers } from 'vuex'
const { mapState } = createNamespacedHelpers('auth')

export default {
    components: {
        VLink
    },
    data: () => ({
        drawer: true,
        items: [
            { title: 'Home', icon: 'dashboard' },
            { title: 'About', icon: 'question_answer' }
        ],
        mini: true,
        right: null
    }),
    computed: {
        ...mapState({
            isAuthenticated: 'isAuthenticated'
        })
    },
    created () {
        let self = this
        switch (self.$vuetify.breakpoint.name) {
        case 'xs': return self.drawer = false
        case 'sm': return self.drawer = false
        case 'md': return self.drawer = true
        case 'lg': return self.drawer = true
        case 'xl': return self.drawer = true
        }
    },
    mounted () {
        let self = this
        Bus.$on('toggleDrawer', function () {
            self.drawer = !self.drawer
        })
    }
}
</script>
