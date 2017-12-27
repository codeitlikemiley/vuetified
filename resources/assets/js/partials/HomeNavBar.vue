<template>
  <v-toolbar 
    color="primary" 
    fixed 
    app
  >
    <!-- Title -->
    <v-toolbar-title 
      v-if="extension" 
      class="text-xs-center ml-0 pl-3" 
      :class="$vuetify.breakpoint.width <= 1264 && 'pr-3'" 
      slot="extension" 
      :style="$vuetify.breakpoint.width > 1264 && 'width: 300px'"
    >
      <v-icon 
        class="ml-3 hidden-md-and-down" 
        v-if="showIcon"
      >
        {{ icon }}
      </v-icon>
      <span 
        class="hidden-md-and-down" 
      >
        <span class="white--text">{{ title }}</span>
      </span>
    </v-toolbar-title>
    <v-toolbar-title 
      v-else 
      class="text-xs-center"
    >
      <v-icon 
        class="ml-3 hidden-md-and-down" 
        v-if="showIcon"
      >
        {{ icon }}
      </v-icon>
      <span 
        class="hidden-md-and-down" 
      >
        <span class="white--text">{{ title }}</span>
      </span>
    </v-toolbar-title>
    <v-spacer/>
    <!-- center logo -->
    <img 
      v-if="showLogo" 
      class="hidden-md-and-up" 
      :src="logo" 
    >
    <v-spacer/>
    <v-btn 
      v-if="!isAuthenticated"
      flat 
      color="white"
      to="/login"
    >
      <span class="white--text">Login</span>
      <v-icon 
        right 
        color="white"
      >
        fa-sign-in
      </v-icon>
    </v-btn>
    <v-btn 
      v-if="!isAuthenticated"
      flat 
      color="white"
      to="/register"
    >
      <span class="white--text">Register</span>
      <v-icon 
        right 
        color="white--text"
      >
        fa-user-plus
      </v-icon>
    </v-btn>
    <v-btn 
      v-if="isAuthenticated"
      flat 
      color="white"
      to="/dashboard"
    >
      <span class="white--text">Dashboard</span>
      <v-icon 
        right 
        color="white"
      >
        fa-tachometer
      </v-icon>
    </v-btn>
    <v-btn 
      flat
      color="white"
      to="/support"
    >
      <span class="white--text">Contact Us</span>
      <v-icon 
        right 
        color="white--text"
      >
        fa-life-ring
      </v-icon>
    </v-btn>
    <v-btn 
      v-if="isAuthenticated"
      flat 
      color="white"
      to="/logout"
    >
      <span class="white--text">Logout</span>
      <v-icon 
        right 
        color="white"
      >
        fa-sign-out
      </v-icon>
    </v-btn>
  </v-toolbar>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
const { mapState } = createNamespacedHelpers('auth')

export default {
    data: () => ({
        extension: false,
        showLogo: false,
        logo: '/img/logo.png',
        showIcon: false,
        title: 'Vuetified'
    }),
    computed: {
        ...mapState({
            isAuthenticated: 'isAuthenticated'
        })
    },
    created () {
        /* Emit On a Child Component If You Want This To Be Visible */
        Bus.$on('header-extension-visible', (visibility) => {
            this.extension = visibility
        })
    },
    methods: {
        toggleDrawer () {
            Bus.$emit('toggleDrawer')
        }
    }
}
</script>

<style>

</style>
