<template>
  <div class="cat-gallery">
    <div class="image">
      <img src="../assets/cat-1.jpg">
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
