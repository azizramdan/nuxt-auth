import type { FetchError } from 'ofetch'

export const $api = $fetch.create({
  retry: 0,
  headers: {
    Accept: 'application/json',
  },
  onRequest({ options }) {
    options.baseURL = useRuntimeConfig().public.apiBase as string

    const auth = useAuthStore()

    if (auth.token) {
      options.headers.set('Authorization', `Bearer ${auth.token}`)
    }
  },
})

export function getApiErrorMessage(error: unknown, defaultErrorMessage = 'Terjadi kesalahan') {
  return (error as FetchError).data?.message || defaultErrorMessage
}
