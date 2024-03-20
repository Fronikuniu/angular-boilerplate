import type { Route } from '@angular/router';
import { AppParentComponent } from '../../app/app-parent/app-parent.component';
import { DefaultLanguageResolver } from '../resolvers/language-resolver.service';
import { EN_CODE, PL_CODE, ROUTES } from './routes';

export const availableLanguages: ('pl' | 'en')[] = [PL_CODE, EN_CODE];

export const appRoutes: Route[] = [
  {
    path: '',
    component: AppParentComponent,
    resolve: [DefaultLanguageResolver],
    children: [
      ...availableLanguages.map(
        (lang): Route => ({
          path: lang,
          children: [
            // {
            //   path: ROUTES[lang]['HOME'],
            //   pathMatch: 'full',
            //   loadComponent: () =>
            //     import('').then((c) => c.HomePageComponent),
            // },
            {
              path: ROUTES[lang]['TEST'],
              loadComponent: () =>
                import('../../app/test.component').then((c) => c.TestComponent),
            },
          ],
        })
      ),
    ],
  },
  {
    path: '**',
    redirectTo: 'pl',
  },
];
