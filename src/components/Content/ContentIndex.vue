<script>
import { onMounted, ref } from "vue";
const setup = () => {
  onMounted(() => {
    setTimeout(() => {
      loading.value = false;
    }, 2000);
    window.addEventListener("scroll", scrollWatch);
  });
  const loading = ref(true);
  const yScrollValue = ref();
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
    scrollWatch,
    goTop,
  };
};
export default {
  setup,
};
</script>
<template src="./template.html" />
<style src="./style.css" />
