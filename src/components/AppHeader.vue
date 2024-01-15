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
const baseUrl = import.meta.env.BASE_URL

interface PageLink {
  label: string;
  url: string;
}
const AppLinks: PageLink[] = [
  {label: 'Home', url: `${baseUrl}/`},
  {label: 'Product', url: `${baseUrl}/product`},
  {label: 'Contact Us', url: `${baseUrl}/contact`},
  {label: 'Profile', url: `${baseUrl}/profile`},
]

const appLinks = reactive<PageLink[]>(AppLinks)

</script>

<style scoped lang="scss">

</style>
