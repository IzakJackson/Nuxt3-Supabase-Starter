<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div
    class="overflow-hidden bg-white divide-y divide-gray-200 rounded-lg shadow"
  >
    <!-- Card Header -->
    <div class="px-4 py-5 sm:px-6 bg-gray-50">
      <div class="flex items-center justify-between">
        <div>You have {{ contacts.length }} contacts.</div>
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
        <li v-for="contact in contacts" :key="contact.email">
          <a :href="contact.href" class="block hover:bg-gray-50">
            <div class="flex items-center px-4 py-4 sm:px-6">
              <div class="flex items-center flex-1 min-w-0">
                <div class="flex-shrink-0">
                  <img
                    class="w-12 h-12 rounded-full"
                    :src="contact.imageUrl"
                    alt=""
                  />
                </div>
                <div
                  class="flex-1 min-w-0 px-4 md:grid md:grid-cols-2 md:gap-4"
                >
                  <div>
                    <p class="text-sm font-medium text-indigo-600 truncate">
                      {{ contact.fullName }}
                    </p>
                    <p
                      class="flex items-center mt-2 space-x-4 text-sm text-gray-500 "
                    >
                      <span class="flex items-center">
                        <EnvelopeIcon
                          class="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400"
                          aria-hidden="true"
                        />
                        <span class="truncate">{{ contact.email }}</span>
                      </span>
                      <span class="flex items-center">
                        <PhoneIcon
                          class="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400"
                          aria-hidden="true"
                        />
                        <span class="truncate">{{ contact.phone }}</span>
                      </span>
                    </p>
                  </div>
                  <div class="hidden md:block">
                    <div>
                      <div class="flex justify-end flex-shrink-0">
                        <p
                          class="inline-flex px-2 text-xs font-semibold leading-5 text-green-800 bg-green-100 rounded-full "
                        >
                          {{ contact.type }}
                        </p>
                      </div>
                      <p
                        class="flex items-center justify-end mt-2 text-sm text-gray-500 "
                      >
                        <CalendarIcon
                          class="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400"
                          aria-hidden="true"
                        />
                        Last contacted on
                        <time class="ml-1" :datetime="contact.contactedDate">
                          {{ contact.contactedDateFull }}
                        </time>
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
      <NavigationPagination />
    </div>
    <!-- End Pagination -->
  </div>
</template>

<script setup>
definePageMeta({
  title: "Contacts",
});

import {
  CalendarIcon,
  PhoneIcon,
  ChevronRightIcon,
  EnvelopeIcon,
} from "@heroicons/vue/20/solid";

const contacts = [
  {
    firstName: "Ricardo",
    lastName: "Cooper",
    fullName: "Ricardo Cooper",
    email: "ricardo.cooper@example.com",
    phone: "03456789012",
    imageUrl:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    contactedDate: "2020-01-07",
    contactedDateFull: "January 7, 2020",
    type: "Lead",
    href: "#",
  },
  {
    firstName: "Kristen",
    lastName: "Ramos",
    fullName: "Kristen Ramos",
    email: "kristen.ramos@example.com",
    phone: "02345678901",
    imageUrl:
      "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    contactedDate: "2020-01-07",
    contactedDateFull: "January 7, 2020",
    type: "Prospect",
    href: "#",
  },
  {
    firstName: "Ted",
    lastName: "Fox",
    fullName: "Ted Fox",
    email: "ted.fox@example.com",
    phone: "01234567890",
    imageUrl:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    contactedDate: "2020-01-07",
    contactedDateFull: "January 7, 2020",
    type: "Client",
    href: "#",
  },
];
</script>