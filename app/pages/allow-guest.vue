<script setup lang="ts">
definePageMeta({
  middleware: 'allow-guest',
})

const isAuthenticated = useAuthStore().isAuthenticated
</script>

<template>
  <h1>This page can be accessed by both logged-in users and guests.</h1>
  <h2>You are currently {{ isAuthenticated ? 'logged in' : 'a guest' }}.</h2>
</template>
