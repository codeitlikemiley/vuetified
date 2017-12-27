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
        <v-toolbar-title class="text-xs-center white--text">Reset Password</v-toolbar-title>
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
      <v-card-text style="padding-top:200px;">
        <v-container fluid>
          <form @submit.prevent="sendEmail()">
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
                  name="username"
                  label="Type Your Registered Email"
                  v-model="resetForm.username"
                  prepend-icon="email"
                  v-validate="'required|email'"
                  data-vv-name="username"
                  :error-messages="errors.collect('username')"
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
                :disabled="errors.any()" 
                :loading="resetForm.busy" 
                type="submit" 
                block 
                :class="{primary: !resetForm.busy, error: resetForm.busy}"
              >
                Send Password Reset Email
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
const { mapState } = createNamespacedHelpers('auth')

export default {
    components: {
        ModalLayout
    },
    data: () => ({
        resetForm: new AppForm(App.forms.resetForm)
    }),
    computed: {
        ...mapState({
            isAuthenticated: 'isAuthenticated'
        })
    },
    mounted () {
        let self = this
        /* Make Sure We Only Load Forgot Password Page If Not Authenticated */
        if (self.isAuthenticated) {
            /* nextick make sure our modal wount be visible before redirect */
            return self.$nextTick(() => self.$router.go(-1))
        }
    },
    methods: {
        goHome () {
            let self = this
            self.$nextTick(() => self.$router.push({name: 'home'}))
        },
        redirectBack () {
            let self = this
            return self.$nextTick(() => self.$router.go(-1))
        },
        async sendEmail () {
            let self = this
            self.$validator.validateAll()
            if (!self.errors.any()) {
                self.resetForm.busy = true
                await axios.post(route('api.auth.forgotpassword'), self.resetForm).then(() => {
                    self.resetForm.busy = false
                    self.$router.push({ name: 'home' })
                }).catch(() => {
                    self.resetForm.busy = false
                })
            }
        }
    }
   
}
</script>
