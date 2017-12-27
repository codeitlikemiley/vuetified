<template>
  <main-layout>
    <v-container fluid>
      <!-- User Main Detail -->
      <v-card 
        light 
        flat
      >
        <v-card-title>
          <v-text-field
            append-icon="search"
            label="Search Users"
            single-line
            hide-details
            v-model="search"
            light
          />
        </v-card-title>
      </v-card>
      <v-data-table
        v-model="selected"
        :headers="headers"
        :items="items"
        :search="search"
        select-all
        light
        item-key="id"
        :pagination.sync="pagination"
        expand
      >
        <template
          slot="headers" 
          slot-scope="props"
        >
          <tr>
            <th>
              <v-checkbox
                light
                primary
                hide-details
                @click.native="toggleAll"
                :input-value="props.all"
                :indeterminate="props.indeterminate"
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
            <th text-xs-right>
              <span 
                v-if="selected.length < 1"
                :class="$vuetify.breakpoint.width >= 600 && 'title'"
              >
                Actions
              </span>
              <v-btn
                v-else 
                flat 
                icon 
                color="error" 
                @click.native="deleteSelected()"
              >
                <v-icon>fa-trash</v-icon>
              </v-btn>
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
                @click="props.selected = !props.selected"
                :input-value="props.selected"
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
                flat 
                color="cyan"
                v-if="activeLink(props.item.referral_link.active)"
                :href="`http://${ props.item.referral_link.link }.${ domain }`"
                target="_blank"
              >
                <v-icon left>fa-link</v-icon>
                <span>{{ props.item.referral_link.link }}</span>
              </v-btn>

            </td>
            <td class="title text-xs-left accent--text">
              <v-chip
                dark
                v-for="(role,key) in props.item.roles" 
                :key="key"
              >
                <v-avatar
                  :class="{
                    'error': (role === 'admin'),
                    'white--text': true,
                    accent: (role === 'customer'),
                    brown: (role === 'merchant'),
                    'blue-grey': (role === 'reseller')
                  }"
                >
                  <span class="headline">{{ role.charAt(0).toUpperCase() }}</span>
                </v-avatar>
                {{ role }}
              </v-chip>
            </td>
            <td class="title text-xs-center">
              <v-btn 
                light 
                flat 
                icon 
                :class="{'amber--text': props.expanded, 'amber': props.expanded, 'teal': !props.expanded, 'teal--text': !props.expanded }" 
                @click="props.expanded = !props.expanded"
              >
                <v-icon v-if="!props.expanded">fa-expand</v-icon>
                <v-icon v-if="props.expanded">fa-compress</v-icon>
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
                  flat 
                  @click="activateLink(props.item)" 
                  color="success" 
                  v-if="!props.item.referral_link.active"
                >
                  Activate Link 
                  <v-icon right>done_all</v-icon>
                </v-btn>
                <v-btn 
                  flat 
                  @click="deactivateLink(props.item)" 
                  color="error" 
                  v-if="props.item.referral_link.active"
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
                        label="Username"
                        v-model="props.item.username"
                        prepend-icon="fa-at"
                        light
                        readonly
                      />
                    </v-flex>
                    <v-flex xs12>
                      <v-text-field
                        label="Email"
                        v-model="props.item.email"
                        prepend-icon="fa-envelope"
                        light
                        readonly
                      />
                    </v-flex>
                  </v-layout>
                  <p 
                    class="title accent--text" 
                    v-if="props.item.roles"
                  >
                    Assigned Roles
                  </p>
                  <v-layout 
                    row 
                    wrap
                  >
                    <v-flex xs12>
                      <v-select
                        @input="changeRoles(props.item)"
                        color="blue-grey"
                        :items="roles"
                        light
                        chips
                        tags
                        :disabled="props.item.id === 1"
                        clearable
                        deletable-chips
                        prepend-icon="fa-tags"
                        v-model="props.item.roles"
                      >
                        <template 
                          slot="selection" 
                          slot-scope="data"
                        >
                          <v-chip
                            light
                            close
                            @input="removeRole(data.item,props.item.roles)"
                            :selected="data.selected"
                          >
                            <v-avatar
                              class="blue-grey white--text"
                            >
                              <span class="headline">{{ data.item.charAt(0).toUpperCase() }}</span>
                            </v-avatar>
                            {{ data.item }}
                          </v-chip>
                        </template>
                      </v-select>
                    </v-flex>
                  </v-layout>
                  <p 
                    class="title accent--text" 
                    v-if="props.item.permissions"
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
                      <v-select
                        color="brown"
                        :items="permissions"
                        light
                        disabled
                        tags
                        prepend-icon="fa-tags"
                        v-model="props.item.permissions"
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
                            light
                            :selected="data.selected"
                          >
                            <v-avatar
                              class="primary white--text"
                            >
                              <span class="headline">{{ data.item.charAt(0).toUpperCase() }}</span>
                            </v-avatar>
                            {{ data.item }}
                          </v-chip>
                        </template>
                      </v-select>
                    </v-flex>
                  </v-layout>
                  <p 
                    class="title accent--text" 
                    v-if="props.item.profile"
                  >
                    Profile Details
                  </p>
                  <v-layout 
                    row 
                    wrap
                  >
                    <v-flex 
                      xs12 
                      v-for="(profile,key) in props.item.profile"
                      :key="key"
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
import MainLayout from 'Layouts/Main.vue'
import Acl from '../mixins/acl'

export default {
    components: {
        MainLayout
    },
    mixins: [Acl],
    data: () => ({
        contentClass: { 'grey': true, 'lighten-4': true, 'accent--text': true },
        dialog: false,
        /* table */
        headers: [
            { text: 'ID', value: 'id', align: 'left', sortable: true },
            { text: 'Name', value: 'name', align: 'left', sortable: true },
            { text: 'Sponsor', value: 'sponsor.name', align: 'left', sortable: true },
            { text: 'Referrak Link', value: 'referral_link.link', align: 'left', sortable: true },
            { text: 'Roles', value: 'roles', align: 'left', sortable: false }
        ],
        items: [],
        selected: [],
        pagination: {
            sortBy: 'name'
        },
        current_user: {},
        usersForm: new AppForm(App.forms.usersForm),
        toggleForm: new AppForm(App.forms.toggleForm),
        search: '',
        roles: [],
        permissions: [],
        rolesForm: new AppForm(App.forms.rolesForm),
        permissionsForm: new AppForm(App.forms.permissionsForm),
        domain: window.location.hostname
    }),
    watch: {
        items: {
            handler: function (newValue) {

            },
            deep: true
        },
        roles (newValue) {

        },
        permissions (newValue) {

        }
    },
    mounted () {
        let self = this
        self.fetchRoles()
        self.fetchPermissions()
        self.fetchUsers()
    },
    methods: {
        activeLink (link) {
            return !!link
        },
        async activateLink (user) {
            try {
                let payload = (await axios.get(route('api.user.link.activate', {id: user.id})))
                user.referral_link.active = true
            } catch ({message}) {
                if (message) {
                }
            }
        },
        async deactivateLink (user) {
            try {
                let payload = (await axios.get(route('api.user.link.deactivate', {id: user.id})))
                user.referral_link.active = false
            } catch ({message}) {
                if (message) {
                }
            }
        },
        async fetchRoles () {
            let self = this
            try {
                const payload = (await axios.get(route('api.roles.index')))
                self.roles = payload.data
            } catch ({errors, message}) {
                if (errors) {
                    console.log('fetchRoles:errors', errors)
                }
                if (message) {
                    console.log('fetchRoles:error-message', message)
                }
            }
        },
        async fetchPermissions () {
            let self = this
            try {
                const payload = (await axios.get(route('api.permissions.index')))
                self.permissions = payload.data
            } catch ({errors, message}) {
                if (errors) {
                    console.log('fetchRoles:errors', errors)
                }
                if (message) {
                    console.log('fetchRoles:error-message', message)
                }
            }
        },
        async fetchUsers () {
            let self = this
            self.usersForm.busy = true
            try {
                const payload = (await App.post(route('api.user.index'), self.usersForm))
                self.items = payload.data
                self.usersForm = new AppForm(App.forms.usersForm)
            } catch ({errors, message}) {
                if (errors) {
                    self.usersForm.errors.set(errors)
                }
                if (message) {
                }
                self.usersForm.busy = false
            }
        },
        deleteUser (user) {
            let self = this
            /* delete item */
            // you cant delete an admin account
            // but we can only downgrade it to other role
            // except if your email is = admin@
            let index = _.findIndex(self.items, { id: user.id })
            self.$delete(self.items, index)
        },
        toProperCase (key) {
            let newStr = key.replace(/_/g, ' ')
            return newStr.replace(/\w\S*/g, function (txt) { return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase() })
        },
        async changeRoles (item) {
            let self = this
            self.rolesForm.roles = item.roles
            try {
                self.rolesForm.busy = true
                const payload = (await App.post(route('api.user.roles.sync', {id: item.id}), self.rolesForm))
                item.permissions = payload.data.permissions
                self.rolesForm.busy = false
                self.rolesForm = new AppForm(App.forms.rolesForm)
            } catch ({message}) {
                if (message) {
                }
                self.rolesForm.busy = false
            }
        },
        removeRole (role, roles) {
            roles.splice(roles.indexOf(role), 1)
            roles = [...roles]
        },
        async changePermissions (item) {
            /* make ajax call to update permissions to this user */
            let self = this
            self.permissionsForm.permissions = item.permissions
            try {
                self.permissionsForm.busy = true
                const payload = (await App.post(route('api.user.permissions.sync', {id: item.id}), self.permissionsForm))
                self.permissionsForm.busy = false
                self.permissionsForm = new AppForm(App.forms.permissionsForm)
            } catch ({message}) {
                if (message) {
                }
                self.permissionsForm.busy = false
            }
        },
        removePermission (permission, permissions) {
            permissions.splice(permissions.indexOf(permission), 1)
            permissions = [...permissions]
        },
        deleteAll () {
            this.items = []
            this.selected = []
        },
        deleteSelected () {
            let self = this
            let newItems = _.difference(self.items, self.selected)
            self.items = newItems
            self.selected = []
            //! Send Api Call To Delete The Social Account
        },
        toggleAll () {
            if (this.selected.length) this.selected = []
            else this.selected = this.items.slice()
        }

    }
}
</script>
