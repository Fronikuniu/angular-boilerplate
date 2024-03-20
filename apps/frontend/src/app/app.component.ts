import { Component, inject } from '@angular/core';
import { NavigationStart, Router, RouterModule } from '@angular/router';
import { LanguageSwitchService } from '../shared/language-switch/language-switch.service';

@Component({
  standalone: true,
  imports: [RouterModule],
  selector: 'pzps-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  #router = inject(Router);
  #language = inject(LanguageSwitchService);
  constructor() {
    this.#router.events.subscribe((event) => {
      if (event instanceof NavigationStart && event.url === '/') {
        this.#router.navigate([this.#language.activeLanguage()]);
      }
    });
  }
}
