<template>
    <v-list-tile avatar>
            <v-list-tile-avatar>
              <img :src="avatar" alt="">
            </v-list-tile-avatar>
            <v-list-tile-title v-text="name"></v-list-tile-title>
    </v-list-tile>
</template>

<script>
  export default {
    props: {
      avatar: {
      type: String,
      required: true
      },
      name: {
      type: String,
      }
    }
  }
</script>
