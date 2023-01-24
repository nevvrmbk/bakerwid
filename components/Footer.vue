<template>
  <footer>
    <p>Copyright &copy; {{ year }}</p>
  </footer>
</template>

<script setup lang="ts">
const year = new Date().getFullYear();
</script>
