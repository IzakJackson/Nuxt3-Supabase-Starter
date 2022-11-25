<template>
  <div>
    <div class="sm:mx-auto sm:w-full sm:max-w-md">
      <img
        class="w-auto h-12 mx-auto"
        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
        alt="Your Company"
      />
      <h2
        class="mt-6 text-3xl font-bold tracking-tight text-center text-gray-900  dark:text-white"
      >
        Sign in to your account
      </h2>
      <p class="mt-2 text-sm text-center text-gray-600 dark:text-gray-400">
        Or
        {{ " " }}
        <a
          href="/signup"
          class="font-medium text-indigo-600 hover:text-indigo-500"
          >sign up</a
        >
      </p>
    </div>

    <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <div
        class="px-4 py-8 bg-white shadow  dark:bg-gray-800 sm:rounded-lg sm:px-10"
      >
        <FormKit
          type="form"
          @submit="login"
          submit-label="Sign in"
          :submit-attrs="{
            inputClass:
              'flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm  disabled:cursor-not-allowed hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2',
          }"
          :incomplete-message="false"
          form-class="space-y-6"
        >
          <FormKit
            type="email"
            label="Email address"
            v-model="email"
            validation="required|email"
            validation-visibility="dirty"
            :classes="{
              label:
                'block text-sm font-medium text-gray-700 dark:text-gray-300',
              input:
                'block w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none  dark:bg-gray-700 dark:border-gray-900 dark:text-white focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm',
              message: 'text-red-500 text-xs mt-1',
              invalid: 'border-red-500',
            }"
          />
          <FormKit
            type="password"
            label="Password"
            v-model="password"
            validation="required"
            validation-visibility="dirty"
            :classes="{
              label:
                'block text-sm font-medium text-gray-700 dark:text-gray-300',
              input:
                'block w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none  dark:bg-gray-700 dark:border-gray-900 dark:text-white focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm',
              message: 'text-red-500 text-xs mt-1',
              invalid: 'border-red-500',
            }"
          />
        </FormKit>

        <div class="mt-6 text-center">
          <div class="text-sm">
            <a
              href="/forgot-password"
              class="font-medium text-indigo-600 hover:text-indigo-500"
              >Forgot your password?</a
            >
          </div>
        </div>
      </div>
      <AlertsError class="mt-4" v-model:message="errorMsg" v-if="errorMsg" />
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "auth",
  title: "Sign in",
  middleware: ["auth"],
});

//Auth
const client = useSupabaseClient();
const email = ref("");
const password = ref("");
const loading = ref(false);
const errorMsg = ref("");

const login = async () => {
  try {
    loading.value = true;
    const { session, error } = await client.auth.signInWithPassword({
      email: email.value,
      password: password.value,
    });
    if (error) throw error;
    navigateTo("/");
  } catch (error) {
    errorMsg.value = error.message;
    setTimeout(() => {
      errorMsg.value = "";
    }, 3000);
  } finally {
    loading.value = false;
  }
};
</script>