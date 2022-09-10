<template>
  <div>
    <LoadingSpinner class="w-12 h-12 mx-auto" v-if="pageLoading" />
    <div v-else class="overflow-hidden bg-white rounded-lg shadow">
      <div class="px-4 py-5 sm:p-6">
        <form
          class="space-y-8 divide-y divide-gray-200"
          @submit.prevent="updateProfile"
        >
          <div class="space-y-8 divide-y divide-gray-200 sm:space-y-5">
            <div class="space-y-6 sm:space-y-5">
              <div>
                <h3 class="text-lg font-medium leading-6 text-gray-900">
                  Profile
                </h3>
                <p class="max-w-2xl mt-1 text-sm text-gray-500">
                  This information will be displayed publicly so be careful what
                  you share.
                </p>
              </div>

              <div class="space-y-6 sm:space-y-5">
                <div
                  class=" sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5"
                >
                  <label
                    for="username"
                    class="block text-sm font-medium text-gray-700  sm:mt-px sm:pt-2"
                    >Username</label
                  >
                  <div class="mt-1 sm:col-span-2 sm:mt-0">
                    <input
                      @keydown.space.prevent
                      type="text"
                      name="username"
                      id="username"
                      v-model="username"
                      class="block w-full max-w-lg border-gray-300 rounded-md shadow-sm  focus:border-indigo-500 focus:ring-indigo-500 sm:max-w-xs sm:text-sm"
                    />
                  </div>
                </div>

                <div
                  class=" sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5"
                >
                  <label
                    for="email"
                    class="block text-sm font-medium text-gray-700  sm:mt-px sm:pt-2"
                    >Email address</label
                  >
                  <div class="mt-1 sm:col-span-2 sm:mt-0">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autocomplete="email"
                      class="block w-full max-w-lg text-gray-500 bg-gray-100 border-gray-300 rounded-md shadow-sm cursor-not-allowed select-none  focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      :value="user.email"
                      disabled
                    />
                  </div>
                </div>

                <UserAvatarChanger
                  v-model:path="avatar_path"
                  @upload="updateProfile"
                />
              </div>
            </div>
          </div>

          <div class="pt-5">
            <div class="flex justify-end">
              <button
                type="submit"
                class="inline-flex items-center justify-center px-4 py-2 ml-3 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm  hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                :value="loading ? 'Loading ...' : 'Update'"
                :disabled="loading"
              >
                {{ loading ? "Saving" : "Save" }}
                <LoadingSpinner class="w-4 h-4 ml-4" v-if="loading" />
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  title: "Account",
});

const pageLoading = ref(true);

const supabase = useSupabaseClient();

const loading = ref(true);
const username = ref("");
const avatar_path = ref("");

loading.value = true;
const user = useSupabaseUser();
let { data } = await supabase
  .from("profiles")
  .select(`username, avatar_url`)
  .eq("id", user.value.id)
  .single();
if (data) {
  username.value = data.username;
  avatar_path.value = data.avatar_url;
}
loading.value = false;
pageLoading.value = false;

async function updateProfile() {
  try {
    loading.value = true;
    const user = useSupabaseUser();
    const updates = {
      id: user.value.id,
      username: username.value,
      avatar_url: avatar_path.value,
      updated_at: new Date(),
    };
    let { error } = await supabase.from("profiles").upsert(updates, {
      returning: "minimal", // Don't return the value after inserting
    });
    if (error) throw error;
  } catch (error) {
    alert(error.message);
  } finally {
    loading.value = false;
  }
}
</script>