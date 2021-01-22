<template>
  <v-app-bar app clipped-right color="accent" dark>
    <v-app-bar-nav-icon @click.stop="toggleDrawer()" />
    <v-toolbar-title>{{ title }}</v-toolbar-title>
    <div class="flex-grow-1" />
    <v-app-bar-nav-icon v-if="withRight" @click.stop="toggleRightDrawer()" />
  </v-app-bar>
</template>

<script>
export default {
  props: { title: String, withRight: Boolean },
  methods: {
    toggleDrawer() {
      // eslint-disable-next-line no-undef
      Bus.$emit("toggleDrawer");
    },
    toggleRightDrawer() {
      // eslint-disable-next-line no-undef
      Bus.$emit("toggleRightDrawer");
    },
  },
};
</script>

<style>
</style>
