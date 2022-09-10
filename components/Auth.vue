<template>
  <div
    class="flex items-center justify-center min-h-full px-4 py-12  sm:px-6 lg:px-8"
  >
    <div class="w-full max-w-md space-y-8">
      <div>
        <img
          class="w-auto h-12 mx-auto"
          src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
          alt="Your Company"
        />
        <h2
          class="mt-6 text-3xl font-bold tracking-tight text-center text-gray-900 "
        >
          Sign in to your account
        </h2>
        <p class="mt-2 text-sm text-center text-gray-600">
          Sign in via magic link with your email below.
        </p>
      </div>
      <form class="mt-8 space-y-6" @submit.prevent="handleLogin">
        <input type="hidden" name="remember" value="true" />
        <div class="-space-y-px rounded-md shadow-sm">
          <div>
            <label for="email-address" class="sr-only">Email address</label>
            <input
              id="email-address"
              v-model="email"
              name="email"
              type="email"
              autocomplete="email"
              required
              class="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-md appearance-none  focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              placeholder="Email address"
            />
          </div>
        </div>

        <div class="flex items-center justify-between">
          <div class="flex items-center">
            <input
              id="remember-me"
              name="remember-me"
              type="checkbox"
              class="w-4 h-4 text-indigo-600 border-gray-300 rounded  focus:ring-indigo-500"
            />
            <label for="remember-me" class="block ml-2 text-sm text-gray-900"
              >Remember me</label
            >
          </div>
        </div>

        <div>
          <button
            type="submit"
            class="relative inline-flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md  group hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            :value="loading ? 'Loading' : 'Send magic link'"
            :disabled="loading"
          >
            <span class="absolute inset-y-0 left-0 flex items-center pl-3">
              <LockClosedIcon
                class="w-5 h-5 text-indigo-500 group-hover:text-indigo-400"
                aria-hidden="true"
              />
            </span>
            {{ loading ? "Sending magic link" : "Sign in" }}
            <LoadingSpinner class="w-4 h-4 ml-4" v-if="loading" />
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { LockClosedIcon } from "@heroicons/vue/20/solid";

useHead({
  title: "Sign in",
  viewport: "width=device-width, initial-scale=1, maximum-scale=1",
  charset: "utf-8",
  meta: [{ name: "description", content: "My amazing site." }],
  htmlAttrs: {
    class: "h-full bg-gray-50",
  },
  bodyAttrs: {
    class: "h-full",
  },
});

const supabase = useSupabaseClient();

const loading = ref(false);
const email = ref("");
const handleLogin = async () => {
  try {
    loading.value = true;
    const { error } = await supabase.auth.signIn({ email: email.value });
    if (error) throw error;
    alert("Check your email for the login link!");
  } catch (error) {
    alert(error.error_description || error.message);
  } finally {
    loading.value = false;
  }
};
</script>