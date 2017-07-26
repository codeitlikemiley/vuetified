<template>
  <v-speed-dial
      v-model="fab"
      :top="top"
      :bottom="bottom"
      :right="right"
      :left="left"
      :direction="direction"
      :hover="hover"
      :transition="transition"
      class="fab-float"
    >
      <v-btn
        slot="activator"
        :class="[activeFab.class]"
        dark
        fab
        hover
        v-model="fab"
      >
        <v-icon>{{ activeFab.icon }}</v-icon>
        <v-icon>close</v-icon>
      </v-btn>
      <v-btn
        v-for="button in buttons" :key="button.name"
        fab
        dark
        small
        :href="button.href"
        :class="[button.class]"
        @click.native="changeFab(button)"
      >
        <v-icon>{{ button.icon }}</v-icon>
      </v-btn>
      <v-btn
        fab
        dark
        small
        class="amber"
        href="#main-app"
      >
        <v-icon>fa-chevron-up</v-icon>
      </v-btn>

    </v-speed-dial>
</template>

<script>
export default {
    data: () => ({
        direction: 'top',
        fab: false,
        hover: false,
        top: false,
        right: true,
        bottom: true,
        left: false,
        transition: 'slide-y-reverse-transition',
        buttons: [
            { name: 'home', href: '/', class: 'green', icon: 'fa-fa' },
            { name: 'login', href: '/login', class: 'indigo', icon: 'fa-plug' },
            { name: 'logout', href: '/logout', class: 'red', icon: 'fa-power-off' }
        ],
        activeFab: {
            'class': 'teal lighten-1', icon: 'explore'
        }
    }),

    watch: {
        top (val) {
            this.bottom = !val
        },
        right (val) {
            this.left = !val
        },
        bottom (val) {
            this.top = !val
        },
        left (val) {
            this.right = !val
        }
    },
    methods: {
        changeFab (button) {
            this.activeFab = { class: button.class, icon: button.icon }
        },
        goTop () {

        }
    }
}
</script>
