<template>
  <TransitionRoot as="template" :show="openModal">
    <Dialog as="div" class="relative z-10" @close="$emit('close-modal')">
      <TransitionChild
        as="template"
        enter="ease-out duration-300"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="ease-in duration-200"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div
          class="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75  backdrop-blur-sm dark:bg-gray-700 dark:bg-opacity-75"
        />
      </TransitionChild>

      <div class="fixed inset-0 z-10 overflow-y-auto">
        <div
          class="flex items-end justify-center min-h-full p-4 text-center  sm:items-center sm:p-0"
        >
          <TransitionChild
            as="template"
            enter="ease-out duration-300"
            enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enter-to="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leave-from="opacity-100 translate-y-0 sm:scale-100"
            leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <DialogPanel
              class="relative px-4 pt-5 pb-4 overflow-hidden text-left transition-all transform bg-white rounded-lg shadow-xl  dark:bg-gray-800 sm:my-8 sm:w-full sm:max-w-lg sm:p-6"
            >
              <div class="sm:flex sm:items-start">
                <div
                  class="flex items-center justify-center flex-shrink-0 w-12 h-12 mx-auto bg-red-100 rounded-full  sm:mx-0 sm:h-10 sm:w-10"
                >
                  <ExclamationTriangleIcon
                    class="w-6 h-6 text-red-600"
                    aria-hidden="true"
                  />
                </div>
                <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                  <DialogTitle
                    as="h3"
                    class="text-lg font-medium leading-6 text-gray-900  dark:text-white"
                    >Delete account</DialogTitle
                  >
                  <div class="mt-2">
                    <p class="text-sm text-gray-500 dark:text-gray-400">
                      Are you sure you want to delete your account? All of your
                      data will be permanently removed from our servers forever.
                      This action cannot be undone.
                    </p>
                  </div>
                </div>
              </div>
              <div class="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
                <button
                  type="button"
                  class="inline-flex justify-center w-full px-4 py-2 text-base font-medium text-white bg-red-600 border border-transparent rounded-md shadow-sm  dark:focus:ring-offset-gray-800 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
                  @click="deleteUser"
                >
                  {{ loading2 ? "Deleting..." : "Delete" }}
                </button>
                <button
                  type="button"
                  class="inline-flex justify-center w-full px-4 py-2 mt-3 text-base font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm  dark:focus:ring-offset-gray-800 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:w-auto sm:text-sm"
                  @click="$emit('close-modal')"
                  ref="cancelButtonRef"
                >
                  Cancel
                </button>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script setup>
import { ref } from "vue";
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  TransitionChild,
  TransitionRoot,
} from "@headlessui/vue";
import { ExclamationTriangleIcon } from "@heroicons/vue/24/outline";

const props = defineProps(["id"]);
const { id } = toRefs(props);

const openModal = ref(false);

const client = useSupabaseClient();
const loading = ref(true);

// Delete User
const deleteUser = async () => {
  try {
    loading.value = true;
    const { data, error } = await client.auth.admin.deleteUser(id.value);
    if (error) throw error;
    $emit("close-modal");
  } catch (error) {
    alert(error.message);
  } finally {
    loading.value = false;
  }
};
</script>