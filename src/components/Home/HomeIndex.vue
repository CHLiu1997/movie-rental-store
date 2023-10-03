<script>
import { Splide, SplideSlide } from "@splidejs/vue-splide";
import "@splidejs/vue-splide/css/customize";

export default {
  components: {
    Splide,
    SplideSlide,
  },
  data() {
    return {
      isDropdownVisible: false,
      timeoutId: null,
    };
  },
  methods: {
    showDropdown() {
      this.isDropdownVisible = true;
    },
    hideDropdown() {
      this.isDropdownVisible = false;
    },
  },
};
</script>
<template src="./template.html"></template>
<style src="./style.css"></style>
<style src="./reset.css"></style>
