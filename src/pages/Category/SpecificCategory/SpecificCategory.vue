<script>
import { ref } from "vue";

export default {
  props: {
    actived: {
      type: Object,
      require: true,
    },
  },
  setup(props) {
    const currentActived = ref(props.actived);
    return {
      currentActived,
    };
  },
};
</script>
<template src="./template.html" />
<style src="./style.css" />
