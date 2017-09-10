<template>
    <v-list-tile  @click.native="navigate(href)" :style="{cursor: href ? 'pointer' : ''}">
          <v-list-tile-action>
            <v-icon :style="{color: isActive ? activeColor : iconColor}">{{ icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title  :style="{color: isActive ? activeColor : linkColor}">
              {{ title  }}
            </v-list-tile-title>
          </v-list-tile-content>
    </v-list-tile>
</template>

<script>
export default {
    props: {
        dark: {
            type: Boolean,
            default () {
                return App.theme.dark
            }
        },
        href: {
            type: String
        },
        title: {
            type: String
        },
        icon: {
            type: String
        },
        iconColor: {
            type: String,
            default () {
                return this.dark ? '#fafafa' : '#78909C' // white or blue-grey lighten-1
            }
        },
        linkColor: {
            type: String,
            default () {
                return this.dark ? '#fafafa' : '#78909C' // white or blue-grey lighten-1
            }
        },
        activeColor: {
            type: String,
            default () {
                return '#4db6ac' // teal lighten 2
            }
        }
    },
    computed: {
        isActive () {
            return this.href === window.location.pathname
        },
        isDark () {
            return this.dark === true
        }
    },
    methods: {
        navigate (href) {
            this.$router.push({ path: `${href}` })
        }

    }
}
</script>
