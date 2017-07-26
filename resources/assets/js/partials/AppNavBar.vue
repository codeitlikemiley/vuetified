<template>
  <v-toolbar class="red">
      <v-toolbar-title>
        <v-toolbar-side-icon @click.native.stop="toggleDrawer()"></v-toolbar-side-icon>
        <v-icon class="ml-3">fa-youtube</v-icon> {{ title }}
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-text-field
        label="Search..."
        single-line
        append-icon="search"
        dark
        hide-details
      ></v-text-field>
</v-toolbar>
</template>

<script>
export default {
    props: ['title'],
    methods: {
        toggleDrawer () {
            Bus.$emit('toggleDrawer')
        }
    }
}
</script>

<style>

</style>
