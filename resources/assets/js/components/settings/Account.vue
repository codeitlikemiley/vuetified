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
          v-validate="{ required: true, regex: /^[a-zA-Z0-9][a-zA-Z0-9.-]+[a-zA-Z0-9]$/ }"
          v-model="username"
          :error-messages="errors.collect('username')"
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
          v-validate="{ required: true, email: true }"
          v-model="email"
          :error-messages="errors.collect('email')"
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
          v-validate="{ required: true, regex: /^[a-zA-Z0-9 ]+$/ }"
          v-model="name"
          :error-messages="errors.collect('name')"
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
          v-validate="{ min: 6,regex: /^([a-zA-Z0-9@*#]{6,15})$/ }"
          v-model="old_password"
          :append-icon="icon"
          :type="!password_visible ? 'password' : 'text'"
          :error-messages="errors.collect('current password')"
          label="Current Password"
          prepend-icon="fa-hashtag"
          data-vv-name="current password"
          @click:append="() => (password_visible = !password_visible)"
        />
      </v-flex>
      <v-flex 
        xs12 
        md8 
        offset-md2
      >
        <v-text-field
          v-validate="{ min: 6,regex: /^([a-zA-Z0-9@*#]{6,15})$/ }"
          v-model="password"
          :append-icon="icon"
          :type="!password_visible ? 'password' : 'text'"
          :error-messages="errors.collect('new password')"
          label="New Password"
          name="password"
          prepend-icon="fiber_new"
          data-vv-name="new password"
          @click:append="() => (password_visible = !password_visible)"
        />
      </v-flex>
      <v-flex 
        xs12 
        md8 
        offset-md2
      >
        <v-text-field
          v-validate="'confirmed:password'"
          :append-icon="icon"
          :type="!password_visible ? 'password' : 'text'"
          v-model="password_confirmation"
          :error-messages="errors.collect('confirm new password')"
          label="Confirm New Password"
          prepend-icon="done_all"
          data-vv-name="confirm new password"
          @click:append="() => (password_visible = !password_visible)"
        />
      </v-flex>
      <v-flex 
        xs12 
        md8 
        offset-md2
      >
        <v-btn 
          block 
          color="accent" 
          dark
          @click="updateAccount()"
        >
          Update Account <v-icon right>fa-send</v-icon>
        </v-btn>
      </v-flex>
    </v-layout>
  </v-card>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapGetters, mapMutations } = createNamespacedHelpers("auth");

export default {
  data: () => ({
    accountForm: new AppForm(App.forms.accountForm),
    name: null,
    email: null,
    username: null,
    old_password: null,
    password: null,
    password_confirmation: null,
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
    self.name = self.getMe.name;
    self.email = self.getMe.email;
    self.username = self.getMe.username;
  },
  methods: {
    ...mapMutations({
      setMe: "setMe"
    }),
    prepareAccountForm() {
      let self = this;
      self.accountForm.name = self.name;
      self.accountForm.username = self.username;
      self.accountForm.email = self.email;
      self.accountForm.old_password = self.old_password;
      self.accountForm.password = self.password;
      self.accountForm.password_confirmation = self.password_confirmation;
      if (self.old_password === null) {
        delete self.accountForm.old_password;
        delete self.accountForm.password;
        delete self.accountForm.password_confirmation;
      }
    },
    resetAccountForm() {
      let self = this;
      self.accountForm = new AppForm(App.forms.accountForm);
    },
    async updateAccount() {
      let self = this;
      self.accountForm.busy = true;
      self.prepareAccountForm();
      try {
        const payload = await App.post(
          route("api.user.updateAccount"),
          self.accountForm
        );
        self.resetAccountForm();
        self.setMe(payload.data);
        self.old_password = null;
        self.password = null;
        self.password_confirmation = null;
      } catch ({ errors, message }) {
        self.accountForm.errors.set(errors);
        self.accountForm.busy = false;
        /* for wrong password */
        if (errors.old_password[0]) {
        } else {
        }
      }
    }
  }
};
</script>
