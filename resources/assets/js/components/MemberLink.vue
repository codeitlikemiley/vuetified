<template>
    <v-list-tile avatar style="cursor:pointer;">
            <v-list-tile-avatar>
              <img :src="avatar" alt="">
            </v-list-tile-avatar>
            <v-list-tile-title v-text="name" :class="{'blue-grey--text': !isDark, 'text--lighten-1': !isDark, 'white--text': isDark}"></v-list-tile-title>
    </v-list-tile>
</template>

<script>
import Theme from '../mixins/theme'
export default {
    mixins: [Theme],
    props: {
        dark: {
            type: Boolean,
            default () {
                return false
            }
        },
        avatar: {
            type: String,
            required: true
        },
        name: {
            type: String
        }
    }
}
</script>
