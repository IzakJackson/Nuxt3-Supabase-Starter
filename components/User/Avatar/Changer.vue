<template>
  <div
    class="
      sm:grid
      sm:grid-cols-3
      sm:items-center
      sm:gap-4
      sm:border-t
      sm:border-gray-200
      sm:pt-5
    "
  >
    <label for="photo" class="block text-sm font-medium text-gray-700"
      >Photo</label
    >
    <div class="mt-1 sm:col-span-2 sm:mt-0">
      <div class="flex items-center">
        <span class="h-12 w-12 overflow-hidden rounded-full bg-gray-100">
          <UserAvatar v-model:path="path" @upload="updateProfile" />
          <!-- <img v-if="src" :src="src" alt="Avatar" class="h-full w-full" />
          <svg
            v-else
            class="h-full w-full text-gray-300"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z"
            />
          </svg> -->
        </span>
        <label
          for="single"
          class="
            ml-5
            rounded-md
            border border-gray-300
            bg-white
            py-2
            px-3
            text-sm
            font-medium
            leading-4
            text-gray-700
            shadow-sm
            hover:bg-gray-50
            focus:outline-none
            focus:ring-2
            focus:ring-indigo-500
            focus:ring-offset-2
            cursor-pointer
          "
        >
          {{ uploading ? "Uploading" : "Upload" }}
          <Spinner class="w-4 h-4 ml-4" v-if="uploading" />
        </label>
        <input
          type="file"
          id="single"
          accept="image/*"
          @change="uploadAvatar"
          :disabled="uploading"
          class="absolute hidden"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(["path"]);
const { path } = toRefs(props);

const emit = defineEmits(["update:path", "upload"]);

const supabase = useSupabaseClient();

const uploading = ref(false);
const src = ref("");
const files = ref();
const downloadImage = async () => {
  try {
    const { data, error } = await supabase.storage
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
    uploading.value = true;
    if (!files.value || files.value.length === 0) {
      throw new Error("You must select an image to upload.");
    }
    const file = files.value[0];
    const fileExt = file.name.split(".").pop();
    const fileName = `${Math.random()}.${fileExt}`;
    const filePath = `${fileName}`;
    let { error: uploadError } = await supabase.storage
      .from("avatars")
      .upload(filePath, file);
    if (uploadError) throw uploadError;
    emit("update:path", filePath);
    emit("upload");
  } catch (error) {
    alert(error.message);
  } finally {
    uploading.value = false;
  }
};

downloadImage();

watch(path, () => {
  if (path.value) {
    downloadImage();
  }
});
</script>