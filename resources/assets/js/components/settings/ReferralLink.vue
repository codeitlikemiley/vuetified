<template>
  <v-tabs-content
    id="referral-link"
  >
    <v-card flat>
      <v-container style="height:75vh;">
        <v-layout 
          row 
          wrap
        >
          <v-flex 
            xs12
            md8 
            offset-md2
            text-xs-center
          >
            <v-alert 
              :value="true" 
              type="info"
              outline
              icon="fa-info-circle"
            >
              <v-btn 
                flat 
                color="info" 
                :href="href"
              >
                Referral Link: {{ href }}
              </v-btn>
            </v-alert>
          </v-flex>
          <v-flex 
            xs12 
            md8 
            offset-md2
          >
            <v-text-field
              label="Referral Link"
              v-model="link"
              prepend-icon="fa-link"
              light
              v-validate="{ required: true, regex: /^[a-zA-Z0-9][a-zA-Z0-9.-]+[a-zA-Z0-9]$/ }"
              :error-messages="errors.collect('referral link')"
              data-vv-name="referral link"
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
              @click="updateLink()"
            >
              Update Referral Link <v-icon right>fa-send</v-icon>
            </v-btn>
          </v-flex>
        </v-layout>
      </v-container>
      
    </v-card>
  </v-tabs-content>
</template>

<script>
import VLink from '../VLink.vue'
import { createNamespacedHelpers } from 'vuex'
const { mapGetters, mapMutations } = createNamespacedHelpers('auth')

export default {
    components: {
        VLink
    },
    data: () => ({
        linkForm: new AppForm(App.forms.linkForm),
        link: null
    }),
    computed: {
        ...mapGetters({
            getMe: 'getMe'
        }),
        href () {
            return `http://${this.link}.${window.location.hostname}`
        }
    },
    mounted () {
        let self = this
        self.link = self.getMe.referral_link.link
        self.link_id = self.getMe.referral_link.id
        self.user_id = self.getMe.id
    },
    methods: {
        ...mapMutations({
            setMe: 'setMe'
        }),
        prepareLinkForm () {
            let self = this
            self.linkForm.link = self.link
            self.linkForm.link_id = self.link_id
            self.linkForm.user_id = self.user_id
        },
        resetLinkForm () {
            this.linkForm = new AppForm(App.forms.linkForm)
        },
        async updateLink () {
            let self = this
            self.linkForm.busy = true
            self.prepareLinkForm()
            try {
                const payload = (await App.post(route('api.user.updateReferralLink'), self.linkForm))
                self.resetLinkForm()
                self.setMe(payload.data)
                /* logout ->redirect to main link /login */

            } catch ({errors, message}) {
                self.linkForm.errors.set(errors)
                self.linkForm.busy = false
            }
        }
    }
}
</script>

<style>

</style>
