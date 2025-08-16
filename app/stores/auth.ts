import { defineStore } from 'pinia'

export interface User {
  id: number
  username: string
  name: string
  nip: string | null
  groups: Array<string>
  permissions: Array<string>
  pegawai: {
    nip: string
    nama: string
  } | null
}

interface State {
  token: null | string
  user: null | User
}

export const tokenCookieKey = 'nuxt-auth-token'

export const useAuthStore = defineStore('auth-store', {
  state: (): State => {
    return {
      token: null,
      user: null,
    }
  },
  actions: {
    setToken(token: string) {
      this.token = token

      const cookie = useCookie(tokenCookieKey, { sameSite: true })
      cookie.value = token
    },
    removeToken() {
      this.token = null

      const cookie = useCookie(tokenCookieKey, { sameSite: true })
      cookie.value = null
    },
    setUser(user: User) {
      this.user = user
    },
    removeUser() {
      this.user = null
    },
    async logout() {
      await $api('/auth/logout', {
        method: 'POST',
      })

      this.removeToken()
      this.removeUser()
    },
    async login(username: string, password: string) {
      try {
        const { data } = await $api<{
          data: {
            token: string
            user: User
          }
        }>('/auth/login', {
          method: 'POST',
          body: {
            username,
            password,
          },
        })

        this.setToken(data.token)
        this.setUser(data.user)

        return {
          success: true,
        }
      } catch (error) {
        return {
          success: false,
          message: getApiErrorMessage(error, 'Username atau password salah'),
        }
      }
    },
  },
  getters: {
    isAuthenticated: state => Boolean(state.user),
  },
})
