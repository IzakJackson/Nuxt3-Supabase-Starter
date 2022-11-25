<template>
  <div>
    <img v-if="src" :src="src" alt="Avatar" class="w-full h-full" />
    <svg v-else class="w-full h-full" fill="currentColor" viewBox="0 0 24 24">
      <path
        d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z"
      />
    </svg>
  </div>
</template>

<script setup>
const props = defineProps(["path"]);
const { path } = toRefs(props);

const emit = defineEmits(["update:path", "upload"]);

const client = useSupabaseClient();

const src = ref("");
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

downloadImage();

watch(path, () => {
  if (path.value) {
    downloadImage();
  }
});
</script>