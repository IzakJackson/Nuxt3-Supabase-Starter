<template>
  <div class="flex justify-between flex-1 sm:hidden">
    <a
      href="#"
      class="relative inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md  hover:bg-gray-50"
      >Previous</a
    >
    <a
      href="#"
      class="relative inline-flex items-center px-4 py-2 ml-3 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md  hover:bg-gray-50"
      >Next</a
    >
  </div>
  <div class="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
    <div>
      <p class="text-sm text-gray-700">
        Showing
        {{ " " }}
        <span class="font-medium">1</span>
        {{ " " }}
        to
        {{ " " }}
        <span class="font-medium">10</span>
        {{ " " }}
        of
        {{ " " }}
        <span class="font-medium">97</span>
        {{ " " }}
        results
      </p>
    </div>
    <div>
      <nav
        class="inline-flex -space-x-px rounded-md shadow-sm isolate"
        aria-label="Pagination"
      >
        <a
          href="#"
          class="relative inline-flex items-center px-2 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300  rounded-l-md hover:bg-gray-50 focus:z-20"
        >
          <span class="sr-only">Previous</span>
          <ChevronLeftIcon class="w-5 h-5" aria-hidden="true" />
        </a>
        <!-- Current: "z-10 bg-indigo-50 border-indigo-500 text-indigo-600", Default: "bg-white border-gray-300 text-gray-500 hover:bg-gray-50" -->
        <a
          href="#"
          aria-current="page"
          class="relative z-10 inline-flex items-center px-4 py-2 text-sm font-medium text-indigo-600 border border-indigo-500  bg-indigo-50 focus:z-20"
          >1</a
        >
        <a
          href="#"
          class="relative inline-flex items-center px-4 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300  hover:bg-gray-50 focus:z-20"
          >2</a
        >
        <a
          href="#"
          class="relative items-center hidden px-4 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300  hover:bg-gray-50 focus:z-20 md:inline-flex"
          >3</a
        >
        <span
          class="relative inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 "
          >...</span
        >
        <a
          href="#"
          class="relative items-center hidden px-4 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300  hover:bg-gray-50 focus:z-20 md:inline-flex"
          >8</a
        >
        <a
          href="#"
          class="relative inline-flex items-center px-4 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300  hover:bg-gray-50 focus:z-20"
          >9</a
        >
        <a
          href="#"
          class="relative inline-flex items-center px-4 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300  hover:bg-gray-50 focus:z-20"
          >10</a
        >
        <a
          href="#"
          class="relative inline-flex items-center px-2 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300  rounded-r-md hover:bg-gray-50 focus:z-20"
        >
          <span class="sr-only">Next</span>
          <ChevronRightIcon class="w-5 h-5" aria-hidden="true" />
        </a>
      </nav>
    </div>
  </div>
</template>

<script setup>
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/vue/20/solid";
</script>