<script>
import { ref } from "vue";
import { Navigation, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/navigation";

const setup = () => {
  const modules = ref([Navigation, Autoplay]);
  return {
    modules,
  };
};
export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup,
};
</script>
<template src="./template.html" />
<style src="./style.css" />
