<template>
  <v-list-item :class="[{ styleAvatar: avatarOn }]" @click.native="navigate(href)">
    <v-list-item-action v-if="iconOn && !avatarOn">
      <v-icon
        :style="{color: isActive(href) ? activeColor : iconColor, cursor: href ? 'pointer' : ''}"
      >{{ icon }}</v-icon>
    </v-list-item-action>
    <v-list-item-avatar v-if="iconOn && avatarOn">
      <v-img :src="avatar" />
    </v-list-item-avatar>
    <v-list-item-content>
      <v-list-item-title :style="{color: isActive(href) ? activeColor : linkColor}">
        <span :style="{cursor: href ? 'pointer' : ''}">{{ title }}</span>
      </v-list-item-title>
    </v-list-item-content>
    <v-list-item-action v-if="iconOn && avatarOn">
      <v-icon
        :style="{color: isActive(href) ? activeColor : iconColor, cursor: href ? 'pointer' : ''}"
      >{{ icon }}</v-icon>
    </v-list-item-action>
  </v-list-item>
</template>

<script>
export default {
  props: {
    dark: {
      type: Boolean,
      default() {
        return false;
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
      default() {
        return "";
      }
    },
    icon: {
      type: String,
      default() {
        return "";
      }
    },
    iconColor: {
      type: String,
      default() {
        return this.dark ? "#fafafa" : "#78909C"; // white or blue-grey lighten-1
      }
    },
    linkColor: {
      type: String,
      default() {
        return this.dark ? "#fafafa" : "#e3b500"; // white or blue-grey lighten-1
      }
    },
    activeColor: {
      type: String,
      default() {
        return "#f5c300"; // teal lighten 2
      }
    }
  },
  computed: {
    isDark() {
      return this.dark === true;
    },
    avatarOn() {
      return !!this.avatar;
    },
    iconOn() {
      return !!this.icon;
    }
  },
  methods: {
    isActive() {
      return this.route().current(this.href);
    },
    navigate(href) {
      let self = this;
      /* if valid url */
      if (self.isURL(href)) {
        // check if link belongs to same domain
        if (self.getHostName(href) == window.location.hostname) {
          this.$inertia.replace(href);
        } else {
          window.open(href);
        }
      } else if (this.routeExists(href)) {
        /* when using vue router path */

        this.$inertia.visit(this.route(href).url());
      } else {
        this.$inertia.visit(href);
      }
    },
    routeExists(name) {
      try {
        route(name);
        return true;
      } catch (Err) {
        return false;
      }
    },
    getHostName(url) {
      var match = url.match(/:\/\/(www[0-9]?\.)?(.[^/:]+)/i);
      if (
        match != null &&
        match.length > 2 &&
        typeof match[2] === "string" &&
        match[2].length > 0
      ) {
        return match[2];
      } else {
        return null;
      }
    },
    isURL(str) {
      var urlRegex =
        "^(?!mailto:)(?:(?:http|https|ftp)://)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$";
      var url = new RegExp(urlRegex, "i");
      return str.length < 2083 && url.test(str);
    }
  }
};
</script>

<style lang="scss" scoped>
.styleAvatar {
  position: relative;
  margin-left: -55px;
}
</style>
