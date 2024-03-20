import { Component, inject } from '@angular/core';
import { TestPageApiService } from '../api/test-page/test-page.service';

// Do wyrzucenia potem - to tylko przykładowy komponent

@Component({
  selector: 'pzps-test',
  standalone: true,
  imports: [],
  template: `<p>{{ data()?.data }}</p>`,
})
export class TestComponent {
  readonly #http = inject(TestPageApiService);
  data = this.#http.data;

  constructor() {
    this.#http.getTest();
  }
}
