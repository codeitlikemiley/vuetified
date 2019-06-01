<template>
  <v-card flat>
    <v-layout
      row
      wrap
    >
      <v-flex
        xs12
        md8
        offset-md2
      >
        <v-text-field
          v-model="form.username"
          v-validate="{ required: true, regex: /^[a-zA-Z0-9][a-zA-Z0-9.-]+[a-zA-Z0-9]$/ }"
          :error-messages="errorMessages('username')"
          :class="{ 'error--text': hasErrors('username') }"
          label="Username"
          prepend-icon=" fa-at"
          data-vv-name="username"
        />
      </v-flex>
      <v-flex
        xs12
        md8
        offset-md2
      >
        <v-text-field
          v-model="form.email"
          v-validate="{ required: true, email: true }"
          :error-messages="errorMessages('email')"
          :class="{ 'error--text': hasErrors('email') }"
          label="Email"
          prepend-icon=" mail"
          data-vv-name="email"
        />
      </v-flex>
      <v-flex
        xs12
        md8
        offset-md2
      >
        <v-text-field
          v-model="form.name"
          v-validate="{ required: true, regex: /^[a-zA-Z0-9 ]+$/ }"
          :error-messages="errorMessages('name')"
          :class="{ 'error--text': hasErrors('name') }"
          label="Account Name"
          prepend-icon=" fa-address-card"
          data-vv-name="name"
        />
      </v-flex>
      <v-flex
        xs12
        md8
        offset-md2
      >
        <v-text-field
          v-model="form.old_password"
          v-validate="{ min: 6,regex: /^([a-zA-Z0-9@*#]{6,15})$/ }"
          :append-icon="icon"
          :type="!password_visible ? 'password' : 'text'"
          :error-messages="errorMessages('old_password')"
          :class="{ 'error--text': hasErrors('old_password') }"
          label="Current Password"
          prepend-icon="fa-hashtag"
          data-vv-name="old_password"
          @click:append="() => (password_visible = !password_visible)"
        />
      </v-flex>
      <v-flex
        xs12
        md8
        offset-md2
      >
        <v-text-field
          v-model="form.password"
          v-validate="'required|min:8|confirmed:confirmation'"
          :append-icon="icon"
          :type="!password_visible ? 'password' : 'text'"
          :error-messages="errorMessages('password')"
          :class="{ 'error--text': hasErrors('password') }"
          label="New Password"
          name="password"
          prepend-icon="fiber_new"
          data-vv-name="password"
          @click:append="() => (password_visible = !password_visible)"
        />
      </v-flex>
      <v-flex
        xs12
        md8
        offset-md2
      >
        <v-text-field
          ref="confirmation"
          v-model="form.password_confirmation"
          v-validate="'required|min:8'"
          :append-icon="icon"
          :type="!password_visible ? 'password' : 'text'"
          :error-messages="errorMessages('password_confirmation')"
          :class="{ 'error--text': hasErrors('password_confirmation') }"
          label="Confirm New Password"
          prepend-icon="done_all"
          data-vv-name="password_confirmation"
          @click:append="() => (password_visible = !password_visible)"
        />
      </v-flex>
      <v-flex
        xs12
        md8
        offset-md2
      >
        <v-btn
          :loading="form.busy"
          :disabled="errors.any()"
          :class="{primary: !form.busy, error: form.busy}"
          block
          color="accent"
          dark
          @click="updateAccount()"
        >
          Update Account
          <v-icon right>
            fa-send
          </v-icon>
        </v-btn>
      </v-flex>
    </v-layout>
  </v-card>
</template>

<script>
import validationError from "Mixins/validation-error";
import { Form } from "vform";
import swal from "sweetalert2";
import { createNamespacedHelpers } from "vuex";
const { mapGetters, mapMutations } = createNamespacedHelpers("auth");

export default {
  mixins: [validationError],
  data: () => ({
    form: new Form({
      name: "",
      email: "",
      username: "",
      old_password: "",
      password: "",
      password_confirmation: ""
    }),
    password_visible: false
  }),
  computed: {
    ...mapGetters({
      getMe: "getMe"
    }),
    icon() {
      return this.password_visible ? "visibility" : "visibility_off";
    }
  },
  mounted() {
    let self = this;
    self.form.name = self.getMe.name;
    self.form.email = self.getMe.email;
    self.form.username = self.getMe.username;
  },
  methods: {
    ...mapMutations({
      setMe: "setMe"
    }),
    prepareForm() {
      let self = this;

      if (self.form.old_password == "") {
        delete self.form.old_password;
        delete self.form.password;
        delete self.form.password_confirmation;
      }
    },
    updateAccount() {
      let self = this;
      self.form.busy = true;
      self.$validator.validateAll();
      if (!self.errors.any()) {
        self.prepareForm();
        self.form
          .post(route("api.user.updateAccount"))
          .then(response => {
            console.log(response.data.data);
            self.setMe(response.data.data);
            self.form.old_password = null;
            self.form.password = null;
            self.form.password_confirmation = null;
            self.form.clear();
            self.errors.clear();
            self.showModal(response.data.message);
          })
          .catch(response => {
            self.form.busy = false;
          });
      }
    },
    showModal(message) {
      const Modal = swal.mixin({
        confirmButtonClass: "v-btn success  subheading white--text",
        buttonsStyling: false
      });
      Modal.fire({
        title: "Success!",
        html: '<p class="title">' + message + "</p>",
        type: "success",
        confirmButtonText: "Ok"
      });
    }
  }
};
</script>
