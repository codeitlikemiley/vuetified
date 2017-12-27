<template>
  <v-list-tile 
    :avatar="avatarOn" 
    @click.native="navigate(href)" 
    :class="[{ styleAvatar: avatarOn }]"
  >
    <v-list-tile-action v-if="iconOn && !avatarOn">
      <v-icon :style="{color: isActive ? activeColor : iconColor, cursor: href ? 'pointer' : ''}">{{ icon }}</v-icon>
    </v-list-tile-action>
    <v-list-tile-avatar v-if="iconOn && avatarOn">
      <img 
        :src="avatar" 
        alt=""
      >
    </v-list-tile-avatar>
    <v-list-tile-content>
      <v-list-tile-title :style="{color: isActive ? activeColor : linkColor}">
        <span :style="{cursor: href ? 'pointer' : ''}">{{ title }}</span>
      </v-list-tile-title>
    </v-list-tile-content>
    <v-list-tile-action v-if="iconOn && avatarOn">
      <v-icon :style="{color: isActive ? activeColor : iconColor, cursor: href ? 'pointer' : ''}">{{ icon }}</v-icon>
    </v-list-tile-action>
  </v-list-tile>
</template>

<script>
export default {
    props: {
        dark: {
            type: Boolean,
            default () {
                return false
            }
        },
        href: {
            type: String,
            required: true
        },
        title: {
            type: String,
            required: true
        },
        avatar: {
            type: String,
            default () {
                return ''
            }
        },
        icon: {
            type: String,
            default () {
                return ''
            }
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
                return this.dark ? '#fafafa' : '#e3b500' // white or blue-grey lighten-1
            }
        },
        activeColor: {
            type: String,
            default () {
                return '#f5c300' // teal lighten 2
            }
        }
    },
    computed: {
        isActive () {
            return this.href === this.$route.path
        },
        isDark () {
            return this.dark === true
        },
        avatarOn () {
            return !!this.avatar
        },
        iconOn () {
            return !!this.icon
        }
    },
    methods: {
        navigate (href) {
            let self = this
            /* if valid url */
            if (self.isURL(href)) {
                window.open(href)
            } else { /* when using vue router path */
                this.$router.push({ path: `${href}` })
            }
        },
        isURL (str) {
            var urlRegex = '^(?!mailto:)(?:(?:http|https|ftp)://)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$'
            var url = new RegExp(urlRegex, 'i')
            return str.length < 2083 && url.test(str)
        }

    }
}
</script>

<style lang="scss" scoped>
    .styleAvatar {
        position: relative;
        margin-left: -55px;
    }
</style>
