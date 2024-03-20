import { Inject, Injectable, InjectionToken, Optional } from '@angular/core';

const REQUEST = new InjectionToken<Request>('REQUEST');

@Injectable({ providedIn: 'root' })
export class HeadersService {
  constructor(@Optional() @Inject(REQUEST) private request: Request) {}
}
