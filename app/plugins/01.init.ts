import type { User } from '~/stores/auth'
import { tokenCookieKey, useAuthStore } from '~/stores/auth'

export default defineNuxtPlugin(async () => {
  const token = useCookie(tokenCookieKey)
  const store = useAuthStore()

  if (token.value) {
    store.setToken(token.value)

    try {
      const { data } = await $api<{
        data: User
      }>('/auth/me', {
        onResponseError(params) {
          if (params.response.status === 401) {
            // remove token to prevent infinite reload of NuxtApp reloadNuxtApp()
            store.removeToken()
          }
        },
      })

      store.setUser(data)
    } catch (error) {
      console.error(error)

      store.removeToken()
    }
  }
})
