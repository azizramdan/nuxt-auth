<script setup lang="ts">
const user = useAuthStore().user

async function logout() {
  await useAuthStore().logout()
  navigateTo('/auth/login')
}
</script>

<template>
  <div v-if="user">
    <h1>Hello {{ user.name }}</h1>
    <pre>{{ user }}</pre>

    <button @click="logout">
      Logout
    </button>
  </div>
</template>
