import { useAuthStore } from '~/stores/auth'

export default defineNuxtRouteMiddleware((to) => {
  const middleware = (Array.isArray(to.meta.middleware || []) ? to.meta.middleware || [] : [to.meta.middleware]) as string[]

  if (!middleware.includes('guest') && !middleware.includes('allow-guest') && !useAuthStore().isAuthenticated) {
    return navigateTo({
      path: '/auth/login',
      query: {
        redirectTo: to.fullPath,
      },
    })
  }

  if (to.meta.permissions) {
    if (!hasPermission(to.meta.permissions)) {
      return showError({
        statusCode: 403,
        statusMessage: 'Forbidden',
      })
    }
  }

  if (to.meta.groups) {
    if (!hasGroup(to.meta.groups)) {
      return showError({
        statusCode: 403,
        statusMessage: 'Forbidden',
      })
    }
  }
})
