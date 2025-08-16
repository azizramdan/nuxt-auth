<script setup lang="ts">
const user = useAuthStore().user
</script>

<template>
  <div v-if="user">
    <h1>Hello {{ user.name }}</h1>
    <pre>{{ user }}</pre>
  </div>
</template>
