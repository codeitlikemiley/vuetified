<template>
  <main-layout :class="[contentClass]">
    <v-parallax src="/img/bg.jpg">
      <v-layout 
        column
        align-center 
        justify-center
      >
        <h1 class="white--text">ABOUT {{ `${App.site.trademark}` }}</h1>
        <h2 
          class="white--text" 
          text-xs-center
        >
          A company committed in Providing Solutions To The Latest SEO Needs Of Everone Who Want To Boost Their Google Rank Search.
        </h2>
      </v-layout>
    </v-parallax>
    <v-container 
      light 
      fluid
    >
      <v-layout 
        row 
        wrap
      >
        <v-flex 
          xs12
          text-xs-center
        >
          <v-avatar size="250px">
            <img 
              src="/img/gabriel.jpg" 
              alt="Owner/CEO"
            >
          </v-avatar>
        </v-flex>
      </v-layout>
      <v-layout 
        row 
        wrap 
        pa-5
      >
        <v-flex 
          xs12 
          text-xs-center
        >
          <h1 
            light 
            class="primary--text"
          >
            CEO/Founder
          </h1>
        </v-flex>
        <v-flex 
          xs12 
          text-xs-left
        >
          <p class="headline blue-grey--text">
            <strong class="accent--text">{{ `${App.site.trademark}` }}</strong> is a company founded by <strong class="accent--text">Gabriel Machuret</strong> , Runing His Own SEO Agency <strong class="accent--text">(Goanna Social)</strong>.
            <strong class="accent--text">{{ `${App.site.trademark}` }}</strong> Was Develop With The Goal in Mind that is to <strong class="accent--text">Provide Solutions</strong> To The Ever Changing World Of <strong class="accent--text">Google SEO Algorithm Updates</strong>.
            While Proving To Be Efficient And Effective, <strong class="accent--text">{{ `${App.site.trademark}` }}</strong> Also Make Sure Even a <strong class="accent--text">Dummy User</strong> Can Use This App To <strong class="accent--text">Boost End User SEO Ranking.</strong>
          </p>
        </v-flex>

      </v-layout>
      <v-layout 
        row 
        wrap 
        pa-5
      >
        <v-flex 
          xs12 
          text-xs-center
        >
          <h2 
            light 
            class="primary--text"
          >
            Company Core Values
          </h2>
        </v-flex>
        <v-flex
          v-for="card in values"
          v-bind="{ [`xs${card.xs}`]: true, [`sm${card.sm}`]: true, [`md${card.md}`]: true,[`lg${card.lg}`]: true,[`xl${card.xl}`]: true }"
          :key="card.title"
          class="pa-2"
        >
          <v-card-text>
            <p class="text-xs-center">
              <v-btn 
                v-if="card.icon" 
                :color="card.color" 
                icon>
                <v-icon dark>{{ card.icon }}</v-icon>
              </v-btn>
            </p>
          </v-card-text>
          <v-card
            flat 
            style="background-color:transparent;"
          >
            <v-card-actions>
              <v-spacer/>
              <p 
                class="headline primary--text" 
                v-text="card.title"/>
              <v-spacer/>
              <v-btn 
                v-if="card.title" 
                icon 
                class="accent--text" 
                @click.native="card.show = !card.show"
              >
                <v-icon>{{ card.show ? 'keyboard_arrow_up' : 'keyboard_arrow_down' }}</v-icon>
              </v-btn>
            </v-card-actions>
            <v-slide-y-transition>
              <v-card-text 
                v-show="card.show" 
                class="blue-grey--text title" 
                v-text="card.tagline"
              />
            </v-slide-y-transition>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>

  </main-layout>
</template>

<script>
import MainLayout from "Layouts/Main.vue";

export default {
  components: {
    MainLayout
  },
  data: () => ({
    contentClass: { grey: true, "lighten-4": true, "accent--text": true },
    values: [
      {
        color: "primary",
        icon: "fa-eye",
        show: true,
        title: "VISION",
        tagline: `${
          App.site.trademark
        } aims to be one of the most admired SEO companies around the globe. Armed with a purpose to bring real Solution To Boost SEO Ranking at the Most Efficient and Effective Way `,
        xs: 12,
        sm: 12,
        md: 4,
        lg: 4,
        xl: 4
      },
      {
        color: "accent",
        icon: "fa-fa",
        show: true,
        title: "MISSION",
        tagline: `${
          App.site.trademark
        } objective is to enrich the lives of our customers/users, and the community by providing them with the Best SEO Application That Is Easy To Use and Easy To Manage. `,
        xs: 12,
        sm: 12,
        md: 4,
        lg: 4,
        xl: 4
      },
      {
        color: "pink",
        icon: "fa-handshake-o",
        show: true,
        title: "OUR PLEDGE",
        tagline: `${
          App.site.trademark
        } we’re not just committed to Providing SEO Solutions. But We also recognize our obligation To Our End User To Provide Them Greate Service, Support, Tutorials and Updates.`,
        xs: 12,
        sm: 12,
        md: 4,
        lg: 4,
        xl: 4
      }
    ]
  })
};
</script>
