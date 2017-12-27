<template>
  <v-navigation-drawer
    fixed
    v-model="drawer"
    class="blue-grey"
    :clipped="$vuetify.breakpoint.width <= 1264 && true"
    hide-overlay
    app
  >
    <v-list dense class="blue-grey">
      <!-- V-For Links From Menu -->
      <!-- Individual Link (Custom Additional) -->
      <v-link 
        title="Home" 
        href="/" 
        icon="fa-home"
        link-color="white"
        active-color="#4db6ac"
        icon-color="#fafafa"
      />
      <v-link 
        title="Support" 
        :href="'/support'" 
        icon="message"
        link-color="white"
        active-color="#4db6ac"
        icon-color="#fafafa"
      />
      <!-- Expandable Group Links from Group Link -->
      <v-subheader class="white--text">Members Area</v-subheader>
      <!-- Admin Only Accessible -->
      <v-link 
        v-if="isAuthenticated" 
        title="User Management" 
        href="/users" 
        icon="supervisor_account"
        link-color="white"
        active-color="#4db6ac"
        icon-color="#fafafa"
      />
      <!-- Normal User Links -->
      <v-link 
        v-if="isAuthenticated" 
        title="Dashboard" 
        href="/dashboard" 
        icon="fa-tachometer"
        link-color="white"
        active-color="#4db6ac"
        icon-color="#fafafa"
      />
      <v-link 
        v-if="isAuthenticated" 
        title="Settings" 
        href="/settings" 
        icon="fa-cogs"
        link-color="white"
        active-color="#4db6ac"
        icon-color="#fafafa"
      />
      <v-link 
        v-if="isAuthenticated"
        title="Logout" 
        href="/logout"
        icon="power_settings_new"
        link-color="white"
        active-color="#4db6ac"
        icon-color="#fafafa"
      />
      <!-- Guest Links -->
      <v-link 
        v-if="!isAuthenticated" 
        title="Login" 
        href="/login'"
        icon="fa-key"
        link-color="white"
        active-color="#4db6ac"
        icon-color="#fafafa"
      />
      <v-link 
        v-if="!isAuthenticated"
        title="Register"
        href="/register" 
        icon="fa-user-plus"
        link-color="white"
        active-color="#4db6ac"
        icon-color="#fafafa"
      />
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import VLink from '../components/VLink.vue'
import { createNamespacedHelpers } from 'vuex'
const { mapState } = createNamespacedHelpers('auth')

export default {
    components: {
        VLink
    },
    data: () => ({
        drawer: false
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
