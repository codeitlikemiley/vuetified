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
        <v-toolbar-title class="text-xs-center white--text">Customer Support Page</v-toolbar-title>
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
      <v-card-text>
        <v-container fluid>
          <v-layout 
            row 
            wrap
          >
            <!-- left side -->
            <v-flex 
              d-flex 
              xs12 
              sm12 
              md6 
              lg6
            >
              <v-layout 
                row 
                wrap
              >
                <v-flex 
                  d-flex 
                  xs12 
                  text-xs-center
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
                        <form @submit.prevent="submit">
                          <p class="headline accent--text">Ask Questions</p>
                          <v-text-field
                            light
                            name="name"
                            label="Full Name"
                            v-model="name"
                            :error-messages="errors.collect('name')"
                            v-validate="'required'"
                            data-vv-name="name"
                          />
                          <v-text-field
                            light
                            name="email"
                            label="Email"
                            v-model="email"
                            :error-messages="errors.collect('email')"
                            v-validate="'required|email'"
                            data-vv-name="email"
                          />
                          <v-text-field
                            light
                            name="subject"
                            label="Subject"
                            v-model="subject"
                            :error-messages="errors.collect('subject')"
                            v-validate="'required'"
                            data-vv-name="subject"
                          />
                          <v-text-field
                            light
                            name="message"
                            label="Message"
                            v-model="message"
                            :error-messages="errors.collect('message')"
                            v-validate="'required'"
                            data-vv-name="message"
                            multi-line
                          />
                          <v-btn 
                            block 
                            :loading="contactForm.busy" 
                            :disabled="errors.any()" 
                            type="submit" 
                            color="primary"
                          >
                            Sign In 
                            <v-icon right>fa-sign-in</v-icon>
                          </v-btn>
                        </form>
                      </v-flex>
                    </v-layout>
                  </v-container>
                </v-flex>
              </v-layout>
            </v-flex>
            <v-flex 
              d-flex 
              xs12 
              sm12 
              md6 
              lg6
            >
              <v-layout 
                row 
                wrap
              >
                <v-flex 
                  d-flex 
                  xs12
                >
                  <v-card 
                    flat 
                    light 
                  >
                    <v-card-title class="headline accent--text">Contact Details</v-card-title>
                    <v-card-text class="headline accent--text">
                      <v-icon color="red">place</v-icon> 1120 5TH Street
                    </v-card-text>
                    <v-card-text class="headline accent--text">
                      <v-icon color="indigo">location_city</v-icon> Alexandria
                    </v-card-text>
                    <v-card-text class="headline accent--text">
                      <v-icon color="info">map</v-icon> Louisiana 71301
                    </v-card-text>
                    <v-card-text class="headline accent--text">
                      <v-icon color="light-blue">fa-fa</v-icon> United States
                    </v-card-text>
                    <v-card-text class="headline accent--text">
                      <v-icon color="brown">phone</v-icon>+1 (318) 290-3674
                    </v-card-text>
                    <v-card-text class="headline accent--text">
                      <v-icon color="yellow darken-2">mail</v-icon><span v-text="site.email"/>
                    </v-card-text>
                  </v-card>
                </v-flex>
              </v-layout>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card-text>
    </v-card>
  </modal-layout>
</template>

<script>
import ModalLayout from 'Layouts/ModalLayout.vue'

export default {
    components: {
        ModalLayout
    },
    data: () => ({
        contentClass: { 'grey': true, 'lighten-4': true, 'accent--text': true },
        name: '',
        email: '',
        subject: '',
        message: '',
        contactForm: new AppForm(App.forms.contactForm),
        site: {
            email: 'suppor@mail.com'
        }
    }),
    methods: {
        resetForm () {
            this.contactForm = new AppForm(App.forms.contactForm)
        },
        submit () {
            let self = this
            self.contactForm.name = self.name
            self.contactForm.email = self.email
            self.contactForm.subject = self.subject
            self.contactForm.message = self.message
            self.$validator.validateAll()
            if (!self.errors.any()) {
                axios.post(route('api.@contact'), self.contactForm)
                    .then(() => {
                        self.resetForm()
                        self.$router.push('/')
                    }).catch(() => {
                    })
            }
            
        },
        redirectBack () {
            let self = this
            return self.$nextTick(() => self.$router.go(-1))
        },
        goHome () {
            let self = this
            self.$nextTick(() => self.$router.push({name: 'home'}))
        }
    }
}
</script>


