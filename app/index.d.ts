declare module '#app' {
  interface PageMeta {
    groups?: Group | Array<Group>
    permissions?: Permission | Array<Permission>
  }
}

export {}
