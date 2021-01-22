<template>
  <v-app>
    <app-nav-bar :title="title"/>
    <left-side-bar/>
    <v-main transition="slide-x-transition" fluid pa-0 ma-0>
      <slot/>
    </v-main>
    <app-footer/>
  </v-app>
</template>

<script>
import AppFooter from "../partials/AppFooter.vue";
import AppNavBar from "../partials/AppNavBar.vue";
import LeftSideBar from "../partials/LeftSideBar.vue";

export default {
  components: {
    AppFooter,
    AppNavBar,
    LeftSideBar,
  },
  props: {
    title: String
  },
  mounted() {
    this.updatePageTitle(this.title);
  },
  methods: {
    updatePageTitle(title) {
      document.title = title
        ? `${title} | ${this.$page.app.name}`
        : this.$page.app.name;
    }
  },
  watch: {
    title(title) {
      this.updatePageTitle(title);
    }
  }
};
</script>
