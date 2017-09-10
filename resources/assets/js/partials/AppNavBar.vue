<template>
  <v-toolbar :style="navbarStyle" :dark="!isDark" fixed absolute>
    <v-toolbar-side-icon :style="toggleBarStyle" @click.native.stop="toggleDrawer()"></v-toolbar-side-icon>
        <!-- Title -->
        <v-toolbar-title class="text-xs-center">
            <v-icon :style="{color: iconColor }" class="ml-3 hidden-md-and-down" v-if="showIcon">{{ icon }}</v-icon>
            <span class="hidden-md-and-down" :style="titleStyle">{{ title }}</span>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <!-- center logo -->
        <img v-if="showLogo"   :src="logo" :style="[logoStyle]"  alt="vuejs">
        <v-spacer></v-spacer>
        <!-- Add Here All Your Nav Icons -->
        <v-icon :dark="isDark" style="cursor:pointer;">shopping_cart</v-icon>
</v-toolbar>
</template>

<script>
import Theme from '../mixins/theme'
export default {
    mixins: [Theme],
    methods: {
        toggleDrawer () {
            Bus.$emit('toggleDrawer')
        }
    }
}
</script>

<style>

</style>
