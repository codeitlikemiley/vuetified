<template>
  <main-layout>
    <p>Register page</p>
  </main-layout>
</template>

<script>
import MainLayout from '../layouts/Main.vue'
import Theme from '../mixins/theme'

export default {
    mixins: [Theme],
    components: {
        MainLayout
    }
}
</script>
