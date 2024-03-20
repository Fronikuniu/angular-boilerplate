import {
  ChangeDetectionStrategy,
  Component,
  inject,
  Input,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageSwitchService, type Locale } from './language-switch.service';

@Component({
  selector: 'pzps-language-switch',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './language-switch.component.html',
  styleUrl: './language-switch.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LanguageSwitchComponent {
  @Input({ required: true }) data!: Locale[];
  readonly #langSwitch = inject(LanguageSwitchService);
  readonly activeLanguage = this.#langSwitch.activeLanguage;

  changeLanguage(code: string) {
    if (code === this.activeLanguage()) return;
    this.#langSwitch.changeLanguage(code);
  }
}
