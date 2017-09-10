<template>
    <v-list>
        <v-list-group v-for="item in items" :value="isGroupActive(item)" v-bind:key="item.title">
        <v-list-tile slot="item">
            <v-list-tile-action v-if="!item.avatar">
            <v-icon>{{ item.action }}</v-icon>
            </v-list-tile-action>
            <v-avatar size="25px" v-else>
                <img :src="item.avatar" alt="">
            </v-avatar>
            <v-list-tile-content>
            <v-list-tile-title :class="{'blue-grey--text': !isDark, 'text--lighten-1': !isDark}">{{ item.title }}</v-list-tile-title>
            </v-list-tile-content>
            <v-list-tile-action>
            <v-icon :class="{'primary--text': !isDark, 'white--text': isDark}">keyboard_arrow_down</v-icon>
            </v-list-tile-action>
        </v-list-tile>
        <!-- href Here -->
        <v-list-tile @click.native.stop="loadview(item,subItem.component)"
                    :class="[{ styleAvatar: hasAvatar(subItem) }]"
                    :avatar="subItem.avatar ? 'avatar' : ''"
                    v-for="subItem in item.items"
                    :key="subItem.title"
                    style="cursor:pointer;"
        >
             <v-avatar v-if="subItem.avatar">
                <img :src="loadAvatar(subItem.avatar)" alt="">
            </v-avatar>
            <v-list-tile-content>
             <v-list-tile-title  v-if="!isDark">
                 <span :class="{'teal--text': isActive(subItem), 'text--lighten-2': isActive(subItem), 'blue-grey--text': !isActive(subItem), 'text--lighten-1': !isActive(subItem)}">{{ subItem.title }}</span>
             </v-list-tile-title>
             <v-list-tile-title  v-else>
                 <span :class="{'teal--text': isActive(subItem), 'text--lighten-2': isActive(subItem), 'white--text': !isActive(subItem) }">{{ subItem.title }}</span>
             </v-list-tile-title>
            </v-list-tile-content>
             <v-list-tile-action v-if="subItem.avatar">
                <v-icon :class="{'teal--text': isActive(subItem), 'text--lighten-2': isActive(subItem)}">{{ subItem.action }}</v-icon>
              </v-list-tile-action>
              <v-list-tile-action v-else>
                <v-icon :class="{'teal--text': isActive(subItem), 'text--lighten-2': isActive(subItem)}">{{ subItem.action }}</v-icon>
              </v-list-tile-action>
        </v-list-tile>
        </v-list-group>
    </v-list>
</template>

<script>
export default {
    props: ['items'],
    data: () => ({
        dark: App.theme.dark
    }),
    methods: {
        loadview (item, component) {
            if (!this.isGroupActive(item)) {
                this.$router.push({ path: `${item.href}` })
            }
            Bus.$emit(`load-view`, component)
        },
        hasAvatar (subItem) {
            return subItem.avatar !== undefined
        },
        loadAvatar (avatar) {
            return avatar || 'https://avatars0.githubusercontent.com/u/9064066?v=4&s=460'
        },
        isGroupActive (item) {
            let itemsegment = ''
            let segment = ''
            if (item.href !== undefined) {
                itemsegment = item.href.split('/')[1]
                segment = window.location.pathname.split('/')[1]
                return itemsegment === segment
            }
        },
        isActive (subItem) {
            if (subItem.href !== undefined) {
                return subItem.href === window.location.pathname
            }
        }
    },
    computed: {
        isDark () {
            return this.dark === true
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
