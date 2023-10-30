<script>
import { onMounted, ref } from "vue";
import AOS from "aos";
import "aos/dist/aos.css";

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
  setup,
};
</script>
<template src="./template.html" />
<style scoped src="./style.css" />
