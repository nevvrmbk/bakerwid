<template>
  <NuxtLayout>
    <NuxtLoadingIndicator />
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
definePageMeta({
  middleware: ["mitm"],
});
useHead({
  titleTemplate: (chunk) => {
    return chunk ? `${chunk} - Bakerwid` : "Bakerwid";
  },
});
</script>
