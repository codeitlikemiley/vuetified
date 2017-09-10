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
      :absolute="absolute"
      :fixed="fixed"
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
        v-if="isVisible(button)"
        fab
        dark
        small
        :class="[button.class]"
        @click.native="navigate(button)"
      >
        <v-icon>{{ button.icon }}</v-icon>
      </v-btn>
    </v-speed-dial>
</template>

<script>
export default {
    data: () => ({
        direction: 'top',
        fixed: true,
        fab: false,
        hover: false,
        top: false,
        right: true,
        bottom: true,
        left: false,
        absolute: false,
        transition: 'slide-y-reverse-transition',
        buttons: [
            { name: 'home', href: '/', class: 'green', icon: 'fa-fa', requiresAuth: false },
            { name: 'login', href: '/login', class: 'indigo', icon: 'fa-plug', requiresAuth: false },
            { name: 'logout', href: '/logout', class: 'red', icon: 'fa-power-off', requiresAuth: true },
            { name: 'scroll-up', href: null, class: 'amber', icon: 'fa-chevron-up', requiresAuth: false }
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
        navigate (button) {
            let self = this
            self.activeFab = { class: button.class, icon: button.icon }

            setTimeout(() => {
                self.activeFab = {
                    'class': 'teal lighten-1', icon: 'explore'
                }
                if (button.href !== null) {
                    self.$router.push({ path: `${button.href}` })
                } else {
                    self.goTop()
                }
            }, 500)
        },
        goTop () {
            window.scrollTo(0, 0)
        },
        isVisible (button) {
            if (button.requiresAuth === false && button.name === 'login') {
                return App.userId === null
            } else if (button.requiresAuth === true && button.name === 'logout') {
                return App.userId !== null
            } else if (button.requiresAuth === false) {
                return true
            }
        }
    }
}
</script>
