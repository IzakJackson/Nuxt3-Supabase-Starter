<template>
  <div class="mt-5 space-y-6 md:mt-0">
    <FormKit
      type="form"
      @submit="updateProfile"
      :actions="false"
      :incomplete-message="false"
      form-class="space-y-6"
    >
      <div class="overflow-hidden rounded-md shadow">
        <div class="px-4 py-5 space-y-6 bg-white dark:bg-gray-800 sm:p-6">
          <div class="md:grid md:grid-cols-3 md:gap-6">
            <div class="md:col-span-1">
              <h3
                class="text-lg font-medium leading-6 text-gray-900  dark:text-white"
              >
                Profile
              </h3>
              <p class="mt-1 text-sm text-gray-500 dark:text-gray-400">
                This information will be displayed publicly so be careful what
                you share.
              </p>
            </div>
            <div class="md:col-span-2">
              <div class="px-4 py-5 space-y-6 bg-white dark:bg-gray-800 sm:p-6">
                <div class="grid grid-cols-2 gap-6">
                  <FormKit
                    type="text"
                    label="First name"
                    v-model="userSession.first_name"
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
                    type="text"
                    label="Last name"
                    v-model="userSession.last_name"
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
                    type="email"
                    label="Email address"
                    v-model="userSession.user.email"
                    validation="required|email"
                    validation-visibility="dirty"
                    :disabled="true"
                    :classes="{
                      outer: 'col-span-2',
                      label:
                        'block text-sm font-medium text-gray-700 dark:text-gray-300',
                      input:
                        'block w-full px-3 py-2 disabled:cursor-not-allowed disabled:text-gray-500 disabled:select-none placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none  dark:bg-gray-700 dark:border-gray-900 dark:text-white focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm',
                      message: 'text-red-500 text-xs mt-1',
                      invalid: 'border-red-500',
                    }"
                  />
                  <UserAvatarChanger
                    v-model:path="userSession.avatar_url"
                    @upload="updateProfile"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="px-4 py-3 space-x-4 text-right  bg-gray-50 dark:bg-gray-700 sm:px-6"
        >
          <FormKit
            type="submit"
            label="Save changes"
            :classes="{
              input:
                'inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm  dark:focus:ring-offset-gray-700 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2',
            }"
          />
        </div>
      </div>
    </FormKit>
    <AlertsError v-model:message="errorMsg" v-if="errorMsg" />
    <AlertsSuccess v-model:message="successMsg" v-if="successMsg" />

    <FormKit
      type="form"
      @submit="changePassword"
      submit-label="Reset password"
      :submit-attrs="{
        inputClass:
          'flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm  disabled:cursor-not-allowed hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2',
      }"
      :actions="false"
      :incomplete-message="false"
      form-class="space-y-6"
    >
      <div class="overflow-hidden rounded-md shadow">
        <div class="px-4 py-5 space-y-6 bg-white dark:bg-gray-800 sm:p-6">
          <div class="md:grid md:grid-cols-3 md:gap-6">
            <div class="md:col-span-1">
              <h3
                class="text-lg font-medium leading-6 text-gray-900  dark:text-white"
              >
                Security
              </h3>
              <p class="mt-1 text-sm text-gray-500 dark:text-gray-400">
                Update account password.
              </p>
            </div>
            <div class="md:col-span-2">
              <div class="px-4 py-5 space-y-6 bg-white dark:bg-gray-800 sm:p-6">
                <div class="grid grid-cols-2 gap-6">
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
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="px-4 py-3 space-x-4 text-right  bg-gray-50 dark:bg-gray-700 sm:px-6"
        >
          <FormKit
            type="submit"
            label="Update password"
            :classes="{
              input:
                'inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm  dark:focus:ring-offset-gray-700 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2',
            }"
          />
        </div>
      </div>
    </FormKit>
    <AlertsError v-model:message="errorMsg2" v-if="errorMsg2" />
    <AlertsSuccess v-model:message="successMsg2" v-if="successMsg2" />

    <!-- <div class="bg-white rounded-lg shadow dark:bg-gray-800">
      <div class="px-4 py-5 sm:p-6">
        <h3 class="text-lg font-medium leading-6 text-gray-900 dark:text-white">
          Delete your account
        </h3>
        <div class="max-w-xl mt-2 text-sm text-gray-500 dark:text-gray-400">
          <p>
            Once you delete your account, you will lose all data associated with
            it.
          </p>
        </div>
        <div class="mt-5">
          <a
            href="mailto:support@email.com"
            class="inline-flex items-center justify-center px-4 py-2 font-medium text-white bg-red-600 border border-transparent rounded-md dark:focus:ring-offset-gray-800 hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 sm:text-sm"
          >
            Contact support
          </a>
          <button
            type="button"
            @click="openModal = true"
            class="inline-flex items-center justify-center px-4 py-2 font-medium text-white bg-red-600 border border-transparent rounded-md dark:focus:ring-offset-gray-800 hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 sm:text-sm"
          >
            Delete account
          </button>
        </div>
      </div>
    </div> -->
    <!-- <UserDeleteDialogue
      :show="openModal"
      v-model:id="userId"
      @close-modal="openModal = false"
    /> -->
  </div>
</template>

<script setup>
import { useUserSessionStore } from "~~/stores/userSession";

definePageMeta({
  title: "Account",
  middleware: "auth",
});

// Authentication
const client = useSupabaseClient();
const userSession = useUserSessionStore();
userSession.getUser();
userSession.getProfile();

const password = ref("");

const loading = ref(true);
const loading2 = ref(true);
const errorMsg = ref("");
const errorMsg2 = ref("");
const successMsg = ref("");
const successMsg2 = ref("");
const showError = ref(false);

// Update Profile
loading.value = false;
const updateProfile = async () => {
  try {
    loading.value = true;
    const updates = {
      id: userSession.user.id,
      username: userSession.user.email,
      first_name: userSession.first_name,
      last_name: userSession.last_name,
      avatar_url: userSession.avatar_url,
      updated_at: new Date(),
    };
    console.log(updates);
    let { error } = await client.from("profiles").upsert(updates);
    if (error) throw error;
    successMsg.value = "Your profile has been updated.";
    setTimeout(() => {
      successMsg.value = "";
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

// Login method using providers
loading2.value = false;

const changePassword = async () => {
  try {
    showError.value = false;
    loading2.value = true;
    const { user, error } = await client.auth.updateUser({
      password: password.value,
    });
    if (error) throw error;
    successMsg2.value = "Your password has been updated.";
    setTimeout(() => {
      successMsg2.value = "";
    }, 3000);
  } catch (error) {
    errorMsg2.value = error.message;
    setTimeout(() => {
      errorMsg2.value = "";
    }, 3000);
  } finally {
    loading2.value = false;
  }
};

// Modal
// const openModal = ref(false);
</script>