<script>
import { onMounted, ref } from "vue";
import { Pagination, EffectCoverflow, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

const setup = () => {
  onMounted(() => {
    setTimeout(() => {
      loading.value = false;
    }, 2000);
    window.addEventListener("scroll", scrollWatch);
  });
  const loading = ref(true);
  const yScrollValue = ref();
  const modules = ref([Pagination, EffectCoverflow, Autoplay]);
  const movieCatories = ref({
    all: ["全部", "All"],
    sciFi: ["科幻", "Science fiction"],
    horror: ["恐怖", "Horror"],
    romantic: ["浪漫", "Romantic"],
    action: ["動作", "Action"],
    comedy: ["喜劇", "Comedy"],
    classic: ["經典", "Classic"],
    animation: ["動畫", "Animation"],
  });
  const actived = ref("all");
  function scrollWatch() {
    yScrollValue.value = window.scrollY;
  }
  function goTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  function addActive(index) {
    actived.value = index;
    console.log(index);
  }
  return {
    loading,
    yScrollValue,
    goTop,
    scrollWatch,
    modules,
    movieCatories,
    actived,
    addActive,
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
<style scoped src="./style.css" />
