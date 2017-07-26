<template>
    <v-list-tile :href="href">
          <v-list-tile-action>
            <v-icon>{{ icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title :class="{ 'router-link-active': isActive }">
              {{ name  }}
            </v-list-tile-title>
          </v-list-tile-content>
    </v-list-tile>
</template>

<script>
  export default {
    props: {
      href: {
      type: String,
      required: true
      },
      name: {
      type: String,
      },
      icon: {
      type: String,
      },
    },
    computed: {
      isActive () {
        return this.href === window.location.pathname
      }
    }
  }
</script>