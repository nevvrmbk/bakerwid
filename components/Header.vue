<template>
  <header>
    <nav v-if="routes">
      <NuxtLink
        v-for="(route, index) in routes"
        :key="index"
        :to="route.path"
        >{{ route.name?.toString() }}</NuxtLink
      >
    </nav>
  </header>
</template>

<script setup lang="ts">
const router = useRouter();
const routes = router.getRoutes();
</script>
