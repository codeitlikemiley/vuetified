<template>
  <v-footer :class="[footerClass]" app>
    <v-spacer />
    <span>© {{ year }} {{ domain }} ® | {{ trademark }}™</span>
    <v-spacer />
  </v-footer>
</template>

<script>
export default {
  data: () => ({
    footerClass: { "primary--text": true, accent: true },
    year: new Date().getFullYear(),
    domain: "vuetified.test",
    trademark: "vuetified-app"
  }),
  created() {
    /* Emit On a Child Component If You Want This To Be Visible */
    // eslint-disable-next-line no-undef
    Bus.$on("footer-content-visible", visibility => {
      this.contentVisible = visibility;
    });
    this.domain = window.location.host;
    this.trademark = this.$page.app.name;
  }
};
</script>
