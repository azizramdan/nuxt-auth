<script setup lang="ts">
const form = reactive({
  password_old: '',
  password_new: '',
})

const isBusy = reactive({
  submit: false,
})

const errorMessage = ref('')

async function submit() {
  try {
    errorMessage.value = ''
    isBusy.submit = true

    await $api('/auth/change-password', {
      method: 'POST',
      body: form,
    })

    // eslint-disable-next-line no-alert
    alert('Change password success, please re-login')
    await useAuthStore().logout()
    navigateTo('/auth/login')
  } catch (error) {
    errorMessage.value = getApiErrorMessage(error)
  } finally {
    isBusy.submit = false
  }
}
</script>

<template>
  <form @submit.prevent="submit">
    <div style="color: red">
      {{ errorMessage }}
    </div>
    <div>
      <label for="old-password">Old Password</label>
      <input id="old-password" v-model="form.password_old" type="password" required>
    </div>
    <div>
      <label for="new-password">New Password</label>
      <input id="new-password" v-model="form.password_new" type="password" required>
    </div>
    <button type="submit" :disabled="isBusy.submit">
      Submit
    </button>
  </form>
</template>
