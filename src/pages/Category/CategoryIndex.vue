<script>
import { reactive, ref } from "vue";
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
  const modules = ref([Pagination, Navigation, EffectCoverflow, Autoplay]);
  const actived = ref({ label: "所有類型", value: "All" });
  const categoryList = reactive([
    {
      label: "所有類型",
      value: "All",
      url: "#",
    },
    {
      label: "科幻",
      value: "Science fiction",
      url: "#",
    },
    {
      label: "恐怖",
      value: "Horror",
      url: "#",
    },
    {
      label: "浪漫",
      value: "Romantic",
      url: "#",
    },
    {
      label: "動作",
      value: "Action",
      url: "#",
    },
    {
      label: "喜劇",
      value: "Comedy",
      url: "#",
    },
    {
      label: "經典",
      value: "Classic",
      url: "#",
    },
    {
      label: "動畫",
      value: "Animation",
      url: "#",
    },
  ]);
  function addActive(category) {
    actived.value = category;
  }
  return {
    modules,
    actived,
    categoryList,
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
