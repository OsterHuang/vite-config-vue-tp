<template>
  <div class="user-profile">
    <div class="user-profile-row">
      <span class="label">name</span>
      <span class="value">{{ userProfile?.name }}</span>
    </div>
    <div class="user-profile-row">
      <span class="label">nickname</span>
      <span class="value">{{ userProfile?.nickname }}</span>
    </div>
    <div class="user-profile-row">
      <span class="label">title</span>
      <span class="value">{{ userProfile?.title }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  ref,
  onBeforeMount
} from 'vue';

interface UserProfile {
  name: string,
  nickname: string,
  title: string
}
const userProfile = ref<UserProfile>(null)
const baseUrl = import.meta.env.BASE_URL

onBeforeMount(() => {
  fetch(`${baseUrl}/api/user-profile`)
    .then(res => res.json())
    .then(resData => {
      console.log("Oster resData", resData)
      userProfile.value = resData
    })
})

</script>

<style scoped lang="scss">
.user-profile {
  width: 600px;

  &-row {
    display: flex;
    > span {
      border: 1px solid #ccc;
      padding: 4px;
    }

    > .label {
      @apply text-left;
      flex: 0.2;
    }
    > .value {
      flex: 1;
    }
  }
}
</style>