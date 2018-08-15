<template>
  <modal-layout 
    class="white"
  >
    <v-card :flat="true">
      <v-toolbar class="primary">
        <v-btn 
          icon 
          @click.native="redirectBack()"
        >
          <v-icon color="white">arrow_back</v-icon>
        </v-btn>
        <v-spacer/>
        <v-toolbar-title class="text-xs-center white--text">Reset Password</v-toolbar-title>
        <v-spacer/>
        <v-toolbar-items>
          <!-- If There is no User Account Login Yet Redirect to Authentication Page -->
          <v-btn 
            class="white--text" 
            flat 
            @click.native="goHome()"
          >
            <v-icon 
              right
              color="white"
            >
              fa-home
            </v-icon>
          </v-btn>
        </v-toolbar-items>
      </v-toolbar>
      <v-card-text style="padding-top:150px;">
        <v-container fluid>
          <form @submit.prevent="resetPassword()">
            <v-layout row>
              <v-flex 
                xs12 
                sm12 
                md4 
                offset-md4 
                lg4 
                offset-lg4 
                xl4 
                offset-xl4
              >
                <v-text-field
                  v-validate="'required|email'"
                  v-model="form.email"
                  :error-messages="errorMessages('email')"
                  :class="{ 'error--text': hasErrors('email') }"
                  class="primary--text"
                  name="email"
                  label="Your Registered Email"
                  data-vv-name="email"
                  prepend-icon="email"
                  counter="255"
                />
              </v-flex>
            </v-layout>
            <v-layout row>
              <v-flex 
                xs12 
                sm12 
                md4 
                offset-md4 
                lg4 
                offset-lg4 
                xl4 
                offset-xl4
              >
                <v-text-field
                  v-validate="'required|min:6|confirmed:confirmation'"
                  v-model="form.password"
                  :append-icon="icon"
                  :type="!password_visible ? 'password' : 'text'"
                  :error-messages="errorMessages('password')"
                  :class="{ 'error--text': hasErrors('password') }"
                  class="primary--text"
                  name="password"
                  label="New Password"
                  data-vv-name="password"
                  prepend-icon="fa-key"
                  counter="255"
                  @click:append="() => (password_visible = !password_visible)"
                />
              </v-flex>
            </v-layout>
            <v-layout row>
              <v-flex 
                xs12 
                sm12 
                md4 
                offset-md4 
                lg4 
                offset-lg4 
                xl4 
                offset-xl4
              >

                <v-text-field
                  ref="confirmation"
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
            </v-layout>
            <v-flex 
              xs12 
              sm12 
              md4 
              offset-md4 
              lg4 
              offset-lg4 
              xl4 
              offset-xl4
            >
              <v-btn 
                :loading="form.busy" 
                :disabled="errors.any()" 
                :class="{primary: !form.busy, error: form.busy}" 
                type="submit" 
                block
              >
                Reset
              </v-btn>
            </v-flex>
          </form>
        </v-container>

      </v-card-text>
    </v-card>
  </modal-layout>
</template>

<script>
import validationError from "Mixins/validation-error";
import { Form } from "vform";
import ModalLayout from "Layouts/ModalLayout.vue";
import { createNamespacedHelpers } from "vuex";
const { mapGetters, mapActions } = createNamespacedHelpers("auth");

export default {
  components: {
    ModalLayout
  },
  mixins: [validationError],
  props: {
    token: {
      type: String,
      required: true
    }
  },
  data: () => ({
    form: new Form({
      email: "",
      password: "",
      password_confirmation: "",
      token: ""
    }),
    password_visible: false
  }),
  computed: {
    icon() {
      return this.password_visible ? "visibility" : "visibility_off";
    },
    ...mapGetters({
      isAuthenticated: "isAuthenticated"
    })
  },
  mounted() {
    let self = this;
    /* Make Sure We Only Load Reset Password Page If Not Authenticated */
    if (self.isAuthenticated) {
      /* nextick make sure our modal wount be visible before redirect */
      return self.$nextTick(() => self.$router.go(-1));
    }
    self.form.token = self.token;
  },
  methods: {
    ...mapActions({
      submit: "passwordreset",
      fetchMe: "fetchMe"
    }),
    goHome() {
      let self = this;
      self.$nextTick(() => self.$router.push({ name: "home" }));
    },
    redirectBack() {
      let self = this;
      return self.$nextTick(() => self.$router.go(-1));
    },
    resetPassword() {
      let self = this;
      self.$validator.validateAll();
      if (!self.errors.any()) {
        self.submit(self.form);
      }
    }
  }
};
</script>
