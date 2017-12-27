<template>
  <v-carousel 
    class="primary--text"
    delimiter-icon="crop_square"
  >
    <v-carousel-item 
      v-for="(item,i) in images" 
      :src="item.src" 
      :key="i"
    >
      <div 
        class="headline text-xs-center" 
        style="padding-top:200px;"
      >
        <h3 class="white--text"> <span style="background-color:#103050;opacity:0.75;">{{ item.headline }}</span></h3>
        <p class="white--text title" ><span style="background-color:#607D8B;opacity:0.75;">{{ item.subheader }}</span></p>
        <v-btn 
          class="secondary white--text" 
          :to="item.buttonlink">
          {{ item.buttontext }}
          <v-icon 
            right 
            dark
          >
            {{ item.icon }}
          </v-icon>
        </v-btn>
      </div>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
import Acl from '../../mixins/acl'

export default {
    mixins: [Acl],
    data: () => ({
        images: [
            {src: 'https://next.vuetifyjs.com/static/doc-images/carousel/sky.jpg', headline: 'Headline', 'subheader': 'Subheader', 'buttontext': 'Register', 'buttonlink': '/register', 'icon': 'person_pin', textcolor: 'accent--text'},
            {src: 'https://next.vuetifyjs.com/static/doc-images/carousel/sky.jpg', headline: 'Headline', 'subheader': 'Subheader', 'buttontext': 'Register', 'buttonlink': '/register', 'icon': 'person_pin', textcolor: 'accent--text'},
            {src: 'https://next.vuetifyjs.com/static/doc-images/carousel/sky.jpg', headline: 'Headline', 'subheader': 'Subheader', 'buttontext': 'Register', 'buttonlink': '/register', 'icon': 'person_pin', textcolor: 'accent--text'}
            

        ]
    }),
    mounted () {
        let self = this
        if (self.isLoggedIn()) {
            self.images.forEach(image => {
                image.buttonlink = '/dashboard'
            })
        }
    },
    methods: {
        goToLink (link) {
            this.$router.push({ path: link })
        }
    }
}
</script>

<style>

</style>
