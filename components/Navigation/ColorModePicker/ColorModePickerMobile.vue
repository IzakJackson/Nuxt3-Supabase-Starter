<template>
  <div class="px-3 mb-2">
    <label for="colorMode" class="block text-base font-medium text-gray-400"
      >Colour mode</label
    >
    <select
      id="colorMode"
      class="block w-full py-2 pl-3 pr-10 mt-1 text-base text-gray-100 bg-gray-800 border-gray-300 border-gray-700 rounded-md  focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
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