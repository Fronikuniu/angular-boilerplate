import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

async function enableMocking() {
  if (process.env['NODE_ENV'] !== 'development') {
    return;
  }
  const { browserWorker } = await import('./mocks/browser');
  return browserWorker.start();
}

enableMocking().then(() => {
  bootstrapApplication(AppComponent, appConfig).catch((err) =>
    console.error(err)
  );
});
