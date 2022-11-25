<template>
  <div class="flex flex-col min-h-full pt-16 pb-12">
    <main
      class="flex flex-col justify-center flex-grow w-full px-4 mx-auto  max-w-7xl sm:px-6 lg:px-8"
    >
      <div class="flex justify-center flex-shrink-0">
        <a href="/" class="inline-flex">
          <span class="sr-only">Your Company</span>
          <img
            class="w-auto h-12"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt=""
          />
        </a>
      </div>
      <div class="py-16">
        <div class="text-center">
          <p class="text-base font-semibold text-indigo-500">
            {{ error.statusCode }}
          </p>
          <h1
            class="mt-2 text-4xl font-bold tracking-tight text-gray-900  dark:text-white sm:text-5xl"
          >
            Ooops.
          </h1>
          <p class="mt-2 text-base text-gray-500 dark:text-gray-400">
            {{ error.message }}
          </p>
          <div class="mt-6">
            <a
              href="/"
              class="text-base font-medium text-indigo-600  hover:text-indigo-500"
            >
              Go back home
              <span aria-hidden="true"> &rarr;</span>
            </a>
          </div>
        </div>
      </div>
    </main>
    <footer class="flex-shrink-0 w-full px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <nav class="flex justify-center space-x-4">
        <a
          href="#"
          class="text-sm font-medium text-gray-500  hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-500"
          >Contact Support</a
        >
        <span
          class="inline-block border-l border-gray-300 dark:border-gray-700"
          aria-hidden="true"
        />
        <a
          href="#"
          class="text-sm font-medium text-gray-500  hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-500"
          >Status</a
        >
        <span
          class="inline-block border-l border-gray-300 dark:border-gray-700"
          aria-hidden="true"
        />
        <a
          href="#"
          class="text-sm font-medium text-gray-500  hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-500"
          >Twitter</a
        >
      </nav>
    </footer>
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
defineProps(["error"]);
</script>