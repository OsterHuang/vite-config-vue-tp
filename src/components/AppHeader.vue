<template>
  <div class="flex justify-between">

    <a v-for="appLink in appLinks" :key="appLink.label" :href="appLink.url">
      {{ appLink.label }}
    </a>

    <!-- <a href="#">Home</a>
    <a href="#">Product</a>
    <a href="#">Contact Us</a> -->
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'

interface PageLink {
  label: string;
  url: string;
}
const AppLinks: PageLink[] = [
  {label: 'Home', url: '#'},
  {label: 'Product', url: '#'},
  {label: 'Contact Us', url: '/contact'},
  {label: 'Profile', url: '/profile'},
]

const appLinks = reactive<PageLink[]>(AppLinks)

</script>

<style scoped lang="scss">

</style>
