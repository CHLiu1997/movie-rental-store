<script>
import { onMounted, ref } from "vue";
import AOS from "aos";
import "aos/dist/aos.css";
// import { Splide, SplideSlide } from "@splidejs/vue-splide";
// import "@splidejs/vue-splide/css/customize";

const setup = () => {
  AOS.init();
  AOS.refresh();
  const loading = ref(true);
  const yScrollValue = ref();
  function scrollWatch() {
    yScrollValue.value = window.scrollY;
  }
  onMounted(() => {
    setTimeout(() => {
      loading.value = false;
    }, 2000);
    window.addEventListener("scroll", scrollWatch);
  });
  function goTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  return {
    loading,
    yScrollValue,
    goTop,
    scrollWatch,
  };
};

export default {
  // components: {
  //   Splide,
  //   SplideSlide,
  // },
  setup,
};
</script>
<template src="./template.html"></template>
<style src="./style.css"></style>
<style src="./reset.css"></style>
