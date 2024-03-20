# Run project with:

## Install dependencies: 
  - `npm i`
  - `cd apps/api && npm i`

## Configure .env files

Inside `apps/api` copy `.env.example` file and paste as `.env` file, change fields based on your postgres database configuration.

## Run with:

### Angular run:

- development:
  - NX extension: `api/serve` command
  - console command: `npx nx run frontend:serve`
- build:
  - NX extension: `api/build` command
  - console command: `npx nx run frontend:build`

### Strapi run:

- development:
  - NX extension: `frontend/serve` command
  - console command: `npx nx run api:serve`
- build:
  - NX extension: `frontend/build` command
  - console command: `npx nx run api:build`

### E2E tests run:

- NX extension: `frontend-e2e/e2e` command
- console command: `npx nx run frontend-e2e:e2e`

### Storybook run:

- NX extension: `frontend/storybook` command
- console command: `npx nx run frontend:storybook`
- auto generate story files: `npx nx generate @nx/angular:stories --name=frontend --no-interactive`


## Deploys:

### Api:
- `nx run api:build:production`
- `cd dist/apps/api && npm i --legacy-peer-deps`
- create `.env` file
- `node index.js`

### Frontend:
- `nx run frontend:build:production`
- `cd dist/apps/frontend/server`
- `node server.mjs`