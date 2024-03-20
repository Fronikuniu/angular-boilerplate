import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from '../../shared/navbar/navbar.component';
import { FooterComponent } from '../../shared/footer/footer.component';

@Component({
  selector: 'pzps-app-parent',
  standalone: true,
  imports: [RouterModule, NavbarComponent, FooterComponent],
  templateUrl: './app-parent.component.html',
  styleUrl: './app-parent.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppParentComponent {}
