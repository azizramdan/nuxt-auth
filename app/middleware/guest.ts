import { useAuthStore } from '~/stores/auth'

export default defineNuxtRouteMiddleware((to) => {
  if (useAuthStore().isAuthenticated) {
    if (to.name === 'auth.login' && to.query.redirectTo) {
      return navigateTo(to.query.redirectTo as string)
    }

    return navigateTo('/')
  }
})
