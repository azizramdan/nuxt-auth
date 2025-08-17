<script setup lang="ts">
definePageMeta({
  permissions: 'module.admin-feature',
})

const successResponse = await getSuccessData()

async function getSuccessData() {
  const data = await $api('/superadmin-only')

  return data
}
</script>

<template>
  <h1>This page can be accessed only by users with the <code>module.admin-feature</code> permission.</h1>
  <h2>Success response:</h2>
  <pre>{{ successResponse }}</pre>
</template>
