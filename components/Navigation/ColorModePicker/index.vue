<template>
  <div>
    <label
      for="colorMode"
      class="block text-sm font-medium text-gray-700 dark:text-gray-200"
      >Colour mode</label
    >
    <select
      id="colorMode"
      class="block w-full py-2 pl-3 pr-10 mt-1 text-base border-gray-300 rounded-md  dark:text-gray-100 dark:border-gray-900 dark:bg-gray-700 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
      v-model="$colorMode.preference"
    >
      <option value="system">System</option>
      <option value="light">Light</option>
      <option value="dark">Dark</option>
    </select>
  </div>
</template>

<script setup>
const colorMode = useColorMode();
</script>