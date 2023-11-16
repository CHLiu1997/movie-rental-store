<script>
import { onMounted, ref } from "vue";
import { Navigation, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/navigation";

const setup = () => {
  onMounted(() => {
    setTimeout(() => {
      loading.value = false;
    }, 2000);
    window.addEventListener("scroll", scrollWatch);
  });
  const loading = ref(true);
  const yScrollValue = ref();
  const modules = ref([Navigation, Autoplay]);
  function scrollWatch() {
    yScrollValue.value = window.scrollY;
  }
  function goTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  return {
    loading,
    yScrollValue,
    modules,
    scrollWatch,
    goTop,
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
