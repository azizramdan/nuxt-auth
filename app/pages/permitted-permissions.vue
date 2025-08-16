<script setup lang="ts">
definePageMeta({
  permissions: 'module.admin-feature',
})
</script>

<template>
  <h1>This page can be accessed only by users with the <code>module.admin-feature</code> permission.</h1>
</template>
