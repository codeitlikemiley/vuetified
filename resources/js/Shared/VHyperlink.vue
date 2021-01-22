<template>
  <inertia-link
    class="inertia-link"
    :href="route(`${href}`)"
  >
    <slot />
  </inertia-link>
</template>


<script>
export default {
  props: {
    href: {
      type: String,
      default: "home",
    },
  },
};
</script>



<style scoped>
.btn {
  text-decoration: none;
}
.inertia-link {
  text-decoration: none;
}
</style>


