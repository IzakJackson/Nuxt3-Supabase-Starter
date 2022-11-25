<template>
  <div>
    <label
      for="photo"
      class="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300"
      >Photo</label
    >
    <div class="mt-1 sm:col-span-2 sm:mt-0">
      <div class="flex items-center">
        <span
          class="w-12 h-12 overflow-hidden text-gray-300 bg-gray-100 rounded-full  dark:bg-gray-700 dark:text-gray-800"
        >
          <UserAvatar v-model:path="path" @upload="uploadAvatar" />
        </span>
        <label
          for="single"
          :disabled="loading"
          class="px-3 py-2 ml-5 text-sm font-medium leading-4 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm cursor-pointer  dark:hover:text-gray-500 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 disabled:cursor-not-allowed hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          {{ loading ? "Uploading..." : "Upload" }}
        </label>
        <input
          type="file"
          id="single"
          accept="image/*"
          @change="uploadAvatar"
          :disabled="loading"
          class="absolute hidden disabled:cursor-not-allowed"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(["path"]);
const { path } = toRefs(props);

const emit = defineEmits(["update:path", "upload"]);

const client = useSupabaseClient();

const loading = ref(false);
const src = ref("");
const files = ref();
const downloadImage = async () => {
  try {
    const { data, error } = await client.storage
      .from("avatars")
      .download(path.value);
    if (error) throw error;
    src.value = URL.createObjectURL(data);
  } catch (error) {
    console.error("Error downloading image: ", error.message);
  }
};

const uploadAvatar = async (evt) => {
  files.value = evt.target.files;
  try {
    loading.value = true;
    if (!files.value || files.value.length === 0) {
      throw new Error("You must select an image to upload.");
    }
    const file = files.value[0];
    const fileExt = file.name.split(".").pop();
    const fileName = `${Math.random()}.${fileExt}`;
    const filePath = `${fileName}`;
    let { error: uploadError } = await client.storage
      .from("avatars")
      .upload(filePath, file);
    if (uploadError) throw uploadError;
    emit("update:path", filePath);
    emit("upload");
  } catch (error) {
    errorMsg.value = error.message;
  } finally {
    loading.value = false;
  }
};

downloadImage();

watch(path, () => {
  if (path.value) {
    downloadImage();
  }
});
</script>