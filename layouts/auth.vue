<template>
  <div class="flex flex-col justify-center min-h-full py-12 sm:px-6 lg:px-8">
    <slot></slot>
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