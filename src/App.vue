<script setup lang="ts">
import { ref, computed, defineAsyncComponent  } from 'vue'

import AppHeader from '@/components/AppHeader.vue'

// import Home from './components/Home.vue'
// import HelloWorld from './components/HelloWorld.vue'
// import UserProfile from './components/UserProfile.vue'
// import CatGallery from './components/CatGallery.vue'

import { PageLink, AppLinks } from './model/AppPageModel'


const chosePage = ref<PageLink>(AppLinks[0])
const currentComponent = computed(() => {
  switch(chosePage.value.componentName) {
    case "Home": return defineAsyncComponent(() => import('./components/Home.vue'))
    case "HelloWorld": return defineAsyncComponent(() => import('./components/HelloWorld.vue'))
    case "UserProfile": return defineAsyncComponent(() => import('./components/UserProfile.vue'))
    case "CatGallery": return defineAsyncComponent(() => import('./components/CatGallery.vue'))
  }
  
})

function onChangeView(pageLink: PageLink) {
  console.log("Oster 7788")
  chosePage.value = pageLink
}
</script>

<template>
  <div class="vite-vue-app-demo">
    <AppHeader @changeView="onChangeView" class="vite-vue-app-header" />

    <div class="vite-vue-app-body">

    </div>

    <KeepAlive>
      <component :is="currentComponent" />
    </KeepAlive>
  </div>
  <!-- <HelloWorld msg="Vite + Vue" /> -->
  <!-- <UserProfile />
  <CateGallery /> -->
  
</template>

<style scoped lang="scss">
.vite-vue-app-demo {
  display: flex;
  flex-direction: column;
  height: 100%;
  min-width: 600px;

  .vite-vue-app-body {
    flex: 1;
  }
}
</style>
