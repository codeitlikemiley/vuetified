<template>
  <home-layout :class="[contentClass]">
    <parallax/>
    <show-case/>
    <feature-case/>
    <pioneer/>
    <video-case/>
    <testimonial/>
    <call-to-action/>
  </home-layout>
</template>

<script>
import HomeLayout from "Layouts/Home.vue";
import Parallax from "Components/home/Parallax.vue";
import ShowCase from "Components/home/Showcase.vue";
import Pioneer from "Components/home/Pioneer.vue";
import FeatureCase from "Components/home/FeatureCase.vue";
import VideoCase from "Components/home/VideoCase.vue";
import Testimonial from "Components/home/Testimonial.vue";
import CallToAction from "Components/home/CallToAction.vue";

export default {
  components: {
    HomeLayout,
    ShowCase,
    FeatureCase,
    VideoCase,
    Testimonial,
    Pioneer,
    CallToAction,
    Parallax
  },
  data: () => ({
    contentClass: { white: true, "accent--text": true }
  }),
  mounted() {
    Bus.$emit("footer-content-visible", true);
  }
};
</script>
<style scoped>
.image {
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  border: 2px solid #ba9a5a;
  margin: 15px;
}
</style>
