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

To deploy a Strapi project you must perform these steps:

### Api:
- `nx run api:build:production`
- `cd dist/apps/api && npm i --legacy-peer-deps`
- create `.env` file
- `node index.js`

To deploy a Angular project you must perform these steps:

### Frontend:
- `nx run frontend:build:production`
- `cd dist/apps/frontend/server`
- `node server.mjs`

## Other:

### Create mocks:

To make new mocks go to `apps/freontend/src/mocks`:
- In ./data/ create your mock data
- In ./handlers/ make mock for example: 
  ```js
  import { HttpResponse, http } from 'msw';
  import { yourMockData } from '../data/yourMockData';

  export const yourMockHandler = http.get('apiUrl', () => {
    return HttpResponse.json(yourMockData);
  });

  ```
- Then to ./handlers.ts add the mock you created

### Disable mocks locally:

To disable mocks locally navigate to `apps/frontend/src/main.server.ts` and `apps/frontend/src/main.ts` and add `return;` (*remember to remove this before commit*)

```js
async function enableMocking() {
  return;
  if (process.env['NODE_ENV'] !== 'development') {
    return;
  }
  const { browserWorker } = await import('./mocks/browser');
  return browserWorker.start();
}
```
