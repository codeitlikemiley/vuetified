<template>
  <v-footer :style="footerStyle">
    <span>© {{ year }} {{ domain }} ® | {{ trademark }}™</span>
  </v-footer>
</template>

<script>
import Theme from '../mixins/theme'
export default {
    mixins: [Theme]
}
</script>

<style>

</style>
