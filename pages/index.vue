<template>
  <div class="px-5 py-6 bg-white rounded-lg shadow dark:bg-gray-800 sm:px-6">
    <div
      class="border-4 border-gray-200 border-dashed rounded-lg  dark:border-gray-700 h-96"
    />
  </div>
</template>

<script setup>
definePageMeta({
  title: "Dashboard",
  middleware: "auth",
});
</script>