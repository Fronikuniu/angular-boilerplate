import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { config } from './app/app.config.server';

async function enableMocking() {
  if (process.env['NODE_ENV'] !== 'development') {
    return;
  }
  const { serverWorker } = await import('./mocks/server');
  return serverWorker.listen();
}

const bootstrap = () =>
  enableMocking().then(() => bootstrapApplication(AppComponent, config));

export default bootstrap;
