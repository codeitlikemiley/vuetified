<template>
  <v-navigation-drawer
      class="pb-0"
      persistent
      absolute
      height="100%"
      clipped
      enable-resize-watcher
      v-model="drawer"
    >
      <v-list dense>
        <v-link v-for="link in links" :key="link.text" :name="link.name" :href="link.href" :icon="link.icon"></v-link>
        <v-link  name="Logout" href="/logout" icon="fa-power-off"></v-link>
        <v-subheader class="mt-3 grey--text text--darken-1">Latest Members</v-subheader>
        <v-list>
          <member-link v-for="member in members" :key="member.text" :name="member.name" :avatar="`https://randomuser.me/api/portraits/men/${member.picture}.jpg`"></member-link>
        </v-list>
        <v-list-tile class="mt-3">
          <v-list-tile-action>
            <v-icon class="grey--text text--darken-1">add_circle_outline</v-icon>
          </v-list-tile-action>
          <v-list-tile-title class="grey--text text--darken-1">Browse Channels</v-list-tile-title>
        </v-list-tile>
        <v-list-tile>
          <v-list-tile-action>
            <v-icon class="grey--text text--darken-1">settings</v-icon>
          </v-list-tile-action>
          <v-list-tile-title class="grey--text text--darken-1">Manage Subscriptions</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
</template>

<script>
import VLink from '../components/VLink.vue'
import MemberLink from '../components/MemberLink.vue'
export default {
    data () {
        return {
            drawer: true,
            links: [
                { icon: 'fa-fa', name: 'Home', href: '/' },
                { icon: 'subscriptions', name: 'Courses', href: '/courses' },
                { icon: 'fa-plug', name: 'Login', href: '/login' },
                { icon: 'fa-university', name: 'Learn Now', href: '/register' },
                { icon: 'fa-support', name: 'Need Help?', href: '/support' },
                { icon: 'fa-youtube-play', name: 'About Us', href: '/about' }
            ],
            members: {}
        }
    },
    components: {
        VLink,
        MemberLink
    },
    created () {
        var self = this
        Bus.$on('toggleDrawer', function () {
            self.drawer = !self.drawer
        })
    },
    mounted () {
        this.fetchUsers()
    },
    methods: {
        fetchUsers () {
            this.members = [
                { picture: 28, name: 'Joseph' },
                { picture: 38, name: 'Apple' },
                { picture: 48, name: 'Xbox Ahoy' },
                { picture: 58, name: 'Nokia' },
                { picture: 78, name: 'MKBHD' }
            ]
        }
    }
}
</script>
