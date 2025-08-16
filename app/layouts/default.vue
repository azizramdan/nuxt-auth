<script setup lang="ts">
const isAuthenticated = useAuthStore().isAuthenticated

async function logout() {
  await useAuthStore().logout()
  navigateTo('/auth/login')
}
</script>

<template>
  <div>
    <nav>
      <ul>
        <li v-for="route in useRouter().getRoutes()" :key="route.name">
          <NuxtLink :to="route.path">
            {{ route.name }}
          </NuxtLink>
        </li>
        <li v-if="isAuthenticated">
          <button @click="logout">
            Logout
          </button>
        </li>
      </ul>
    </nav>
    <slot />
  </div>
</template>

<style scoped>
.router-link-exact-active {
    font-weight: bold;
}
</style>
