<script>
import { ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default {
  props: {
    categoryList: {
      type: Object,
      require: true,
    },
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  setup(props) {
    const modules = ref([Pagination, Navigation]);
    const AllCategory = ref(props.categoryList);
    return {
      modules,
      AllCategory,
    };
  },
};
</script>
<template src="./template.html" />
<style src="./style.css" />
