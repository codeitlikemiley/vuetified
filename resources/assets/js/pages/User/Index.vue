<template>
  <main-layout>
    <v-container fluid>
      <!-- User Main Detail -->
      <v-card-title>
        <v-text-field
          v-model="search"
          append-icon="search"
          label="Filter/Search Users List"
          single-line
          hide-details
        />
        <v-spacer/>
        <v-btn
        color="teal"
        dark
        @click="createUser"
        >
            Create New User
            <v-icon right>
                person_add
            </v-icon>
        </v-btn>
      </v-card-title>
      <v-data-table
        v-model="selected"
        :headers="headers"
        :items="items"
        :search="search"
        :pagination.sync="pagination"
        :loading="usersForm.busy"
        select-all
        light
        item-key="id"
        expand
      >
        <v-progress-linear 
          slot="progress" 
          color="blue" 
          indeterminate/>
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
            <th colspan="4">
              <v-toolbar 
                flat
                dense 
                color="white">
                <v-overflow-btn
                v-model="filterBy"
      :items="filters"
      return-object
      editable
      flat
      label="Filter By"
      hide-details
      overflow
    ></v-overflow-btn>

    <v-divider
      class="mx-2"
      vertical
    ></v-divider>
                <v-text-field
                  v-model="search"
                  append-icon="search"
                  :label="`Search ${filterBy.value.toUpperCase()}`"
                  single-line
                  hide-details
                  px-2
                />

                <v-divider
                  class="mx-2"
                  vertical
                />

<v-btn 
                    @click="toggleOrderBy"
                    icon
                    flat>
                    <v-icon :color="orderColor">{{ sortIcon }}</v-icon>
                  </v-btn>

                <v-divider
                  class="mx-2"
                  vertical
                />
                <div v-if="selected.length>0">

                <v-btn icon
                    flat>
                    <v-icon color="amber">block</v-icon>
                  </v-btn>
<v-btn icon
                    flat>
                    <v-icon color="green">how_to_reg</v-icon>
                  </v-btn>

                  <v-btn icon
                    flat>
                    <v-icon color="yellow darken-1">mail</v-icon>
                  </v-btn>

                  <v-btn icon
                    flat>
                    <v-icon color="error">delete_outline</v-icon>
                  </v-btn>
                  </div>
              </v-toolbar>
            </th>
          </tr>
          <tr>
            <th/>
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
              {{ props.item.name }}
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
                :label="getStatus(props.item.active)"
                v-model="props.item.active"
                @change="toggleStatus(props.item)"
              />
            </td>
            <td class="title text-xs-center">
              <v-btn 
                :disabled="!can('manage_users')"
                light 
                flat 
                icon 
                class="compress--icon"
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
                flat 
                icon 
                color="blue" 
                class="compress--icon"
                @click="editUser(props.item)"
              >
                <v-icon>fa-pencil</v-icon>
              </v-btn>
              <v-btn 
                :disabled="!can('manage_users')" 
                flat 
                icon 
                color="error" 
                class="compress--icon"
                @click="openDialog(props.item)"
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
              <v-img
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
                      <v-btn 
                        v-if="activeLink(props.item.referral_link.active)" 
                        :href="`http://${ props.item.referral_link.link }.${ domain }`"
                        flat
                        color="cyan lighten-3"
                        target="_blank"
                      >
                        <v-icon left>fa-link</v-icon>
                        <span>{{ props.item.referral_link.link }}</span>
                      </v-btn>
                    </v-flex>
                  </v-layout>
                </v-container>
              </v-img>
              <v-card-title>
                <v-container fluid>
                  <p 
                    v-if="props.item.sponsor"
                    class="title accent--text" 
                  >Sponsor Details</p>
                  <v-layout 
                    v-if="props.item.sponsor"
                    row 
                    wrap>
                    <v-flex 
                      xs12
                      px-2>
                      <v-avatar>

                        <img 
                          :src="props.item.sponsor.photo_url" 
                          :alt="props.item.sponsor.name"
                        >
                      </v-avatar>
                      <span 
                        class="subheading"
                      >{{ props.item.sponsor.name }}</span>
                    </v-flex>
                  </v-layout>
                
                  <p class="title accent--text">Account Details</p>
                  <v-layout 
                    row 
                    wrap
                  >
                    <v-flex 
                      xs6
                      px-1>
                      <v-text-field
                        v-model="props.item.username"
                        label="Username"
                        prepend-icon="fa-at"
                        light
                        readonly
                      />
                    </v-flex>
                    <v-flex 
                      xs6
                      px-1>
                      <v-text-field
                        v-model="props.item.phone"
                        label="Phone"
                        light
                        readonly
                        prepend-icon="phone"
                      />
                    </v-flex>
                    <v-flex 
                      xs6
                      px-1>
                      <v-text-field
                        v-model="props.item.email"
                        label="Email"
                        prepend-icon="fa-envelope"
                        light
                        readonly
                      />
                    </v-flex>
                    <v-flex 
                      xs6
                      px-1
                    >
                      <v-text-field
                        :value="props.item.address_1"
                        label="Address 1"
                        light
                        readonly
                        prepend-icon="looks_one"
                      />
                    </v-flex>
                    <v-flex 
                      xs6
                      px-1
                    >
                      <v-text-field
                        :value="props.item.address_2"
                        label="Address 2"
                        light
                        readonly
                        prepend-icon="looks_two"
                      />
                    </v-flex>
                    <v-flex 
                      xs6
                      px-1
                    >
                      <v-text-field
                        :value="props.item.city"
                        label="City"
                        light
                        readonly
                        prepend-icon="location_city"
                      />
                    </v-flex>
                    <v-flex 
                      xs6
                      px-1
                    >
                      <v-text-field
                        :value="props.item.state"
                        label="State"
                        light
                        readonly
                        prepend-icon="map"
                      />
                    </v-flex>
                    <v-flex 
                      xs6
                      px-1
                    >
                      <v-text-field
                        :value="props.item.zip"
                        label="Zip"
                        light
                        readonly
                        prepend-icon="markunread_mailbox"
                      />
                    </v-flex>
                    <v-flex 
                      xs6
                      px-1
                    >
                      <v-text-field
                        :value="props.item.country"
                        label="Country"
                        light
                        readonly
                        prepend-icon="fa-fa"
                      />
                    </v-flex>
                    <v-flex 
                      xs6
                    >
                      <v-switch
                        v-model="props.item.active"
                        :label="getStatus(props.item.active)"
                        readonly
                      />
                    </v-flex>
                    
                  </v-layout>
                  
                  <v-layout 
                    row 
                    wrap
                  >
                    <p 
                      v-if="props.item.roles" 
                      class="title accent--text"
                    >
                      Account Type
                    </p>
                    <v-flex xs12>
                      <v-combobox
                        :items="roles"
                        v-model="props.item.roles"
                        color="primary"
                        light
                        disabled
                        multiple
                        prepend-icon="fa-tags"
                      >
                        <template 
                          slot="selection" 
                          slot-scope="data"
                        >
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
                    v-if="props.item.permissions" 
                    class="title accent--text"
                  >
                    Permissions
                  </p>
                  <v-layout 
                    row 
                    wrap
                  >
                    <v-flex xs12>
                      <v-combobox
                        :items="permissions"
                        v-model="props.item.permissions"
                        color="brown"
                        light
                        disabled
                        multiple
                        prepend-icon="pan_tool"
                      >
                        <template 
                          slot="selection" 
                          slot-scope="data"
                        >
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
                </v-container>
              </v-card-title>

            </v-card>
            
          </v-container>
        </template>
      </v-data-table>
      <confirm 
        :callback="confirmed(deleteUser)" 
      />
    </v-container>
  </main-layout>
</template>

<script>
import MainLayout from "Layouts/Main.vue";
import Acl from "Mixins/acl";
import validationError from "Mixins/validation-error";
import { Form } from "vform";
import swal from "sweetalert2";
import Confirm from "Components/modal/Confirm.vue";
import confirmation from "Mixins/confirmation";

export default {
  components: {
    MainLayout,
    Confirm
  },
  mixins: [Acl, validationError, confirmation],
  data: () => ({
    contentClass: { grey: true, "lighten-4": true, "accent--text": true },
    dialog: false,
    /* table */
    headers: [
      { text: "Name", value: "name", align: "left", sortable: true },
      { text: "Roles", value: "roles", align: "left", sortable: false },
      { text: "Status", value: "active", align: "left", sortable: true },
      { text: "Actions", value: "", align: "left", sortable: false }
    ],
    filters:[
        { text: "Filter By Name", value: "name"},
      { text: "Filter By Role", value: "role"},
      { text: "Filter By Status", value: "status"},
    ],
    filterBy: {
        text: 'Filter By Name',
        value: 'name'
    },
    orderBy:'ASC',
    orderColor: 'teal',
    items: [],
    selected: [],
    pagination: {
      sortBy: "name"
    },
    current_user: {},
    usersForm: new Form({}),
    toggleForm: new Form({
      user_id: null
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
    domain: window.location.hostname,
    dropdown_font: [
      { text: "Arial" },
      { text: "Calibri" },
      { text: "Courier" },
      { text: "Verdana" }
    ],
    dropdown_edit: [
      { text: "Name" },
      { text: "Roles" },
      { text: "Status" },
    ],
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
  computed: {
    sortIcon() {
        if(this.orderBy === 'ASC'){
            return 'fa-sort-amount-asc'
        }
        return 'fa-sort-amount-desc'
    },
  },
  methods: {
      toggleOrderBy(){
          if(this.orderBy === 'ASC'){
              this.orderBy = 'DESC'
              this.orderColor = 'orange'
          }else{
              this.orderBy = 'ASC'
              this.orderColor = 'teal'
          }
      },
    editUser(user) {
      vm.$router.push({ name: "edit-user", params: { id: `${user.id}` } });
    },
    toggleStatus(user) {
      let self = this;
      self.toggleForm.user_id = user.id;
      let index = _.findIndex(self.items, { id: user.id });
      axios
        .post(route("api.user.toggleStatus"), self.toggleForm)
        .then(response => {
          let toggleModal = swal.mixin({
            confirmButtonClass: "v-btn blue-grey  subheading white--text",
            buttonsStyling: false
          });
          toggleModal({
            title: "Success!",
            html: '<p class="title">User Status Updated!</p>',
            type: "success",
            confirmButtonText: "Back"
          });
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
          user.active = true;
          self.items.splice(index, 1, user);
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
        self.usersForm.busy = false;
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
    },
    changeSort(column) {
      if (this.pagination.sortBy === column) {
        this.pagination.descending = !this.pagination.descending;
      } else {
        this.pagination.sortBy = column;
        this.pagination.descending = false;
      }
    }
  }
};
</script>
<style scoped>
.compress--icon {
  margin-left: -5px;
  margin-right: -5px;
}
</style>