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
                            v-validate="'required'"
                            v-model="name"
                            :error-messages="errorMessages('name')"
                            :class="{ 'error--text': hasErrors('name') }"
                            light
                            name="name"
                            label="Full Name"
                            data-vv-name="name"
                          />
                          <v-text-field
                            v-validate="'required|email'"
                            v-model="email"
                            :error-messages="errorMessages('email')"
                            :class="{ 'error--text': hasErrors('email') }"
                            light
                            name="email"
                            label="Email"
                            data-vv-name="email"
                          />
                          <v-text-field
                            v-validate="'required'"
                            v-model="subject"
                            :error-messages="errorMessages('subject')"
                            :class="{ 'error--text': hasErrors('subject') }"
                            light
                            name="subject"
                            label="Subject"
                            data-vv-name="subject"
                          />
                          <v-textarea
                            v-validate="'required'"
                            v-model="message"
                            :error-messages="errorMessages('message')"
                            :class="{ 'error--text': hasErrors('message') }"
                            light
                            name="message"
                            label="Message"
                            data-vv-name="message"
                          />
                          <v-btn 
                            :loading="form.busy" 
                            :disabled="errors.any()" 
                            block 
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
                      <v-icon color="red">place</v-icon> 225 Pineda St. - Unit 127
                    </v-card-text>
                    <v-card-text class="headline accent--text">
                      <v-icon color="indigo">location_city</v-icon> Longwood
                    </v-card-text>
                    <v-card-text class="headline accent--text">
                      <v-icon color="info">map</v-icon> FL 32750
                    </v-card-text>
                    <v-card-text class="headline accent--text">
                      <v-icon color="light-blue">fa-fa</v-icon> United States
                    </v-card-text>
                    <v-card-text class="headline accent--text">
                      <v-icon color="brown">phone</v-icon>(407) 331-1200
                    </v-card-text>
                    <v-card-text class="headline accent--text">
                      <v-icon color="grey">local_printshop</v-icon>(407) 331-0870
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
import ModalLayout from "Layouts/ModalLayout.vue";
import validationError from "Mixins/validation-error";
import { Form } from "vform";

export default {
  components: {
    ModalLayout
  },
  mixins: [validationError],
  data: () => ({
    contentClass: { grey: true, "lighten-4": true, "accent--text": true },
    name: "",
    email: "",
    subject: "",
    message: "",
    form: new Form({
      name: "",
      email: "",
      subject: "",
      message: ""
    }),
    site: {
      email: "support@vuetified.com"
    }
  }),
  methods: {
    resetForm() {
      this.form = new Form({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
    },
    submit() {
      let self = this;
      self.form.name = self.name;
      self.form.email = self.email;
      self.form.subject = self.subject;
      self.form.message = self.message;
      self.$validator.validateAll();
      if (!self.errors.any()) {
        axios
          .post(route("api.@contact"), self.form)
          .then(() => {
            self.resetForm();
            self.$router.push("/");
          })
          .catch(() => {});
      }
    },
    redirectBack() {
      let self = this;
      return self.$nextTick(() => self.$router.go(-1));
    },
    goHome() {
      let self = this;
      self.$nextTick(() => self.$router.push({ name: "home" }));
    }
  }
};
</script>


