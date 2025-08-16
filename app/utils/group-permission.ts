export function hasGroup(groups: Group | Array<Group>, requireAll: boolean = false) {
  const auth = useAuthStore()

  if (!auth.user) {
    return false
  }

  const userGroups = auth.user.groups
  const requiredGroups = Array.isArray(groups) ? groups : [groups]

  return requireAll
    ? requiredGroups.every(group => userGroups.includes(group))
    : requiredGroups.some(group => userGroups.includes(group))
}

export function hasPermission(permissions: Permission | Array<Permission>, requireAll: boolean = false) {
  const auth = useAuthStore()

  if (!auth.user) {
    return false
  }

  const userPermissions = auth.user.permissions
  const requiredPermissions = Array.isArray(permissions) ? permissions : [permissions]

  function matchesUserPermission(required: string): boolean {
    return userPermissions.some((userPerm) => {
      if (userPerm.endsWith('.*')) {
        // Example: userPerm = 'module.*', required = 'module.read'
        const prefix = userPerm.replace(/\.\*$/, '') // 'module'
        return required.startsWith(`${prefix}.`)
      }

      return userPerm === required
    })
  }

  return requireAll
    ? requiredPermissions.every(matchesUserPermission)
    : requiredPermissions.some(matchesUserPermission)
}
