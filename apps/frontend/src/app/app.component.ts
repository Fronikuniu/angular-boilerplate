import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'frontend';
  readonly #http = inject(HttpClient);

  constructor() {
    this.#http
      .get('http://127.0.0.1:1337/api/tests')
      .subscribe((data) => console.log(data));
  }
}
