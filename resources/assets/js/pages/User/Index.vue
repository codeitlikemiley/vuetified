<template>
  <main-layout>
    <v-container fluid>
      <!-- User Main Detail -->
      <v-layout 
        row 
        wrap>
        <v-flex 
          d-flex 
          xs12 
          sm7>
          <v-layout 
            row 
            wrap>
            <v-flex d-flex>
              <v-card 
                light 
                flat
              >
                <v-card-title>
                  <v-text-field
                    v-model="search"
                    append-icon="search"
                    label="Search Users"
                    single-line
                    hide-details
                    light
                  />
                </v-card-title>
              </v-card>
            </v-flex>
          </v-layout>
        </v-flex>
        <v-flex 
          d-flex 
          xs12 
          sm5 
          child-flex>
          <v-layout 
            row 
            wrap>
            <v-flex 
              xs12 
              class="white"
              d-flex>
              <v-btn 
                block 
                color="accent" 
                dark
                flat
                @click="createUser">
                Create New Account
                <v-icon
                  right
                  color="accent" 
                >
                  fa-user-plus
                </v-icon>
              </v-btn>
            </v-flex>
            <v-flex 
              xs12 
              d-flex>
              <v-flex class="xs6 white">
                <v-btn 
                  v-if="selected.length > 0"
                  block 
                  color="blue darken-4" 
                  dark
                  flat
                  @click="massActivate">
                  <v-icon
                    large
                    color="blue darken-4" 
                  >
                    link
                  </v-icon>
                  Activate Selected
                </v-btn>
              </v-flex>
              <v-flex class="xs6 white">
                <v-btn 
                  v-if="selected.length > 0"
                  block 
                  flat
                  color="error" 
                  dark
                  @click="massDeactivate">
                  <v-icon
                    large
                    color="error" 
                  >
                    link_off
                  </v-icon>
                  Deactivate Selected
                </v-btn>
              </v-flex>
            </v-flex>
          </v-layout>
          
        </v-flex>
      </v-layout>
      <v-data-table
        v-model="selected"
        :headers="headers"
        :items="items"
        :search="search"
        :pagination.sync="pagination"
        select-all
        light
        item-key="id"
        expand
      >
        <template
          slot="headers" 
          slot-scope="props"
        >
          <tr>
            <th>
              <v-checkbox
                :input-value="props.all"
                :indeterminate="props.indeterminate"
                light
                primary
                hide-details
                @click.native="toggleAll"
              />
            </th>
            <th 
              v-for="header in props.headers" 
              :key="header.text"
              :class="['column sortable', pagination.descending ? 'desc' : 'asc', header.value === pagination.sortBy ? 'name' : '', {'text-xs-left': header.align === 'left', 'text-xs-right': header.align === 'right', 'text-xs-center': header.align === 'center'},$vuetify.breakpoint.width >= 600 && 'title']"
              @click="changeSort(header.value)"
            >
              <v-icon>arrow_upward</v-icon>
              {{ header.text }}
            </th>
          </tr>
        </template>
        <template 
          slot="items" 
          slot-scope="props"
        >
          <tr>
            <td class="title text-xs-left">
              <v-checkbox
                :active="props.selected"
                :input-value="props.selected"
                @click="props.selected = !props.selected"
              />
            </td>
            <td class="title text-xs-left accent--text">
              {{ props.item.id }}
            </td>
            <td class="title text-xs-left accent--text">
              {{ props.item.name }}
            </td>
            <td class="title text-xs-left accent--text">
              <v-avatar v-if="props.item.sponsor">
                <img 
                  :src="props.item.sponsor.photo_url" 
                  :alt="props.item.sponsor.name"
                >
              </v-avatar>
              <span v-if="props.item.sponsor">{{ props.item.sponsor.name }}</span>
            </td>

            <td class="title text-xs-left accent--text">
              <v-btn 
                v-if="activeLink(props.item.referral_link.active)" 
                :href="`http://${ props.item.referral_link.link }.${ domain }`"
                flat
                color="cyan"
                target="_blank"
              >
                <v-icon left>fa-link</v-icon>
                <span>{{ props.item.referral_link.link }}</span>
              </v-btn>

            </td>
            <td class="title text-xs-left accent--text">
              <v-chip
                v-for="(role,key) in props.item.roles"
                :key="key" 
                dark
              >
                <v-avatar
                  :class="{
                    'amber lighten-2': (role === 'admin' && props.item.id < 1000),
                    'primary': (role === 'admin' && props.item.id > 999),
                    'white--text': true,
                    'indigo darken-2': (role === 'merchant'),
                    'lime darken-2': (role === 'customer')
                  }"
                >
                  <span 
                    v-if="props.item.id < 1000" 
                    class="headline">S</span>
                  <span 
                    v-else 
                    class="headline">{{ role.charAt(0).toUpperCase() }}</span>
                </v-avatar>
                <span v-if="props.item.id < 1000">Super Admin</span>
                <span v-else>{{ role }}</span>
              </v-chip>
            </td>
            <td class="title text-xs-left accent--text">
              <v-switch
                v-model="props.item.active"
                :label="getStatus(props.item.active)"
                @change="toggleStatus(props.item)"
              />
            </td>
            <td class="title text-xs-center">
              <v-btn 
                :disabled="!can('manage_users')"
                light 
                flat 
                icon 
                @click="props.expanded = !props.expanded"
              >
                <v-icon 
                  v-if="!props.expanded" 
                  color="teal">fa-expand</v-icon>
                <v-icon 
                  v-if="props.expanded" 
                  color="amber">fa-compress</v-icon>
              </v-btn>
              <v-btn 
                :disabled="!can('manage_users')" 
                flat 
                icon 
                color="error" 
                @click="deleteUser(props.item)"
              >
                <v-icon>fa-trash</v-icon>
              </v-btn>
            </td>
          </tr>
        </template>

        <template 
          slot="pageText"
          slot-scope="{ pageStart, pageStop }"
        >
          From {{ pageStart }} to {{ pageStop }}
        </template>

        <template 
          slot="expand" 
          slot-scope="props"
        >
          <v-container fluid>
            <v-card 
              light 
              flat 
              text-xs-center
            >
              <v-card-media
                class="white--text blue-grey"
                height="75px"
              >
                <v-container 
                  fill-height 
                  fluid
                >
                  <v-layout fill-height>
                    <v-flex 
                      xs12 
                      align-end 
                      flexbox
                    >
                      <v-avatar text-xs-left>
                        <img 
                          :src="props.item.photo_url" 
                          :alt="props.item.name"
                        >
                      </v-avatar>
                      <span class="headline">{{ props.item.name }}</span>
                    </v-flex>
                  </v-layout>
                </v-container>
              </v-card-media>
              <v-card-actions>
                <v-btn 
                  v-if="!props.item.referral_link.active" 
                  flat 
                  color="success" 
                  @click="activateLink(props.item)"
                >
                  Activate Link 
                  <v-icon right>done_all</v-icon>
                </v-btn>
                <v-btn 
                  v-if="props.item.referral_link.active" 
                  flat 
                  color="error" 
                  @click="deactivateLink(props.item)"
                >
                  Deactivate Link 
                  <v-icon right>fa-ban </v-icon>
                </v-btn>
              </v-card-actions>
              <v-card-title>
                <v-container fluid>
                  <p class="title accent--text">Account Details</p>
                  <v-layout 
                    row 
                    wrap
                  >
                    <v-flex xs12>
                      <v-text-field
                        v-model="props.item.username"
                        label="Username"
                        prepend-icon="fa-at"
                        light
                        readonly
                      />
                    </v-flex>
                    <v-flex xs12>
                      <v-text-field
                        v-model="props.item.email"
                        label="Email"
                        prepend-icon="fa-envelope"
                        light
                        readonly
                      />
                    </v-flex>
                  </v-layout>
                  <p 
                    v-if="props.item.roles" 
                    class="title accent--text"
                  >
                    Assigned Roles
                  </p>
                  <v-layout 
                    row 
                    wrap
                  >
                    <v-flex xs12>
                      <v-combobox
                        :items="roles"
                        v-model="props.item.roles"
                        :disabled="props.item.id < 1000"
                        color="blue-grey"
                        light
                        multiple
                        clearable
                        deletable-chips
                        prepend-icon="fa-tags"
                        @input="changeRoles(props.item)"
                      >
                        <template 
                          slot="selection" 
                          slot-scope="data"
                        >
                          <v-chip
                            :selected="data.selected"
                            light
                            close
                            @input="removeRole(data.item,props.item.roles)"
                          >
                            <v-avatar
                              class="blue-grey white--text"
                            >
                              <span class="headline">{{ data.item.charAt(0).toUpperCase() }}</span>
                            </v-avatar>
                            {{ data.item }}
                          </v-chip>
                        </template>
                      </v-combobox>
                    </v-flex>
                  </v-layout>
                  <p 
                    v-if="props.item.permissions" 
                    class="title accent--text"
                  >
                    Role Inherited Permissions
                  </p>
                  <v-layout 
                    row 
                    wrap
                  >
                    <v-flex xs12>
                      <!-- Enable update permissions -->
                      <!--
                        chips
                        deletable-chips
                        clearable
                        @input="changePermissions(props.item)"
                        -->
                      <v-combobox
                        :items="permissions"
                        v-model="props.item.permissions"
                        color="brown"
                        light
                        disabled
                        multiple
                        prepend-icon="fa-tags"
                      >
                        <template 
                          slot="selection" 
                          slot-scope="data"
                        >
                          <!-- Enable update permissions -->
                          <!--
                            close
                            @input="removePermission(data.item,props.item.permissions)"
                            -->
                          <v-chip
                            :selected="data.selected"
                            light
                          >
                            <v-avatar
                              class="primary white--text"
                            >
                              <span class="headline">{{ data.item.charAt(0).toUpperCase() }}</span>
                            </v-avatar>
                            {{ data.item }}
                          </v-chip>
                        </template>
                      </v-combobox>
                    </v-flex>
                  </v-layout>
                  <p 
                    v-if="props.item.profile" 
                    class="title accent--text"
                  >
                    Profile Details
                  </p>
                  <v-layout 
                    row 
                    wrap
                  >
                    <v-flex 
                      v-for="(profile,key) in props.item.profile" 
                      :key="key"
                      xs12
                    >
                      <v-text-field
                        :label="toProperCase(key)"
                        :value="profile"
                        light
                        readonly
                      />
                    </v-flex>
                  </v-layout>

                </v-container>
              </v-card-title>

            </v-card>
          </v-container>
        </template>

      </v-data-table>
    </v-container>
  </main-layout>
</template>

<script>
import MainLayout from "Layouts/Main.vue";
import Acl from "Mixins/acl";
import validationError from "Mixins/validation-error";
import { Form } from "vform";
import swal from "sweetalert2";

export default {
  components: {
    MainLayout
  },
  mixins: [Acl, validationError],
  data: () => ({
    contentClass: { grey: true, "lighten-4": true, "accent--text": true },
    dialog: false,
    /* table */
    headers: [
      { text: "ID", value: "id", align: "left", sortable: true },
      { text: "Name", value: "name", align: "left", sortable: true },
      { text: "Sponsor", value: "sponsor.name", align: "left", sortable: true },
      {
        text: "Referrak Link",
        value: "referral_link.link",
        align: "left",
        sortable: true
      },
      { text: "Roles", value: "roles", align: "left", sortable: false },
      { text: "Status", value: "active", align: "left", sortable: true },
      { text: "Actions", value: "", align: "left", sortable: false }
    ],
    items: [],
    selected: [],
    pagination: {
      sortBy: "name"
    },
    current_user: {},
    usersForm: new Form({}),
    toggleForm: new Form({
      toggle: false
    }),
    search: "",
    roles: [],
    permissions: [],
    rolesForm: new Form({
      roles: []
    }),
    permissionsForm: new Form({
      permissions: []
    }),
    deleteUserForm: new Form({
      user_id: null
    }),
    domain: window.location.hostname
  }),
  watch: {
    items: {
      handler: function(newValue) {},
      deep: true
    },
    roles(newValue) {},
    permissions(newValue) {}
  },
  mounted() {
    let self = this;
    self.fetchRoles();
    self.fetchPermissions();
    self.fetchUsers();
  },
  methods: {
    toggleStatus(user) {
      let self = this;
      self.toggleForm.toggle = user.active;
      self.toggleForm.user_id = user.id;
      if (user.id < 1000) {
        let toggleModal = swal.mixin({
          confirmButtonClass: "v-btn blue-grey  subheading white--text",
          buttonsStyling: false
        });
        toggleModal({
          title: "Oops! Forbidden Action!",
          html: `<p class="title">Cannot Modify Super Admin Account Type!</p>`,
          type: "warning",
          confirmButtonText: "Back"
        });
        user.active = true;
        return;
      }
      axios
        .post(route("api.user.toggleStatus"), self.toggleForm)
        .then(response => {
          console.log(response.data);
        })
        .catch(errors => {
          let toggleModal = swal.mixin({
            confirmButtonClass: "v-btn blue-grey  subheading white--text",
            buttonsStyling: false
          });
          toggleModal({
            title: "Oops! Forbidden Action!",
            html: '<p class="title">' + errors.response.data.message + "</p>",
            type: "warning",
            confirmButtonText: "Back"
          });
        });
    },
    getStatus(status) {
      if (status) {
        return "Active";
      } else {
        return "Inactive";
      }
    },
    createUser() {
      vm.$router.push({ name: "create-user" });
    },
    async massDeactivate() {
      let self = this;
      let selected = _.map(self.selected, "id");
      let toggleStatusForm = new Form({
        selected
      });

      try {
        const payload = await axios.post(
          route("api.user.massDeactivate"),
          toggleStatusForm
        );
        let updated = payload.data.updated;
        console.log(updated);
        _.map(updated, id => {
          let index = _.findIndex(self.items, { id });
          self.items[index].active = false;
        });
        let toggleModal = swal.mixin({
          confirmButtonClass: "v-btn blue-grey  subheading white--text",
          buttonsStyling: false
        });
        toggleModal({
          title: "Success",
          html: `<p class="title">${payload.data.message}</p>`,
          type: "success",
          confirmButtonText: "Back"
        });
      } catch ({ errors, message }) {
        if (errors) {
          console.log(errors);
        }
        if (message) {
          console.log(message);
        }
      }
    },
    async massActivate() {
      let self = this;
      let selected = _.map(self.selected, "id");
      let toggleStatusForm = new Form({
        selected
      });

      try {
        const payload = await axios.post(
          route("api.user.massActivate"),
          toggleStatusForm
        );
        let updated = payload.data.updated;
        console.log(updated);
        _.map(updated, id => {
          let index = _.findIndex(self.items, { id });
          self.items[index].active = true;
        });
        let toggleModal = swal.mixin({
          confirmButtonClass: "v-btn blue-grey  subheading white--text",
          buttonsStyling: false
        });
        toggleModal({
          title: "Success",
          html: `<p class="title">${payload.data.message}</p>`,
          type: "success",
          confirmButtonText: "Back"
        });
      } catch ({ errors, message }) {
        if (errors) {
          console.log(errors);
        }
        if (message) {
          console.log(message);
        }
      }
    },
    activeLink(link) {
      return !!link;
    },
    async activateLink(user) {
      let toggleModal = swal.mixin({
        confirmButtonClass: "v-btn blue-grey  subheading white--text",
        buttonsStyling: false
      });
      try {
        let payload = await axios.get(
          route("api.user.link.activate", { id: user.id })
        );
        toggleModal({
          title: "Success!",
          html: `<p class="title">${payload.data.message}</p>`,
          type: "success",
          confirmButtonText: "Back"
        });
        user.referral_link.active = true;
      } catch ({ message }) {
        if (message) {
          toggleModal({
            title: "Error!",
            html: `<p class="title">${message}</p>`,
            type: "error",
            confirmButtonText: "Back"
          });
        }
      }
    },
    async deactivateLink(user) {
      let toggleModal = swal.mixin({
        confirmButtonClass: "v-btn blue-grey  subheading white--text",
        buttonsStyling: false
      });
      try {
        let payload = await axios.get(
          route("api.user.link.deactivate", { id: user.id })
        );
        user.referral_link.active = false;
        toggleModal({
          title: "Success!",
          html: `<p class="title">${payload.data.message}</p>`,
          type: "success",
          confirmButtonText: "Back"
        });
      } catch ({ message }) {
        if (message) {
          toggleModal({
            title: "Error!",
            html: `<p class="title">${message}</p>`,
            type: "error",
            confirmButtonText: "Back"
          });
        }
      }
    },
    async fetchRoles() {
      let self = this;
      try {
        const payload = await axios.get(route("api.roles.index"));
        self.roles = payload.data;
      } catch ({ errors, message }) {
        if (errors) {
          console.log("fetchRoles:errors", errors);
        }
        if (message) {
          console.log("fetchRoles:error-message", message);
        }
      }
    },
    async fetchPermissions() {
      let self = this;
      try {
        const payload = await axios.get(route("api.permissions.index"));
        self.permissions = payload.data;
      } catch ({ errors, message }) {
        if (errors) {
          console.log("fetchRoles:errors", errors);
        }
        if (message) {
          console.log("fetchRoles:error-message", message);
        }
      }
    },
    async fetchUsers() {
      let self = this;
      self.usersForm.busy = true;
      try {
        const payload = await self.usersForm.post(route("api.user.index"));
        self.items = payload.data.data;
        self.usersForm = new Form({});
      } catch (errors) {
        self.usersForm.busy = false;
      }
    },
    deleteUser(user) {
      let self = this;
      self.deleteUserForm.user_id = user.id;
      let index = _.findIndex(self.items, { id: user.id });
      let toggleModal = swal.mixin({
        confirmButtonClass: "v-btn blue-grey  subheading white--text",
        buttonsStyling: false
      });
      self.deleteUserForm.post(route("api.user.delete")).then(response => {
        if (response.data.status === true) {
          toggleModal({
            title: "Success",
            html: `<p class="title">User Deleted!</p>`,
            type: "success",
            confirmButtonText: "Back"
          });
          self.$delete(self.items, index);
        } else {
          toggleModal({
            title: "Forbidden Action!",
            html: `<p class="title">Cannot Delete Super Admin!</p>`,
            type: "warning",
            confirmButtonText: "Back"
          });
        }
      });
    },
    toProperCase(key) {
      let newStr = key.replace(/_/g, " ");
      return newStr.replace(/\w\S*/g, function(txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
      });
    },
    async changeRoles(item) {
      let self = this;
      let toggleModal = swal.mixin({
        confirmButtonClass: "v-btn blue-grey  subheading white--text",
        buttonsStyling: false
      });
      self.rolesForm.roles = item.roles;
      try {
        self.rolesForm.busy = true;
        const payload = await self.rolesForm.post(
          route("api.user.roles.sync", { id: item.id })
        );
        item.permissions = payload.data.permissions;
        self.rolesForm.busy = false;
        self.rolesForm = new Form({
          roles: []
        });
        toggleModal({
          title: "Success",
          html: `<p class="title">User Role Change!</p>`,
          type: "success",
          confirmButtonText: "Back"
        });
      } catch (errors) {
        toggleModal({
          title: "Error!",
          html: `<p class="title">${errors.response.data.message}</p>`,
          type: "error",
          confirmButtonText: "Back"
        });
        self.rolesForm.busy = false;
      }
    },
    removeRole(role, roles) {
      roles.splice(roles.indexOf(role), 1);
      roles = [...roles];
    },
    async changePermissions(item) {
      /* make ajax call to update permissions to this user */
      let self = this;
      self.permissionsForm.permissions = item.permissions;
      try {
        self.permissionsForm.busy = true;
        const payload = await App.post(
          route("api.user.permissions.sync", { id: item.id }),
          self.permissionsForm
        );
        self.permissionsForm.busy = false;
        self.permissionsForm = new AppForm(App.forms.permissionsForm);
      } catch ({ message }) {
        if (message) {
        }
        self.permissionsForm.busy = false;
      }
    },
    removePermission(permission, permissions) {
      permissions.splice(permissions.indexOf(permission), 1);
      permissions = [...permissions];
    },
    deleteAll() {
      this.items = [];
      this.selected = [];
    },
    deleteSelected() {
      let self = this;
      let newItems = _.difference(self.items, self.selected);
      self.items = newItems;
      self.selected = [];
      //! Send Api Call To Delete The Social Account
    },
    toggleAll() {
      if (this.selected.length) this.selected = [];
      else this.selected = this.items.slice();
    }
  }
};
</script>
