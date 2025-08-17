<script setup lang="ts">
definePageMeta({
  groups: 'superadmin',
})

const successResponse = await getSuccessData()
const failMessage = await getFailData()

async function getSuccessData() {
  const data = await $api('/superadmin-only')

  return data
}

async function getFailData() {
  try {
    await $api('/user-only')
  } catch (error) {
    return getApiErrorMessage(error)
  }
}
</script>

<template>
  <h1>This page can be accessed by <code>superadmin</code> group only.</h1>
  <h2>Success response:</h2>
  <pre>{{ successResponse }}</pre>
  <h2>Fail message:</h2>
  <pre>{{ failMessage }}</pre>
</template>
