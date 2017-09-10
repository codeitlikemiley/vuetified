<template>
  <v-navigation-drawer
      class="pb-0"
      persistent
      height="100%"
      clipped
      enable-resize-watcher
      v-model="drawer"
    >
      <v-list dense>
        <!-- V-For Links From Menu -->
        <v-link :dark="darkClass" v-for="link in links" :key="link.id" :title="link.title" :href="link.href" :icon="link.action"></v-link>
        <!-- Individual Link (Custom Additional) -->
        <v-link :dark="darkClass"  title="Tutorial" :href="'/courses'"   icon="school"></v-link>
        <!-- Expandable Group Links from Group Link -->
        <group-link :dark="darkClass" :items="grouplinks"></group-link>
        <v-subheader :class="{'blue-grey--text': !isDark, 'text--lighten-1': !isDark, 'white--text': isDark}">Featured Product</v-subheader>
        <!-- Featured Products -->
        <v-list>
          <member-link :dark="darkClass" v-for="member in members" :key="member.text" :name="member.name" :avatar="`https://randomuser.me/api/portraits/men/${member.picture}.jpg`"></member-link>
        </v-list>
        <v-subheader :class="{'blue-grey--text': !isDark, 'text--lighten-1': !isDark, 'white--text': isDark}">Top 3 Best Seller</v-subheader>
        <!-- Best Seller Products -->
        <v-list>
          <member-link v-for="member in members" :key="member.text" :name="member.name" :avatar="`https://randomuser.me/api/portraits/men/${member.picture}.jpg`"></member-link>
        </v-list>
        <v-link :dark="darkClass"  title="Logout"  :href="'/logout'" icon="power_settings_new"></v-link>
        <v-link :dark="darkClass"  title="Settings" :href="'/'"   icon="settings"></v-link>
      </v-list>
    </v-navigation-drawer>
</template>

<script>
import VLink from '../components/VLink.vue'
import GroupLink from '../components/GroupLink.vue'
import MemberLink from '../components/MemberLink'
import Theme from '../mixins/theme'

export default {
    mixins: [Theme],
    data: () => ({
        drawer: true,
        links: [], // site navigation links
        members: [], // change with featured Products
        grouplinks: [] // product categories
    }),
    components: {
        VLink,
        GroupLink,
        MemberLink
    },
    mounted () {
        var self = this
        Bus.$on('toggleDrawer', function () {
            self.drawer = !self.drawer
        })
        self.fetchProducts()
        self.fetchCategories()
        self.fetchNavLinks()
    },
    methods: {
        fetchProducts () {
            // On Click Will Show The Product Page
            this.members = [
                { picture: 28, name: 'Asus' },
                { picture: 38, name: 'Apple' },
                { picture: 48, name: 'Xbox' }
            ]
        },
        fetchCategories () {
            this.grouplinks = App.grouplinks
        },
        fetchNavLinks () {
            this.links = App.menu
        },
        isMenuActive (href) {
            let itemsegment = ''
            let segment = ''
            if (href !== undefined) {
                itemsegment = href.split('/')[1]
                segment = window.location.pathname.split('/')[1]
                return itemsegment === segment
            }
        },
        loadview (href, view) {
            if (!this.isMenuActive(href)) {
                this.$router.push({ path: `${href}` })
                Bus.$emit(`load-view`, view)
            } else {
                Bus.$emit(`load-view`, view)
            }
        }
    }

}
</script>
