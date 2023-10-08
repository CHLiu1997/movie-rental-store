<script>
import { onMounted, ref } from "vue";
import { Splide, SplideSlide } from "@splidejs/vue-splide";
import "@splidejs/vue-splide/css/customize";

const setup = () => {
  const isDropdownVisible = ref(true);
  const showDropdown = function () {
    isDropdownVisible.value = !isDropdownVisible.value;
  };

  onMounted(() => {
    console.log("onMounted");
  });
  return {
    isDropdownVisible,
    showDropdown,
  };
};

export default {
  components: {
    Splide,
    SplideSlide,
  },
  setup,
};
</script>
<template src="./template.html"></template>
<style src="./style.css"></style>
<style src="./reset.css"></style>
