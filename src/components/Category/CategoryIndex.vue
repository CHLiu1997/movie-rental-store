<script>
import { onMounted, ref } from "vue";
import {
  Pagination,
  Navigation,
  EffectCoverflow,
  Autoplay,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";

const setup = () => {
  onMounted(() => {
    setTimeout(() => {
      loading.value = false;
    }, 2000);
    window.addEventListener("scroll", scrollWatch);
  });
  const modules = ref([Pagination, Navigation, EffectCoverflow, Autoplay]);
  const loading = ref(true);
  const yScrollValue = ref();
  const actived = ref("all");
  const movieCatories = ref({
    all: ["所有類型", "All"],
    sciFi: ["科幻", "Science fiction"],
    horror: ["恐怖", "Horror"],
    romantic: ["浪漫", "Romantic"],
    action: ["動作", "Action"],
    comedy: ["喜劇", "Comedy"],
    classic: ["經典", "Classic"],
    animation: ["動畫", "Animation"],
  });

  const movieCatoriesTitle = ref([
    "科幻",
    "恐怖",
    "浪漫",
    "動作",
    "喜劇",
    "經典",
    "動畫",
  ]);
  function scrollWatch() {
    yScrollValue.value = window.scrollY;
  }
  function goTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  function addActive(category) {
    actived.value = category;
    // console.log(category);
  }
  return {
    modules,
    loading,
    yScrollValue,
    actived,
    movieCatories,
    movieCatoriesTitle,
    scrollWatch,
    goTop,
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
