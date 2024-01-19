<template>
  <div class="cat-gallery">
    <div class="image">
      <img :src="`${IMAGE_SERVER_URL}/cat-1.jpg`">
    </div>
    <div class="image">
      <img src="../assets/cat-2.jpg">
    </div>
    <div class="image">
      <img src="../assets/cat-3.jpg">
    </div>
  </div>
</template>

<script setup lang="ts">
const IMAGE_SERVER_URL = import.meta.env.VITE_EXTERNAL_IMAGE_URL

console.log("Oster 4499 IMAGE_SERVER_URL", IMAGE_SERVER_URL)
</script>

<style scoped lang="scss">
.cat-gallery {
  display: flex;
  flex-wrap: wrap;

  .image {
    @apply m-1;
  }

  .image {
    width: 300px;
    height: 200px;
    > img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}
</style>
