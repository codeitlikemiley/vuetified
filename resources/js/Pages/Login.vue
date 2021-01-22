<template>
  <modal-layout class="white" title="Login">
    <template v-slot:toolbar>
      <v-toolbar flat width="100%" class="accent">
        <v-btn text icon color="white" @click="back()">
          <v-icon>arrow_back</v-icon>
        </v-btn>
        <v-spacer />
        <v-toolbar-title class="text-xs-center white--text">Login Page</v-toolbar-title>
        <v-spacer />
      </v-toolbar>
    </template>

    <v-container fill-height>
      <v-row justify="center" align="center">
        <v-col justify="center" align="center" cols="12" xl="4" lg="4" md="8" xs="10" sm="10">
          <form @submit.prevent="login()">
            <v-text-field
              v-model="form.email"
              v-validate="'required|email'"
              :error-messages="errorMessages('email')"
              :class="{ 'error--text': hasErrors('email') }"
              class="primary--text"
              name="username"
              label="Type Your Account Email"
              data-vv-name="email"
              prepend-icon="email"
              counter="255"
            />

            <v-text-field
              v-model="form.password"
              v-validate="'required|min:8'"
              :append-icon="icon"
              :type="!password_visible ? 'password' : 'text'"
              :error-messages="errorMessages('password')"
              :class="{ 'error--text': hasErrors('password') }"
              class="primary--text"
              name="password"
              label="Enter your password"
              hint="At least 8 characters"
              data-vv-name="password"
              counter="255"
              prepend-icon="fa-key"
              @click:append="() => (password_visible = !password_visible)"
            />

            <v-btn :loading="form.busy" :disabled="errors.any()" block type="submit" color="accent">
              Log In
              <v-icon right colo="primary">fa-sign-in</v-icon>
            </v-btn>
          </form>
        </v-col>
      </v-row>
    </v-container>
  </modal-layout>
</template>

<script>
import Form from "vform";
import ModalLayout from "../layouts/ModalLayout";
import validationError from "../mixins/validation-error";
export default {
  components: {
    ModalLayout
  },
  mixins: [validationError],
  data: () => ({
    form: new Form({
      username: "",
      email: "",
      password: "",
      remember: null
    }),
    password_visible: false,
    drawer: null
  }),
  computed: {
    icon() {
      return this.password_visible ? "visibility" : "visibility_off";
    }
  },
  methods: {
    login() {
      let self = this;
      self.$validator.validateAll();
      if (!self.errors.any()) {
        self.$inertia.post(self.route("login.attempt"), self.form);
      }
    },
    back() {
      this.$inertia.visit("/");
    }
  }
};
</script>

<style lang="scss">
</style>
