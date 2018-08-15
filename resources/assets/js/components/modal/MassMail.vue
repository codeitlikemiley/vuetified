<template>
  <v-dialog 
    v-model="dialog" 
    fullscreen 
    hide-overlay 
    transition="dialog-bottom-transition">
    <v-card>
      <v-toolbar 
        dark 
        color="primary">
        <v-btn 
          icon 
          dark 
          @click.native="dialog = false">
          <v-icon>arrow_back</v-icon>
        </v-btn>
        <v-spacer/>
        <v-toolbar-title>Compose Mail</v-toolbar-title>
        <v-spacer/>
        <v-toolbar-items>
          <v-btn 
            dark 
            flat 
            @click="submit">Save</v-btn>
        </v-toolbar-items>
      </v-toolbar>
      <v-list 
        three-line 
        subheader>
        <v-subheader>User Controls</v-subheader>
        <v-list-tile avatar>
          <v-list-tile-content>
            <v-list-tile-title>Content filtering</v-list-tile-title>
            <v-list-tile-sub-title>Set the content filtering level to restrict apps that can be downloaded</v-list-tile-sub-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile avatar>
          <v-list-tile-content>
            <v-list-tile-title>Password</v-list-tile-title>
            <v-list-tile-sub-title>Require password for purchase or use password to restrict purchase</v-list-tile-sub-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
      <v-divider/>
      <v-list 
        three-line 
        subheader>
        <v-subheader>General</v-subheader>
        <v-list-tile avatar>
          <v-list-tile-action>
            <v-checkbox v-model="notifications"/>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Notifications</v-list-tile-title>
            <v-list-tile-sub-title>Notify me about updates to apps or games that I downloaded</v-list-tile-sub-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile avatar>
          <v-list-tile-action>
            <v-checkbox v-model="sound"/>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Sound</v-list-tile-title>
            <v-list-tile-sub-title>Auto-update apps at any time. Data charges may apply</v-list-tile-sub-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile avatar>
          <v-list-tile-action>
            <v-checkbox v-model="widgets"/>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Auto-add widgets</v-list-tile-title>
            <v-list-tile-sub-title>Automatically add home screen widgets</v-list-tile-sub-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
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
      massMailForm: new Form({
        user_ids: [],
        subject: "",
        message: "",
        with_panel: false,
        panel_message: "",
        with_button: false,
        button_url: "/",
        button_color: "blue",
        button_message: "click here",
        signature: "Thanks!"
      })
    };
  },
  mounted() {
    Bus.$on("open-modal-mass-mail", selected => {
      this.dialog = true;
      this.massMailForm.user_ids = _.map(selected, "id");
    });
  },
  methods: {
    submit() {
      Bus.$emit("send-mass-mail", this.massMailForm);
      this.dialog = false;
    }
  }
};
</script>

<style>
</style>
