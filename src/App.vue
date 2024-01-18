<script setup lang="ts">
import HelloWorld from '@/components/HelloWorld.vue'
import AppHeader from './components/AppHeader.vue'
import UserProfile from './components/UserProfile.vue'
import CateGallery from './components/CatGallery.vue'
</script>

<template>
  <AppHeader />

  <div class="two-logo">
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="@/assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <HelloWorld msg="Vite + Vue" />
  <UserProfile />

  <CateGallery />
  
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
