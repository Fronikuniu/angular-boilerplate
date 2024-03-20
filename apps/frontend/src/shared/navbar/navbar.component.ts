import { ChangeDetectionStrategy, Component } from '@angular/core';
import { LanguageSwitchComponent } from '../language-switch/language-switch.component';

@Component({
  selector: 'pzps-navbar',
  standalone: true,
  imports: [LanguageSwitchComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent {}
