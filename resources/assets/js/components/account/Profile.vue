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
        text-xs-center
      >
        <v-alert 
          :value="true" 
          type="info"
          outline
          icon="fa-info-circle"
        >
          Note: This Will be Used as Default for Billing Details
        </v-alert>
      </v-flex>
      <v-flex 
        xs12 
        md8 
        offset-md2
      >
        <v-text-field
          v-validate="{ required: false }"
          v-model="form.contact_no"
          :error-messages="errorMessages('contact_no')"
          :class="{ 'error--text': hasErrors('contact_no') }"
          label="Contact No."
          prepend-icon="phone"
          data-vv-name="contact_no"
        />
      </v-flex>
      <v-flex 
        xs12 
        md8 
        offset-md2
      >
        <v-text-field
          v-validate="{ required: false }"
          v-model="form.address_1"
          :error-messages="errorMessages('address_1')"
          :class="{ 'error--text': hasErrors('address_1') }"
          label="Address 1"
          prepend-icon="looks_one"
          data-vv-name="address_1"
        />
      </v-flex>
      <v-flex 
        xs12 
        md8 
        offset-md2
      >
        <v-text-field
          v-validate="{ required: false }"
          v-model="form.address_2"
          :error-messages="errorMessages('address_2')"
          :class="{ 'error--text': hasErrors('address_2') }"
          label="Address 2"
          prepend-icon="looks_two"
          data-vv-name="address_2"
        />
      </v-flex>
      <v-flex 
        xs12 
        md8 
        offset-md2
      >
        <v-text-field
          v-validate="{ required: false }"
          v-model="form.city"
          :error-messages="errorMessages('city')"
          :class="{ 'error--text': hasErrors('city') }"
          label="City"
          prepend-icon="location_city"
          data-vv-name="city"
        />
      </v-flex>
      <v-flex 
        xs12 
        md8 
        offset-md2
      >
        <v-text-field
          v-validate="{ required: false }"
          v-model="form.state"
          :error-messages="errorMessages('state')"
          :class="{ 'error--text': hasErrors('state') }"
          label="State/Province"
          prepend-icon="terrain"
          data-vv-name="state"
        />
      </v-flex>
      <v-flex 
        xs12 
        md8 
        offset-md2
      >
        <v-text-field
          v-validate="{ required: false }"
          v-model="form.zip"
          :error-messages="errorMessages('zip')"
          :class="{ 'error--text': hasErrors('zip') }"
          label="Zip Code"
          prepend-icon="markunread_mailbox"
          data-vv-name="zip"
        />
      </v-flex>
      <v-flex 
        xs12 
        md8 
        offset-md2
      >
        <v-text-field
          v-validate="{ required: false }"
          v-model="form.country"
          :error-messages="errorMessages('country')"
          :class="{ 'error--text': hasErrors('country') }"
          label="Country"
          prepend-icon="flag"
          data-vv-name="country"
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
          @click="updateProfile()"
        >
          Update Profile <v-icon right>fa-send</v-icon>
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
      first_name: null,
      last_name: null,
      contact_no: null,
      address_1: null,
      address_2: null,
      city: null,
      country: null,
      zip_code: null,
      state_province: null
    })
  }),
  computed: {
    ...mapGetters({
      getMe: "getMe"
    })
  },
  mounted() {
    let self = this;
    self.form.name = self.getMe.name;
    self.form.contact_no = self.getMe.profile.contact_no;
    self.form.address_1 = self.getMe.profile.address_1;
    self.form.address_2 = self.getMe.profile.address_2;
    self.form.city = self.getMe.profile.city;
    self.form.country = self.getMe.profile.country;
    self.form.zip = self.getMe.profile.zip;
    self.form.state = self.getMe.profile.state;
  },
  methods: {
    ...mapMutations({
      setMe: "setMe"
    }),
    updateProfile() {
      let self = this;
      self.form.busy = true;
      self.$validator.validateAll();
      if (!self.errors.any()) {
        self.form
        .post(route("api.user.updateProfile"))
        .then(response => {
          self.setMe(response.data.data);
          self.showModal(response.data.message);
        })
        .catch(response => {
          self.form.busy = false;
        });
      }
    },
    toProperCase(key) {
      let newStr = key.replace(/_/g, " ");
      return newStr.replace(/\w\S*/g, function(txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
      });
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
