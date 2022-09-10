<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div
    class="overflow-hidden bg-white divide-y divide-gray-200 rounded-lg shadow"
  >
    <!-- Card Header -->
    <div class="px-4 py-5 sm:px-6 bg-gray-50">
      <div class="flex items-center justify-between">
        <div>You have 0 contacts.</div>
        <button
          type="button"
          class="inline-flex items-center px-4 py-2 ml-auto text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm  hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Add Contact
        </button>
      </div>
    </div>
    <!-- End Card Header -->

    <!-- Contacts List -->
    <div>
      <ul role="list" class="divide-y divide-gray-200">
        <li
          v-for="application in applications"
          :key="application.applicant.email"
        >
          <a :href="application.href" class="block hover:bg-gray-50">
            <div class="flex items-center px-4 py-4 sm:px-6">
              <div class="flex items-center flex-1 min-w-0">
                <div class="flex-shrink-0">
                  <img
                    class="w-12 h-12 rounded-full"
                    :src="application.applicant.imageUrl"
                    alt=""
                  />
                </div>
                <div
                  class="flex-1 min-w-0 px-4 md:grid md:grid-cols-2 md:gap-4"
                >
                  <div>
                    <p class="text-sm font-medium text-indigo-600 truncate">
                      {{ application.applicant.name }}
                    </p>
                    <p class="flex items-center mt-2 text-sm text-gray-500">
                      <EnvelopeIcon
                        class="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400"
                        aria-hidden="true"
                      />
                      <span class="truncate">{{
                        application.applicant.email
                      }}</span>
                    </p>
                  </div>
                  <div class="hidden md:block">
                    <div>
                      <p class="text-sm text-gray-900">
                        Applied on
                        {{ " " }}
                        <time :datetime="application.date">{{
                          application.dateFull
                        }}</time>
                      </p>
                      <p class="flex items-center mt-2 text-sm text-gray-500">
                        <CheckCircleIcon
                          class="mr-1.5 h-5 w-5 flex-shrink-0 text-green-400"
                          aria-hidden="true"
                        />
                        {{ application.stage }}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <ChevronRightIcon
                  class="w-5 h-5 text-gray-400"
                  aria-hidden="true"
                />
              </div>
            </div>
          </a>
        </li>
      </ul>
    </div>
    <!-- End Contacts List -->

    <!-- Pagination -->
    <div class="px-4 py-5 sm:px-6 bg-gray-50">
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
    </div>
    <!-- End Pagination -->
  </div>
</template>

<script setup>
definePageMeta({
  title: "Contacts",
});

import {
  CheckCircleIcon,
  ChevronRightIcon,
  ChevronLeftIcon,
  EnvelopeIcon,
} from "@heroicons/vue/20/solid";

const applications = [
  {
    applicant: {
      name: "Ricardo Cooper",
      email: "ricardo.cooper@example.com",
      imageUrl:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    date: "2020-01-07",
    dateFull: "January 7, 2020",
    stage: "Completed phone screening",
    href: "#",
  },
  {
    applicant: {
      name: "Kristen Ramos",
      email: "kristen.ramos@example.com",
      imageUrl:
        "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    date: "2020-01-07",
    dateFull: "January 7, 2020",
    stage: "Completed phone screening",
    href: "#",
  },
  {
    applicant: {
      name: "Ted Fox",
      email: "ted.fox@example.com",
      imageUrl:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    date: "2020-01-07",
    dateFull: "January 7, 2020",
    stage: "Completed phone screening",
    href: "#",
  },
];
</script>