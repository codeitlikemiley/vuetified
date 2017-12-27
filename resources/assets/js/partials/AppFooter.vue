<template>
  <v-footer :class="[footerClass]" app>
    <v-spacer/><span>© {{ year }} {{ domain }} ® | {{ trademark }}™</span><v-spacer/>
  </v-footer>
</template>

<script>
import VLink from 'Components/VLink.vue'
export default {
    components: {
        VLink
    },
    data: () => ({
        footerClass: {'white--text': true, 'red': true, 'lighten-2': true },
        year: (new Date()).getFullYear(),
        domain: 'Mydomain.com',
        trademark: 'mytrademark'
    }),
    created () {
        /* Emit On a Child Component If You Want This To Be Visible */
        Bus.$on('footer-content-visible', (visibility) => {
            this.contentVisible = visibility
        })
    }
}
</script>

<style>

</style>
