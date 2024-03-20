import { HttpClient } from '@angular/common/http';
import { Component, inject, signal } from '@angular/core';

// Do wyrzucenia potem

@Component({
  selector: 'pzps-test',
  standalone: true,
  imports: [],
  template: `<p>{{ data()?.data }}</p>`,
})
export class TestComponent {
  readonly #http = inject(HttpClient);
  data = signal<any | undefined>(undefined);

  constructor() {
    this.#http.get('http://127.0.0.1:1337/api/tests').subscribe((data) => {
      this.data.set(data);
      console.log(data);
    });
  }
}

// DODAC KONFIGURACJE DEPLOY DO STRAPI (to co ostatnio zostało dodane) (index, app itp)
