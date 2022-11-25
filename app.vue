<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup>
const route = useRoute();

useHead({
  titleTemplate: `${route.meta.title} - Nuxt 3 Supabase Starter`,
  htmlAttrs: { class: "h-full" },
  bodyAttrs: { class: "h-full" },
});
</script>
