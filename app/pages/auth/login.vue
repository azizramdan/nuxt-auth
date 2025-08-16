<script setup lang="ts">
import { useAuthStore } from '~/stores/auth'

definePageMeta({
  middleware: 'guest',
})

const redirectTo = useRoute().query.redirectTo as string

const form = reactive({
  username: '',
  password: '',
})

const isBusy = reactive({
  login: false,
})

const errors = ref(null)

async function login() {
  isBusy.login = true

  const result = await useAuthStore().login(form.username, form.password)

  if (!result.success) {
    isBusy.login = false
    errors.value = result.message
    return
  }

  return navigateTo(redirectTo || '/')
}
</script>

<template>
  <form @submit.prevent="login">
    <div style="color: red">
      {{ errors }}
    </div>
    <div>
      <label for="username">Username</label>
      <input v-model="form.username" type="text" required>
    </div>
    <div>
      <label for="password">Password</label>
      <input v-model="form.password" type="password" required>
    </div>
    <button type="submit" :disabled="isBusy.login">
      Login
    </button>
  </form>
</template>
