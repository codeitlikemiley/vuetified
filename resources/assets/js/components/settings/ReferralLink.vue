<template>
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
              :href="href" 
              flat 
              color="info"
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
            v-validate="{ required: true, regex: /^[a-zA-Z0-9][a-zA-Z0-9.-]+[a-zA-Z0-9]$/ }"
            v-model="form.link"
            :error-messages="errorMessages('link')"
            :class="{ 'error--text': hasErrors('link') }"
            label="Referral Link"
            prepend-icon="fa-link"
            light
            data-vv-name="link"
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
</template>

<script>
import validationError from "Mixins/validation-error";
import { Form } from "vform";
import swal from "sweetalert2";
import VLink from "../VLink.vue";
import { createNamespacedHelpers } from "vuex";
const { mapGetters, mapMutations } = createNamespacedHelpers("auth");

export default {
  components: {
    VLink
  },
  mixins: [validationError],
  data: () => ({
    form: new Form({
      link: "",
      link_id: "",
      user_id: ""
    })
  }),
  computed: {
    ...mapGetters({
      getMe: "getMe"
    }),
    href() {
      return `http://${this.form.link}.${window.location.hostname}`;
    }
  },
  mounted() {
    let self = this;
    self.form.link = self.getMe.referral_link.link;
    self.form.link_id = self.getMe.referral_link.id;
    self.form.user_id = self.getMe.id;
  },
  methods: {
    ...mapMutations({
      setMe: "setMe"
    }),
    updateLink() {
      let self = this;
      self.form.busy = true;
      self.$validator.validateAll();
      if (!self.errors.any()) {
        self.form
        .post(route("api.user.updateReferralLink"))
        .then(response => {
          self.setMe(response.data.data);
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
      Modal({
        title: "Success!",
        html: '<p class="title">' + message + "</p>",
        type: "success",
        confirmButtonText: "Ok"
      });
    }
  }
};
</script>

<style>
</style>
