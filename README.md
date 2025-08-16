# Nuxt Auth
A minimal authentication frontend built with Nuxt 4 and Bun, designed as a companion to the [CodeIgniter Auth API backend](https://github.com/azizramdan/codeigniter-auth). Features support for login, logout, and protected routes using token-based authentication and RBAC.

## Tech stack
- Nuxt 4
- Bun 1.2

## Code style

Code style using eslint with config from [@antfu/eslint-config](https://github.com/antfu/eslint-config). For auto-format on save please install the [Eslint extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) in vscode.

Make sure to run lint & typecheck before committing to git.

```bash
# run eslint
bun run lint

# run eslint and fix issues
bun run lint:fix

# check types typescript
bun run typecheck
```

# Run project

```bash
# setup .env values
cp .env.example .env

# install dependencies
bun install

# run dev mode
bun run dev
```
