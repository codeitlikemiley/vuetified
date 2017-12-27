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
        <v-spacer/>
        <v-toolbar-title class="text-xs-center white--text">Registration Page</v-toolbar-title>
        <v-spacer/>
        <v-toolbar-items>
          <!-- If There is no User Account Login Yet Redirect to Authentication Page -->
          <v-btn 
            flat 
            color="white" 
            @click.native="goHome()"
          >
            <v-icon>fa-home</v-icon>
          </v-btn>
        </v-toolbar-items>
      </v-toolbar>
      <v-card-text style="padding-top:100px;">
        <v-container fluid>
          <form @submit.prevent="register()">
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
                  class="primary--text"
                  name="name"
                  label="Full Name"
                  v-model="registerForm.name"
                  v-validate="'required|max:255'"
                  data-vv-name="name"
                  :error-messages="errors.collect('name')"
                  counter="255"
                  prepend-icon="fa-user"
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
                  class="primary--text"
                  name="email"
                  label="Email"
                  v-model="registerForm.username"
                  v-validate="'required|email'"
                  data-vv-name="email"
                  :error-messages="errors.collect('email')"
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
                  class="primary--text"
                  name="password"
                  label="Password"
                  v-model="registerForm.password"
                  :append-icon="icon"
                  :append-icon-cb="() => (password_visible = !password_visible)"
                  :type="!password_visible ? 'password' : 'text'"
                  v-validate="'required|min:6|confirmed:password_confirmation'"
                  data-vv-name="password"
                  :error-messages="errors.collect('password')"
                  prepend-icon="fa-key"
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
                  class="primary--text"
                  name="password_confirmation"
                  label="Confirm Password"
                  v-model="registerForm.password_confirmation"
                  :append-icon="icon"
                  :append-icon-cb="() => (password_visible = !password_visible)"
                  :type="!password_visible ? 'password' : 'text'"
                  prepend-icon="fa-copy"
                  counter="255"
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
                :loading="registerForm.busy" 
                :disabled="errors.any()" 
                type="submit" 
                block 
                :class="{primary: !registerForm.busy, error: registerForm.busy}"
              >
                Register
              </v-btn>
              <v-btn 
                @click.native="goToLogin()" 
                block 
                flat 
                class="white--text" 
                color="teal lighten-2"
              >
                Already Have An Account? Go Login
              </v-btn>
            </v-flex>
          </form>
        </v-container>

      </v-card-text>
    </v-card>
  </modal-layout>
</template>

<script>
import ModalLayout from 'Layouts/ModalLayout.vue'
import { createNamespacedHelpers } from 'vuex'
const { mapActions, mapState } = createNamespacedHelpers('auth')

export default {
    data: () => ({
        registerForm: new AppForm(App.forms.registerForm),
        password_visible: false

    }),
    computed: {
        ...mapState({
            isAuthenticated: 'isAuthenticated'
        }),
        icon () {
            return this.password_visible ? 'visibility' : 'visibility_off'
        }
    },
    mounted () {
        let self = this
        /* Make Sure We Only Load Registration Page If Not Authenticated */
        if (self.isAuthenticated) {
            /* nextick make sure our modal would not be visible before redirect */
            return self.$nextTick(() => self.$router.go(-1))
        }
        self.registerForm.role = 'customer'
        self.registerForm.sponsor_id = self.$store.getters['referral/getSponsor']['user_id']
    },
    methods: {
        ...mapActions({
            submit: 'register'
        }),
        goHome () {
            let self = this
            self.$nextTick(() => self.$router.push({name: 'home'}))
        },
        goToLogin () {
            let self = this
            self.$nextTick(() => self.$router.push({name: 'login'}))
        },
        redirectBack () {
            let self = this
            return self.$nextTick(() => self.$router.go(-1))
        },
        register () {
            let self = this
            self.$validator.validateAll()
            if (!self.errors.any()) {
                self.submit(self.registerForm)
            }
        }
    },
    components: {
        ModalLayout
    }
}
</script>
