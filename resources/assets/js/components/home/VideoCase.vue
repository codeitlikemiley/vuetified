<template>
  <v-container 
    fluid 
    class="pa-0 ma-0"
  >
    <v-layout 
      row 
      wrap
    >
      <v-flex 
        xs12 
        text-xs-center
      >
        <h1 class="primary--text">Watch Videos</h1>
        <h2 class="headline accent--text">Click The Image To Lazy Load The Video</h2>
      </v-flex>
    </v-layout>
    <v-layout
      row 
      justify-center
    >
      <v-flex 
        xs12 
        sm12 
        md4 
        lg4 
        xl4 
        v-for="(video,key) in videos" 
        :key="key" 
        text-xs-center 
        pa-2
      >
        <v-card>
          <div
            :style="{ backgroundImage: 'url(' + video.poster + ')', height: imageHeight, 'background-position': 'center', 'background-repeat': 'no-repeat' }"
            style="cursor:pointer;"
            @click="changeVideo(video)"
          />
          <v-card-title 
            style="background-color: #607d8b;" 
            v-if="showVideoTitle"
          >
            <v-spacer/>
            <span class="headline white--text">{{ video.title }}</span>
            <v-spacer/>
          </v-card-title>
        </v-card>
      </v-flex>
    </v-layout>
    <v-layout 
      row 
      wrap 
      v-if="loaded"
    >
      <v-flex 
        xs12 
        text-xs-center
      >
        <youtube 
          :video-id="youtube_id" 
          :player-width="youtubeWidth" 
          :player-height="youtubeHeight"
        />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
    data: () => ({
        videos: [
            {
                title: 'One Piece 819',
                href: 'https://www.youtube.com/watch?v=L0ZHk0JD5yE',
                type: 'text/html',
                youtube: 'L0ZHk0JD5yE',
                poster: '/svg/video-play-svgrepo-com.svg'
            },
            {
                title: 'One Piece Commercial',
                href: 'https://www.youtube.com/watch?v=5TrI6b4gc9c',
                type: 'text/html',
                youtube: '5TrI6b4gc9c',
                poster: '/svg/video-play-svgrepo-com.svg'
            },
            {
                title: 'One Piece Coca Cola Ads',
                href: 'https://www.youtube.com/watch?v=SV1Z2kpzjQk',
                type: 'text/html',
                youtube: 'SV1Z2kpzjQk',
                poster: '/svg/video-play-svgrepo-com.svg'
            }
        ],
        youtube_id: 'l-nKCcfSMHc',
        loaded: false
    }),
    computed: {
        imageHeight () {
            switch (this.$vuetify.breakpoint.name) {
            case 'xs': return '100px'
            case 'sm': return '100px'
            case 'md': return '150px'
            case 'lg': return '250px'
            case 'xl': return '250px'
            }
        },
        youtubeHeight () {
            switch (this.$vuetify.breakpoint.name) {
            case 'xs': return '315px'
            case 'sm': return '315px'
            case 'md': return '450px'
            case 'lg': return '750px'
            case 'xl': return '864px'
            }
        },
        youtubeWidth () {
            let width = window.innerWidth

            switch (this.$vuetify.breakpoint.name) {
            case 'xs': return `${width}px`
            case 'sm': return `${width}px`
            case 'md': return `${width}px`
            case 'lg': return `${width}px`
            case 'xl': return `${width}px`
            }
        },
        showVideoTitle () {
            switch (this.$vuetify.breakpoint.name) {
            case 'xs': return false
            case 'sm': return true
            case 'md': return true
            case 'lg': return true
            case 'xl': return true
            }
        }
    },
    methods: {
        changeVideo (video) {
            this.youtube_id = video.youtube
            this.loaded = true
        }

    }
}
</script>

<style>

</style>
