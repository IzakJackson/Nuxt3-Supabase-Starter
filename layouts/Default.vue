<template>
  <div class="min-h-full">
    <NavigationHeader />

    <main class="-mt-32">
      <div class="px-4 pb-12 mx-auto max-w-screen-2xl sm:px-6 lg:px-8">
        <slot></slot>
      </div>
    </main>
  </div>
</template>

<script setup>
useHead({
  htmlAttrs: {
    class: "h-full antialiased",
  },
  bodyAttrs: {
    class: "h-full bg-gray-100 dark:bg-gray-900",
  },
});
</script>