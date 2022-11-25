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
        Reset your password
      </h2>
    </div>

    <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <div
        class="px-4 py-8 bg-white shadow  dark:bg-gray-800 sm:rounded-lg sm:px-10"
      >
        <FormKit
          type="form"
          @submit="resetPassword"
          submit-label="Reset password"
          :submit-attrs="{
            inputClass:
              'flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm  disabled:cursor-not-allowed hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2',
          }"
          :incomplete-message="false"
          form-class="space-y-6"
        >
          <FormKit
            type="password"
            label="Password"
            v-model="password"
            validation="required|length:6"
            validation-visibility="dirty"
            name="password"
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
            label="Confirm password"
            validation="required|confirm"
            validation-visibility="dirty"
            validation-label="Password confirmation"
            name="password_confirm"
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
      </div>
      <AlertsError class="mt-4" v-model:message="errorMsg" v-if="errorMsg" />
      <AlertsSuccess
        class="mt-4"
        v-model:message="successMsg"
        v-if="successMsg"
      />
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "auth",
  title: "Sign up",
  middleware: ["auth"],
});

// Auth
const client = useSupabaseClient();
const user = useSupabaseUser();
const password = ref("");
const loading = ref(false);
const showError = ref(false);
const errorMsg = ref("");
const successMsg = ref("");

// Login method using providers
const resetPassword = async () => {
  try {
    showError.value = false;
    loading.value = true;
    const { user, error } = await client.auth.updateUser({
      password: password.value,
    });
    if (error) throw error;
    successMsg.value = "Password reset. Redirecting...";
    setTimeout(() => {
      navigateTo("/");
    }, 3000);
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