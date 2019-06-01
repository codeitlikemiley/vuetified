<template>
  <modal-layout class="white">
    <v-card :flat="true">
      <v-toolbar class="primary">
        <v-btn
          flat
          icon
          color="white"
          @click.native="redirectBack()"
        >
          <v-icon>arrow_back</v-icon>
        </v-btn>
        <v-spacer />
        <v-toolbar-title class="text-xs-center white--text">
          User Creation Page
        </v-toolbar-title>
        <v-spacer />
        <v-toolbar-items>
          <!-- If There is no User Account Login Yet Redirect to Authentication Page -->
          <v-btn
            :loading="form.busy"
            :disabled="errors.any() || form.busy"
            flat
            color="white"
            @click.native="submit()"
          >
            Save
            <v-icon right>
              save
            </v-icon>
          </v-btn>
        </v-toolbar-items>
      </v-toolbar>
      <v-layout
        row
        wrap
      >
        <v-flex
          xs8
          md6
          offset-md2
          px-2
        >
          <v-text-field
            v-model="form.name"
            v-validate="'required'"
            :error-messages="errorMessages('name')"
            :class="{ 'error--text': hasErrors('name') }"
            class="primary--text"
            name="name"
            label="Full Name"
            data-vv-name="name"
            counter="255"
            prepend-icon="fa-user"
          />
        </v-flex>
        <v-flex
          class="xs4 md2"
          px-2
        >
          <v-switch
            v-model="form.active"
            :label="getStatus(form.active)"
          />
        </v-flex>
        <v-flex
          xs12
          md4
          offset-md2
          px-2
        >
          <v-text-field
            v-model="form.email"
            v-validate="{ email: true }"
            :error-messages="errorMessages('email')"
            :class="{ 'error--text': hasErrors('email') }"
            label="Email"
            prepend-icon="mail"
            data-vv-name="email"
          />
        </v-flex>
        <v-flex
          xs12
          md4
          px-2
        >
          <v-text-field
            v-model="form.phone"
            label="Phone"
            prepend-icon="phone"
          />
        </v-flex>
        <v-flex class="xs12 offset-md2 md8">
          <v-autocomplete
            v-model="form.roles"
            v-validate="'required'"
            :items="roles"
            :error-messages="errorMessages('roles')"
            :class="{ 'error--text': hasErrors('roles') }"
            required
            color="blue-grey"
            label="Select Account Type"
            light
            chips
            clearable
            deletable-chips
            prepend-icon="fa-tags"
            data-vv-name="roles"
          />
        </v-flex>

        <v-flex
          xs12
          md4
          offset-md2
          px-2
        >
          <v-text-field
            v-model="form.password"
            v-validate="'required|min:8|confirmed:password_confirmation'"
            :append-icon="icon"
            :type="!password_visible ? 'password' : 'text'"
            :error-messages="errorMessages('password')"
            :class="{ 'error--text': hasErrors('password') }"
            class="primary--text"
            name="password"
            label="Password"
            data-vv-name="password"
            prepend-icon="fa-key"
            counter="255"
            @click:append="() => (password_visible = !password_visible)"
          />
        </v-flex>
        <v-flex
          xs12
          md4
          px-2
        >
          <v-text-field
            ref="password_confirmation"
            v-model="form.password_confirmation"
            :append-icon="icon"
            :type="!password_visible ? 'password' : 'text'"
            class="primary--text"
            name="password_confirmation"
            label="Confirm Password"
            prepend-icon="fa-copy"
            counter="255"
            @click:append="() => (password_visible = !password_visible)"
          />
        </v-flex>
        <v-flex
          xs12
          md4
          offset-md2
          px-2
        >
          <v-text-field
            v-model="form.address_1"
            label="Address 1"
            prepend-icon="looks_one"
          />
        </v-flex>
        <v-flex
          xs12
          md4
          px-2
        >
          <v-text-field
            v-model="form.address_2"
            label="Address 2"
            prepend-icon="looks_two"
          />
        </v-flex>
        <v-flex
          xs12
          md4
          offset-md2
          px-2
        >
          <v-text-field
            v-model="form.city"
            label="City"
            prepend-icon="location_city"
          />
        </v-flex>
        <v-flex
          xs12
          md4
          px-2
        >
          <v-text-field
            v-model="form.state_province"
            label="State"
            prepend-icon="map"
          />
        </v-flex>
        <v-flex
          xs12
          md4
          offset-md2
          px-2
        >
          <v-text-field
            v-model="form.zip"
            v-validate="{ regex: /^\d{5}(?:[-\s]\d{4})?$/ }"
            :error-messages="errorMessages('zip')"
            :class="{ 'error--text': hasErrors('zip') }"
            label="Zip"
            prepend-icon="markunread_mailbox"
            data-vv-name="zip"
          />
        </v-flex>
        <v-flex
          xs12
          md4
          px-2
        >
          <v-text-field
            v-model="form.country"
            label="Country"
            prepend-icon="fa-fa"
          />
        </v-flex>
        <v-flex
          xs12
          md8
          offset-md2
        >
          <v-btn
            :loading="form.busy"
            :disabled="errors.any() || form.busy"
            block
            color="accent"
            @click="submit()"
          >
            Save
            <v-icon right>
              save
            </v-icon>
          </v-btn>
        </v-flex>
      </v-layout>
    </v-card>
  </modal-layout>
</template>

<script>
import ModalLayout from "Layouts/ModalLayout.vue";
import validationError from "Mixins/validation-error";
import { Form } from "vform";
import swal from "sweetalert2";
export default {
  components: {
    ModalLayout
  },
  mixins: [validationError],
  data: () => ({
    /* Always Declare Your Form Object */
    form: new Form({
      username: null,
      active: false,
      roles: [],
      password: null,
      password_confirmation: null,
      company_name: null,
      first_name: null,
      last_name: null,
      email: null,
      phone: null,
      address_1: null,
      address_2: null,
      city: null,
      state_province: null,
      zip: null,
      country: null
    }),
    roles: [],
    password_visible: false
  }),
  computed: {
    icon() {
      return this.password_visible ? "visibility" : "visibility_off";
    }
  },
  mounted() {
    let self = this;
    self.fetchRoles();
  },
  methods: {
    getStatus(status) {
      if (status) {
        return "Status: Active";
      } else {
        return "Status: Inactive";
      }
    },
    submit() {
      let self = this;
      this.$validator.validateAll().then(result => {
        if (result) {
          // eslint-disable-next-line
          self.createUser();
        } else {
          const validationModal = swal.mixin({
            confirmButtonClass: "v-btn blue-grey  subheading white--text",
            buttonsStyling: false
          });
          validationModal.fire({
            title: `Validation Error`,
            html: `<p class="title">Please Fix Form Errors</p>`,
            type: "warning",
            confirmButtonText: "Back"
          });
        }
      });
    },
    createUser() {
      let self = this;
      self.form.busy = true;

      self.form
        .post(route("api.user.create"), self.form)
        .then(response => {
          console.log(response.data);
          self.$validator.reset();
          const successModal = swal.mixin({
            confirmButtonClass: "v-btn blue-grey  subheading white--text",
            buttonsStyling: false
          });
          successModal.fire({
            title: "Success!",
            html: `<p class="title">User Has Been Created!</p>`,
            type: "success",
            confirmButtonText: "Ok"
          });
          self.$nextTick(() => self.$router.push({ name: "users" }));
        })
        .catch(errors => {});
    },
    resetForm() {
      let self = this;
      self.form = new Form({
        username: null,
        active: false,
        roles: [],
        password: null,
        password_confirmation: null,
        company_name: null,
        first_name: null,
        last_name: null,
        email: null,
        phone: null,
        address_1: null,
        address_2: null,
        city: null,
        state: null,
        zip: null,
        country: null,
        notes: null
      });
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
    redirectBack() {
      let self = this;
      self.$nextTick(() => self.$router.push({ name: "users" }));
    }
  }
};
</script>
