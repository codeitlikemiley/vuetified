<template>
  <v-container
    fluid
    grid-list-md
  >
    <v-layout 
      row
      wrap
    >
      <!-- left side -->
      <v-flex 
        d-flex 
        xs12 
        sm12 
        md6 
        lg6
      >
        <v-layout 
          row
          wrap
        >
          <!-- Feature Image -->
          <v-flex 
            d-flex 
            xs12
            text-xs-center
          >
            <v-card 
              flat 
              light
            >
              <v-card-title class="title primary--text">
                <v-card-text v-html="title"/>
              </v-card-title>

              <!-- Image Placeholder -->
              <div 
                v-if="!current_image" 
                style="background-color:#d3d3d3;height:322px;width:483px;margin: auto;width: 50%;"
              />
              <!-- Image Placeholder -->
              <!-- Image -->
              <v-card-media
                v-else
                :src="current_image"
                height="700px"
                contain
              />
              <!-- Image -->
              <!-- Gallery -->
              <v-container 
                fill-height 
                fluid 
                v-if="photos !== null && photos !== undefined && photos.length > 0"
              >
                <v-layout fill-height>
                  <v-flex
                    xs12 
                    align-end 
                    flexbox
                  >
                    <div
                      class="image"
                      v-for="(image,key) in photos"
                      :key="key"
                      @click="setCurrentImage(key)"
                      :style="{ backgroundImage: 'url(' + image + ')', width: imageHeight, height: imageWidth }"
                    />
                  </v-flex>
                </v-layout>
              </v-container>
              <!-- Gallery -->
            </v-card>
          </v-flex>
          <!-- Feature Image -->
        </v-layout>
      </v-flex>
      <!-- left side -->
      <!-- right side -->
      <v-flex 
        d-flex
        xs12 
        sm12 
        md6 
        lg6
      >
        <v-layout 
          row 
          wrap
        >
          <!-- Feature Lists -->
          <v-flex
            d-flex 
            xs12
            v-bind="{ [`xs${card.xs}`]: true, [`sm${card.sm}`]: true, [`md${card.md}`]: true,[`lg${card.lg}`]: true,[`xl${card.xl}`]: true }"
            v-for="card in features"
            :key="card.title"
            class="pa-2"
          >

            <v-card 
              flat 
              light
            >
              <v-container fluid>
                <v-layout 
                  row 
                  wrap
                >
                  <v-flex
                    d-flex
                    xs4
                  >
                    <v-card-media
                      :src="card.src"
                      height="125px"
                      contain
                      avatar
                    />
                  </v-flex>
                  <v-flex
                    d-flex
                    xs8
                  >
                    <v-container>
                      <v-layout 
                        row 
                        wrap
                      >
                        <v-flex
                          d-flex
                          xs12
                        >
                          <v-card-actions>
                            <v-spacer/>
                            <p 
                              class="headline primary--text"
                              v-text="card.title"
                            />
                            <v-spacer/>
                            <v-btn 
                              icon 
                              @click.native="card.show = !card.show" 
                              class="accent--text"
                            >
                              <v-icon>{{ card.show ? 'keyboard_arrow_up' : 'keyboard_arrow_down' }}</v-icon>
                            </v-btn>
                          </v-card-actions>
                        </v-flex>

                        <v-flex
                          d-flex
                          xs12
                        >
                          <v-slide-y-transition>
                            <v-card-text 
                              v-show="card.show" 
                              v-text="card.tagline"
                              class="accent--text" 
                              :class="[taglineSize]"
                            />
                          </v-slide-y-transition>
                        </v-flex>
                      </v-layout>
                    </v-container>
                  </v-flex>
                </v-layout>
              </v-container>

            </v-card>
          </v-flex>
          <!-- Feature Lists -->
        </v-layout>
      </v-flex>
      <!-- right side -->
    </v-layout>
  </v-container>
</template>

<script>
export default {
    data: () => ({
        title: '<h1 class="accent--text">Everything You Need To Start </br><strong class="primary--text">In Building Single Page Apps</strong></h1>',
        'current_image': '/svg/website-svgrepo-com.svg',
        features: [
            { show: true, title: 'Easy Scaffolding', tagline: 'Added New Artisan Commands To Help You Get Up and Running', src: '/svg/command-window-svgrepo-com.svg', xs: 12, sm: 12, md: 12, lg: 12, xl: 12 },
            { show: true, title: 'Easily Add Components', tagline: 'Need More Components? Add Them As A New Service in Your Plugins.js', src: '/svg/usb-svgrepo-com.svg', xs: 12, sm: 12, md: 12, lg: 12, xl: 12 },
            { show: true, title: 'Deploy Easily On Cloud', tagline: 'Deploy Your Containers with Dockers at Digital Ocean', src: '/svg/cloud-computing-svgrepo-com.svg', xs: 12, sm: 12, md: 12, lg: 12, xl: 12 },
            { show: true, title: 'Modular State Management', tagline: 'Few Modules Are Built In For You To Handle State On Front End', src: '/svg/database-svgrepo-com.svg', xs: 12, sm: 12, md: 12, lg: 12, xl: 12 }
        ],
        photos: [
        ]
    }),
    computed: {
        imageHeight () {
            let height = window.innerWidth * 0.07
            switch (this.$vuetify.breakpoint.name) {
            case 'xs': return `${height}px`
            case 'sm': return `${height}px`
            case 'md': return `${height}px`
            case 'lg': return `${height}px`
            case 'xl': return `${height}px`
            }
        },
        imageWidth () {
            let width = window.innerWidth * 0.07

            switch (this.$vuetify.breakpoint.name) {
            case 'xs': return `${width}px`
            case 'sm': return `${width}px`
            case 'md': return `${width}px`
            case 'lg': return `${width}px`
            case 'xl': return `${width}px`
            }
        },
        taglineSize () {
            switch (this.$vuetify.breakpoint.name) {
            case 'xs': return {}
            case 'sm': return {}
            case 'md': return {title: true}
            case 'lg': return {title: true}
            case 'xl': return {title: true}
            }
        }
    },
    methods: {
        setCurrentImage (index) {
            this.current_image = this.photos[index]
        }
    }
}
</script>

<style scoped>
.image {
    float: left;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    border: 1px solid #ebebeb;
    margin: 5px;
}
</style>
