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
  });
  const loading = ref(true);
  const modules = ref([Pagination, EffectCoverflow, Autoplay]);
  return {
    loading,
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
<style scoped src="./style.css" />
<!-- <style lang="scss" scoped>
// @import "@/styles/variables.scss";
// @import "@/styles/mixins.scss";
// @import "./style.scss";
// .coverflow-example {
//   // @include swiper-wrapper($height: 380px);
//   position: relative;
// }
.swiper {
  height: 100%;
  width: 100%;
  padding-top: 30px;
  padding-bottom: 30px;
  .slide {
    width: 60vw;
    height: 400px;
    img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}
</style> -->
