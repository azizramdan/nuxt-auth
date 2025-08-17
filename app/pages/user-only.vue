<script setup lang="ts">
import type { FetchError } from 'ofetch'

definePageMeta({
  groups: 'user',
})

const successResponse = await getSuccessData()
const failResponse = await getFailData()

async function getSuccessData() {
  const data = await $api('/user-only')

  return data
}

async function getFailData() {
  try {
    const data = await $api('/superadmin-only')

    return data
  } catch (error) {
    return (error as FetchError).data
  }
}
</script>

<template>
  <h1>This page can be accessed by <code>user</code> group only.</h1>
  <h2>Success response:</h2>
  <pre>{{ successResponse }}</pre>
  <h2>Fail response:</h2>
  <pre>{{ failResponse }}</pre>
</template>
