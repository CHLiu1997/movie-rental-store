<template>
  <button
    class="go-top"
    @click="goTop"
    :class="yScrollValue > 200 ? 'd-block' : 'd-none'"
  ></button>
</template>

<script setup>
import { onMounted, ref } from "vue";
onMounted(() => {
  window.addEventListener("scroll", scrollWatch);
});
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
</script>
