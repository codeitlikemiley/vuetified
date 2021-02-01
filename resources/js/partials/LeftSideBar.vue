<template>
  <v-navigation-drawer v-model="drawer" app class="blue-grey darken-4">
    <v-list color="primary darken-1">
      <v-row justify="center" class="mt-2">
        <v-avatar color="grey" size="62">
          <v-img class="elevation-6" :src="$page.auth.user.avatar" />
        </v-avatar>
      </v-row>

      <v-list-item>
        <v-list-item-content>
          <v-list-item-title
            class="text-center white--text"
          >{{ $page.auth.user.fname }} {{ $page.auth.user.lname }}</v-list-item-title>
          <v-list-item-subtitle
            class="caption font-weight-light text-center white--text"
          >Email: {{ $page.auth.user.email }}</v-list-item-subtitle>
          <v-btn
            v-if="$page.auth.isImpersonating"
            text
            color="white"
            class="compress--icon"
            @click="leave()"
          >
            <v-icon>power_settings_new</v-icon>
          </v-btn>
        </v-list-item-content>
      </v-list-item>
    </v-list>
    <v-divider />

    <v-list>
      <v-link
        title="Dashboard"
        href="dashboard"
        icon="dashboard"
        link-color="white"
        active-color="#BA9A5a"
        icon-color="#fafafa"
      />
      <v-link
        title="Logout"
        href="logout"
        icon="power_settings_new"
        link-color="white"
        active-color="#BA9A5a"
        icon-color="#fafafa"
      />
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import VLink from "../Shared/VLink";
// see acl to know what methods you can use to secure front_end
import Acl from "../mixins/acl";

export default {
  components: {
    VLink
  },
  mixins: [Acl],
  data: () => ({
    drawer: false,
    user: null
  }),
  created() {
    let self = this;
    switch (self.$vuetify.breakpoint.name) {
      case "xs":
        return (self.drawer = false);
      case "sm":
        return (self.drawer = false);
      case "md":
        return (self.drawer = true);
      case "lg":
        return (self.drawer = true);
      case "xl":
        return (self.drawer = true);
    }
  },
  mounted() {
    let self = this;
    // eslint-disable-next-line no-undef
    Bus.$on("toggleDrawer", function() {
      self.drawer = !self.drawer;
    });
  },
  methods: {
    leave() {
      this.$inertia.visit(this.route("impersonate.leave"));
    }
  }
};
</script>
