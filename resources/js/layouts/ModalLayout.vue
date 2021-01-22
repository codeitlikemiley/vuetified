<template>
  <v-app>
    <div>
      <slot name="toolbar" />
    </div>

    <v-main>
      <slot />
    </v-main>
    <v-footer app>
      <slot name="footer" />
    </v-footer>
  </v-app>
</template>

<script>
export default {
  props: {
    title: String,
  },
  watch: {
    title(title) {
      this.updatePageTitle(title);
    },
  },
  mounted(){
    this.updatePageTitle(this.title);
  },
  methods: {
    updatePageTitle(title) {
      document.title = title
        ? `${title} | ${this.$page.app.name}`
        : this.$page.app.name;
    },
  },
};
</script>

<style>
</style>
