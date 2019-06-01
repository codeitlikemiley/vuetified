<template>
  <v-dialog
    v-model="dialog"
    fullscreen
    hide-overlay
    transition="dialog-bottom-transition"
  >
    <v-card>
      <v-toolbar
        dark
        color="primary"
      >
        <v-btn
          icon
          dark
          @click.native="dialog = false"
        >
          <v-icon>arrow_back</v-icon>
        </v-btn>
        <v-spacer />
        <v-toolbar-title>Compose Mail</v-toolbar-title>
        <v-spacer />
        <v-toolbar-items>
          <v-btn
            :disabled="errors.any()"
            dark
            flat
            @click="submit"
          >
            Send Mail
            <v-icon right>
              fa-send
            </v-icon>
          </v-btn>
        </v-toolbar-items>
      </v-toolbar>
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
            v-model="form.subject"
            v-validate="{ required: true}"
            :error-messages="errorMessages('subject')"
            :class="{ 'error--text': hasErrors('subject') }"
            label="Subject"
            prepend-icon="subject"
            data-vv-name="subject"
          />
        </v-flex>
        <v-flex
          xs12
          md8
          offset-md2
        >
          <v-switch
            v-model="form.with_panel"
            label="With Panel"
          />
        </v-flex>
        <v-flex
          v-if="form.with_panel"
          xs12
          md8
          offset-md2
        >
          <v-textarea
            v-model="form.panel_message"
            v-validate="{ required: form.with_panel}"
            :error-messages="errorMessages('panel_message')"
            :class="{ 'error--text': hasErrors('panel_message') }"
            outline
            name="panel_message"
            label="Highlighted Message"
            prepend-icon="error"
            data-vv-name="panel_message"
            hint="This is For Important Message You Want To Emphasize or Be Notice Immediately!"
            persistent-hint
          />
        </v-flex>
        <v-flex
          xs12
          md8
          offset-md2
        >
          <v-textarea
            v-model="form.message"
            v-validate="{ required: true}"
            :error-messages="errorMessages('message')"
            :class="{ 'error--text': hasErrors('message') }"
            outline
            name="message"
            label="Message"
            prepend-icon="message"
            data-vv-name="message"
          />
        </v-flex>
        <v-flex
          xs12
          md8
          offset-md2
        >
          <v-switch
            v-model="form.with_button"
            label="With Call To Action"
          />
        </v-flex>
        <v-flex
          v-if="form.with_button"
          xs12
          md8
          offset-md2
        >
          <v-text-field
            v-model="form.button_url"
            v-validate="{ required: form.with_button}"
            :error-messages="errorMessages('button_url')"
            :class="{ 'error--text': hasErrors('button_url') }"
            label="Button URL"
            prepend-icon="link"
            data-vv-name="button_url"
          />
        </v-flex>
        <v-flex
          v-if="form.with_button"
          xs12
          md8
          offset-md2
        >
          <v-select
            v-model="form.button_color"
            v-validate="{ required: form.with_button}"
            :items="colors"
            :error-messages="errorMessages('button_color')"
            :class="{ 'error--text': hasErrors('button_color') }"
            label="Button Color"
            prepend-icon="color_lens"
            data-vv-name="button_color"
          />
        </v-flex>
        <v-flex
          v-if="form.with_button"
          xs12
          md8
          offset-md2
        >
          <v-text-field
            v-model="form.button_message"
            v-validate="{ required: form.with_button}"
            :error-messages="errorMessages('button_message')"
            :class="{ 'error--text': hasErrors('button_message') }"
            label="Button Text"
            prepend-icon="call_to_action"
            data-vv-name="button_message"
          />
        </v-flex>
        <v-flex
          xs12
          md8
          offset-md2
        >
          <v-text-field
            v-model="form.signature"
            v-validate="{ required: true}"
            :error-messages="errorMessages('signature')"
            :class="{ 'error--text': hasErrors('signature') }"
            label="Signature"
            prepend-icon="alternate_email"
            data-vv-name="signature"
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
            @click="submit()"
          >
            Send Mail
            <v-icon right>
              fa-send
            </v-icon>
          </v-btn>
        </v-flex>
      </v-layout>
    </v-card>
  </v-dialog>
</template>

<script>
import validationError from "Mixins/validation-error";
import { Form } from "vform";
import swal from "sweetalert2";

export default {
  mixins: [validationError],
  data() {
    return {
      dialog: false,
      selected: [],
      notifications: false,
      sound: true,
      widgets: false,
      form: new Form({
        user_ids: [],
        subject: "",
        message: "",
        with_panel: false,
        panel_message: "",
        with_button: false,
        button_url: "/",
        button_color: "blue",
        button_message: "CLICK HERE",
        signature: ""
      }),
      colors: ["red", "blue", "green"]
    };
  },
  mounted() {
    Bus.$on("open-modal-mass-mail", selected => {
      this.dialog = true;
      this.form.user_ids = _.map(selected, "id");
    });
    Bus.$on("close-modal-mass-mail", () => {
      this.dialog = false;
    });
  },
  methods: {
    submit() {
      this.$validator.validate().then(result => {
        if (result) {
          Bus.$emit("send-mass-mail", this.form);
        } else {
          let modal = swal.mixin({
            confirmButtonClass: "v-btn blue-grey  subheading white--text",
            buttonsStyling: false
          });
          modal.fire({
            title: "Validation Error!",
            html: '<p class="title">Please Complete Form To Send Mail!</p>',
            type: "error",
            confirmButtonText: "Back"
          });
        }
      });
    }
  }
};
</script>

<style>
</style>
