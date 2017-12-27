<template>
  <v-toolbar 
    color="red lighten-2" 
    fixed 
    app
  >
    <v-toolbar-side-icon 
      class="white--text"
      @click.native.stop="toggleDrawer()"
    />
    <!-- Title -->
    <v-toolbar-title 
      v-if="extension" 
      class="text-xs-center ml-0 pl-3" 
      :class="$vuetify.breakpoint.width <= 1264 && 'pr-3'" 
      slot="extension" 
      :style="$vuetify.breakpoint.width > 1264 && 'width: 300px'"
    >
      <v-icon 
        class="ml-3 hidden-md-and-down accent" 
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
        class="ml-3 hidden-md-and-down accent" 
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
  </v-toolbar>
</template>

<script>

export default {
    data: () => ({
        extension: false,
        showLogo: false,
        logo: '/img/logo.png',
        showIcon: false,
        title: 'TITLE'
    }),
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
