import { inject, Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import type { Test } from './models/test';

@Injectable({ providedIn: 'root' })
export class TestPageApiService {
  readonly #http = inject(HttpClient);
  data = signal<Test | undefined>(undefined);

  getTest() {
    this.#http
      .get<Test>('http://127.0.0.1:1337/api/tests')
      .subscribe((data) => {
        this.data.set(data);
      });
  }
}
