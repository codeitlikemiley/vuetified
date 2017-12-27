<template>
  <v-toolbar color="accent" extended app>
    <v-toolbar-side-icon @click="toggleDrawer"/>
    <v-toolbar-title class="white--text">
      Title
    </v-toolbar-title>
    <v-toolbar-title slot="extension">
      <v-breadcrumbs>
        <v-icon 
          slot="divider" 
          color="secondary"
        >
          forward
        </v-icon>
        <v-breadcrumbs-item
          active-class="primary--text"
          :disabled="false"
          to="/dashboard"
        >
          Dashboard
        </v-breadcrumbs-item>
        <v-breadcrumbs-item
          :disabled="true"
        >
          <span class="white--text">Edit</span>
        </v-breadcrumbs-item>
      </v-breadcrumbs>
    </v-toolbar-title>
    <v-spacer/>
    <v-btn icon>
      <v-icon>search</v-icon>
    </v-btn>
    <v-btn icon>
      <v-icon>apps</v-icon>
    </v-btn>
    <v-btn icon>
      <v-icon>refresh</v-icon>
    </v-btn>
    <v-btn icon>
      <v-icon>more_vert</v-icon>
    </v-btn>
  </v-toolbar>
</template>

<script>

export default {
    data: () => ({
        extension: false,
        showLogo: false,
        logo: '/img/logo.png',
        showIcon: false,
        title: 'App Title',
        items: [
            {
                text: 'Dashboard',
                disabled: false
            },
            {
                text: 'Link 1',
                disabled: false
            },
            {
                text: 'Link 2',
                disabled: true
            }
        ]
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
