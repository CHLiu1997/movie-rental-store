<template>
  <div class="loading-box" v-if="state.loading">
    <AppLoading />
  </div>
  <div v-else>
    <GoTop />
    <AppHeader />
    <RouterView />
    <AppFooter />
  </div>
</template>

<script setup>
import "reset.css";
import AppLoading from "@/components/AppLoading.vue";
import AppHeader from "@/components/AppHeader.vue";
import GoTop from "@/components/GoTop.vue";
import AppFooter from "@/components/AppFooter.vue";
import { state } from "./state";
</script>
<style src="@/styles/index.css" />
