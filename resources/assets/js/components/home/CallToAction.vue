<template>
  <v-container 
    fluid 
    pa-0 
    ma-0 
    class="accent"
  >
    <v-layout 
      row 
      wrap 
      pa-0 
      ma-0
    >
      <v-flex 
        xs12 
        text-xs-center 
        pa-0
        ma-0
      >
        <v-card-text><h2 class="white--text"><em>YES!</em></h2></v-card-text>
      </v-flex>
      <v-flex 
        xs12 
        text-xs-center
        pa-0
        ma-0
      >
        <v-card-text class="headline white--text">
          <p><em>I would like to save Hours Of Prototyping and Scaffolding My Next Big Idea </em></p>
          <p><em>And Use Vuetified To Save Tons Of Hours Experimenting What Works and Not.</em></p>
        </v-card-text>
      </v-flex>
      <v-flex 
        xs12 
        text-xs-center 
        pb-5
      >
        <v-btn 
          color="primary" 
          :href="link"
        >
          <span class="white--text">
            Clone The Repository
          </span>
          <v-icon 
            right 
            dark
          >
            fa-code-fork
          </v-icon>
        </v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import Acl from '../../mixins/acl'

export default {
    mixins: [Acl],
    data: () => ({
        link: 'https://github.com/codeitlikemiley/vuetified'
    }),
    mounted () {
        let self = this
        if (self.isLoggedIn()) {
            self.link = 'https://github.com/codeitlikemiley/vuetified'
        }
    }
}
</script>

<style>

</style>
