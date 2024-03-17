import { Inject, Injectable, InjectionToken, Optional } from '@angular/core';

const REQUEST = new InjectionToken<Request>('REQUEST');

@Injectable({ providedIn: 'root' })
export class AppService {
  constructor(@Optional() @Inject(REQUEST) private request: Request) {
    console.log(this.request);
  }
}
