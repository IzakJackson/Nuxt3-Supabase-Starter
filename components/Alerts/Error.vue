<template>
  <div class="p-4 rounded-md bg-red-50">
    <div class="flex">
      <div class="flex-shrink-0">
        <XCircleIcon class="w-5 h-5 text-red-400" aria-hidden="true" />
      </div>
      <div class="ml-3">
        <h3 class="text-sm font-medium text-red-800">
          {{ message }}
        </h3>
      </div>
    </div>
  </div>
</template>

<script setup>
import { XCircleIcon } from "@heroicons/vue/20/solid";
const props = defineProps(["message"]);
const { message } = toRefs(props);
</script>