<template>
  <div class="flex justify-between">

    <a v-for="appLink in appLinks" :key="appLink.label" :href="appLink.url" @click="onChangeView(appLink)">
      {{ appLink.label }}
    </a>

    <!-- <a href="#">Home</a>
    <a href="#">Product</a>
    <a href="#">Contact Us</a> -->
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import { PageLink, AppLinks } from '../model/AppPageModel'

const appLinks = reactive<PageLink[]>(AppLinks)

const emits = defineEmits(['changeView'])

function onChangeView(appLink: PageLink) {
  console.log("Oster 9966")
  emits('changeView', appLink)
}

</script>

<style scoped lang="scss">

</style>
