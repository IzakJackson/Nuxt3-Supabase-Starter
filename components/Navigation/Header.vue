<template>
  <div class="pb-32 bg-gray-900">
    <Disclosure as="nav" class="bg-gray-900" v-slot="{ open }">
      <div class="mx-auto max-w-screen-2xl sm:px-6 lg:px-8">
        <div class="border-b border-gray-700">
          <div class="flex items-center justify-between h-16 px-4 sm:px-0">
            <div class="flex items-center">
              <div class="flex-shrink-0">
                <a
                  href="/"
                  :aria-current="route.path === `/` ? 'page' : undefined"
                >
                  <img
                    class="w-8 h-8"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                    alt="Your Company"
                  />
                </a>
              </div>
              <div class="hidden md:block">
                <div class="inline-flex items-center ml-10 space-x-4">
                  <a
                    v-for="item in navigation"
                    :key="item.name"
                    :href="item.href"
                    :class="[
                      route.path.includes(item.href)
                        ? 'bg-gray-800 text-white'
                        : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                      'px-3 py-2 rounded-md text-sm font-medium',
                    ]"
                    :aria-current="
                      route.path.includes(item.href) ? 'page' : undefined
                    "
                    >{{ item.name }}</a
                  >
                </div>
              </div>
            </div>
            <div class="hidden md:block">
              <div class="flex items-center ml-4 md:ml-6">
                <button
                  type="button"
                  class="p-1 text-gray-400 bg-gray-900 rounded-full  hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  <span class="sr-only">View notifications</span>
                  <BellIcon class="w-6 h-6" aria-hidden="true" />
                </button>

                <!-- Profile dropdown -->
                <Menu as="div" class="relative ml-3">
                  <div>
                    <MenuButton
                      class="flex items-center max-w-xs text-sm bg-gray-900 rounded-full  focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                    >
                      <span class="sr-only">Open user menu</span>
                      <div
                        class="w-8 h-8 overflow-hidden text-gray-800 bg-gray-700 rounded-full "
                      >
                        <UserAvatar v-model:path="userSession.avatar_url" />
                      </div>
                    </MenuButton>
                  </div>
                  <transition
                    enter-active-class="transition duration-100 ease-out"
                    enter-from-class="transform scale-95 opacity-0"
                    enter-to-class="transform scale-100 opacity-100"
                    leave-active-class="transition duration-75 ease-in"
                    leave-from-class="transform scale-100 opacity-100"
                    leave-to-class="transform scale-95 opacity-0"
                  >
                    <MenuItems
                      class="absolute right-0 z-10 w-48 py-1 mt-2 overflow-hidden origin-top-right bg-white rounded-md shadow-lg  dark:bg-gray-700 ring-1 ring-black ring-opacity-5 focus:outline-none"
                    >
                      <NavigationColorModePicker
                        class="block px-4 py-4 mb-1 -mt-2 text-sm text-gray-700 bg-gray-100 border-b border-gray-200  dark:bg-gray-800 dark:border-gray-700"
                      />
                      <MenuItem
                        v-for="item in userNavigation"
                        :key="item.name"
                        v-slot="{ active }"
                      >
                        <a
                          :href="item.href"
                          :class="[
                            active ? 'bg-gray-100 dark:bg-gray-800' : '',
                            'block px-4 py-2 text-sm text-gray-700 dark:text-gray-200',
                          ]"
                          >{{ item.name }}</a
                        >
                      </MenuItem>
                      <a
                        href="/admin"
                        class="block w-full px-4 py-2 text-sm text-left text-gray-700  dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
                        >Admin</a
                      >
                      <button
                        type="button"
                        @click="signOut"
                        :disabled="loading"
                        class="block w-full px-4 py-2 text-sm text-left text-gray-700  disabled:cursor-not-allowed dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
                      >
                        Sign out
                        <NavigationSpinner
                          class="w-4 h-4 ml-4"
                          v-if="loading"
                        />
                      </button>
                    </MenuItems>
                  </transition>
                </Menu>
              </div>
            </div>
            <div class="flex -mr-2 md:hidden">
              <!-- Mobile menu button -->
              <DisclosureButton
                class="inline-flex items-center justify-center p-2 text-gray-400 bg-gray-800 rounded-md  hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
              >
                <span class="sr-only">Open main menu</span>
                <Bars3Icon
                  v-if="!open"
                  class="block w-6 h-6"
                  aria-hidden="true"
                />
                <XMarkIcon v-else class="block w-6 h-6" aria-hidden="true" />
              </DisclosureButton>
            </div>
          </div>
        </div>
      </div>

      <DisclosurePanel class="border-b border-gray-700 md:hidden">
        <div class="px-2 py-3 space-y-1 sm:px-3">
          <DisclosureButton
            v-for="item in navigation"
            :key="item.name"
            as="a"
            :href="item.href"
            :class="[
              route.path.includes(item.href)
                ? 'bg-gray-900 text-white'
                : 'text-gray-300 hover:bg-gray-700 hover:text-white',
              'block px-3 py-2 rounded-md text-base font-medium',
            ]"
            :aria-current="route.path.includes(item.href) ? 'page' : undefined"
            >{{ item.name }}</DisclosureButton
          >
        </div>
        <div class="pt-4 pb-3 border-t border-gray-700">
          <div class="flex items-center px-5">
            <div class="flex-shrink-0">
              <div
                class="w-10 h-10 overflow-hidden text-gray-800 bg-gray-700 rounded-full "
              >
                <UserAvatar v-model:path="userSession.avatar_url" />
              </div>
            </div>
            <div class="ml-3">
              <div class="text-base font-medium leading-none text-white">
                {{ userSession.first_name }} {{ userSession.last_name }}
              </div>
              <div class="text-sm font-medium leading-none text-gray-400">
                {{ userSession.user.email }}
              </div>
            </div>
            <button
              type="button"
              class="flex-shrink-0 p-1 ml-auto text-gray-400 bg-gray-900 rounded-full  hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
            >
              <span class="sr-only">View notifications</span>
              <BellIcon class="w-6 h-6" aria-hidden="true" />
            </button>
          </div>
          <div class="px-2 mt-3 space-y-1">
            <NavigationColorModePickerMobile />
            <DisclosureButton
              v-for="item in userNavigation"
              :key="item.name"
              as="a"
              :href="item.href"
              class="block px-3 py-2 text-base font-medium text-gray-400 rounded-md  hover:bg-gray-700 hover:text-white"
              >{{ item.name }}</DisclosureButton
            >
            <DisclosureButton
              as="a"
              href="/admin"
              class="block px-3 py-2 text-base font-medium text-gray-400 rounded-md  hover:bg-gray-700 hover:text-white"
              >Admin</DisclosureButton
            >
            <DisclosureButton
              as="button"
              @click="signOut"
              type="button"
              class="block w-full px-3 py-2 text-base font-medium text-left text-gray-400 rounded-md  hover:bg-gray-700 hover:text-white"
              >Sign out</DisclosureButton
            >
          </div>
        </div>
      </DisclosurePanel>
    </Disclosure>
    <header class="py-10">
      <div class="px-4 mx-auto max-w-screen-2xl sm:px-6 lg:px-8">
        <h1 class="text-3xl font-bold tracking-tight text-white">
          {{ route.meta.title }}
        </h1>
      </div>
    </header>
  </div>
</template>

<script setup>
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/vue";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/vue/24/outline";
import { useUserSessionStore } from "~~/stores/userSession";

// Navigation
const route = useRoute();
const navigation = [
  { name: "Contacts", href: "/contacts" },
  { name: "Companies", href: "/companies" },
  { name: "Deals", href: "/deals" },
  { name: "Proposals", href: "/proposals" },
  { name: "Projects", href: "/projects" },
];
const userNavigation = [{ name: "Account", href: "/account" }];

// Authentication
const client = useSupabaseClient();
const userSession = useUserSessionStore();
userSession.getUser();
userSession.getProfile();

const signOut = async () => {
  await client.auth.signOut();
  var cookies = document.cookie.split(";");

  for (var i = 0; i < cookies.length; i++) {
    var cookie = cookies[i];
    var eqPos = cookie.indexOf("=");
    var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
    document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
  }
  userSession.user = null;
  navigateTo("/signin");
};
</script>