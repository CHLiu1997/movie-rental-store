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
  const yScrollValue = ref("");
  onMounted(() => {
    setTimeout(() => {
      loading.value = false;
    }, 2000);
  });
  // onMounted(() => {
  //   window.addEventListener('scroll', this.scrollWatch);
  // });
  function scrollWatch() {
    this.yScrollVaule = window.scrollY;
  }
  function goTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
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
