<template>
  <div>
    <NuxtLayout v-if="user">
      <NuxtPage />
    </NuxtLayout>
    <Auth v-else />
  </div>
</template>

<script setup>
const user = useSupabaseUser();
</script>