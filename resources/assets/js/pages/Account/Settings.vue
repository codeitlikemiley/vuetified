<template>
  <main-layout>
    <v-tabs 
      fixed 
      icons 
      centered
    >
      <v-tabs-slider color="primary"/>
      <!-- tabs -->
      <v-tab 
        href="#account" 
        class="accent--text"
      >
        <v-icon 
          color="indigo" 
          large>fa-user</v-icon>
        <span 
          :class="$vuetify.breakpoint.width >= 600 && 'title'"
        >
          Account
        </span>
      </v-tab>
      <v-tab 
        href="#profile" 
        class="accent--text"
      >
        <v-icon 
          color="teal" 
          large>fa-address-card</v-icon>
        <span 
          :class="$vuetify.breakpoint.width >= 600 && 'title'"
        >
          Profile
        </span>
      </v-tab>
      <v-tab 
        href="#referral-link" 
        class="accent--text"
      >
        <v-icon 
          color="cyan" 
          large>link</v-icon>
        <span 
          :class="$vuetify.breakpoint.width >= 600 && 'title'"
        >
          Referral Link
        </span>
      </v-tab>
      <!-- tabs -->
      <v-tabs-items>
        <!-- tab contents -->
        <v-tab-item id="account">
          <account/>
        </v-tab-item>
        <v-tab-item id="profile">
          <profile/>
        </v-tab-item>
        <v-tab-item id="referral-link">
          <referral-link/>
        </v-tab-item>
        <!-- tab contents -->
      </v-tabs-items>
    </v-tabs>
  </main-layout>
</template>

<script>
import MainLayout from "Layouts/Main.vue";
import Account from "Components/settings/Account.vue";
import Profile from "Components/settings/Profile.vue";
import ReferralLink from "Components/settings/ReferralLink.vue";

export default {
  components: {
    MainLayout,
    Account,
    Profile,
    ReferralLink
  },
  data: () => ({
    contentClass: { grey: true, "lighten-4": true, "accent--text": true }
  })
};
</script>
