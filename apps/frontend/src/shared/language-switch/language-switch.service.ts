import { Location, isPlatformBrowser } from '@angular/common';
import { Injectable, PLATFORM_ID, inject, signal } from '@angular/core';
import { EN_CODE, PL_CODE, ROUTES } from '../../core/routes/routes';
import { Router } from '@angular/router';

const enRoutes = ROUTES[EN_CODE];
const plRoutes = ROUTES[PL_CODE];

export interface Locale {
  code: string;
  localName: string;
}

@Injectable({ providedIn: 'root' })
export class LanguageSwitchService {
  readonly activeLanguage = signal(PL_CODE);
  readonly #location = inject(Location);
  readonly platformId = inject(PLATFORM_ID);
  readonly #router = inject(Router);

  changeLanguage(code: string, changeLocation = true): void {
    this.activeLanguage.set(code);
    let path;
    if (isPlatformBrowser(this.platformId)) {
      path = this.#location.path();
    }

    if (changeLocation && path) {
      const isHomePage = [`/${PL_CODE}`, `/${EN_CODE}`].includes(path)
        ? ''
        : '/';

      const properPath = path
        .replace(`/${PL_CODE}${isHomePage}`, '')
        .replace(`/${EN_CODE}${isHomePage}`, '');

      // @Feature
      // const blogPlRegex = /aktualnosci\/([^/]+)/gm;
      // const blogEnRegex = /latest-news\/([^/]+)/gm;

      // const isBlogPlSingle = blogPlRegex.exec(path) !== null;
      // const isBlogEnSingle = blogEnRegex.exec(path) !== null;

      // if (
      //   (path.includes('aktualnosci') || path.includes('latest-news')) &&
      //   (isBlogPlSingle || isBlogEnSingle)
      // ) {
      //   this.moveToCorrectLang('article', 'NEWS', path);
      //   return;
      // }

      if (path.includes(`/${EN_CODE}`)) {
        for (const key in enRoutes) {
          if (properPath === enRoutes[key]) {
            // @Feature - if it won't work with ssr revert to previous implementation
            // location.replace(`${PL_CODE}/${plRoutes[key]}`);
            this.#router.navigate([`${PL_CODE}/${plRoutes[key]}`]);
            break;
          }
        }
      } else {
        for (const key in plRoutes) {
          if (properPath === plRoutes[key]) {
            // location.replace(`${EN_CODE}/${enRoutes[key]}`);
            this.#router.navigate([`${EN_CODE}/${enRoutes[key]}`]);
            break;
          }
        }
      }
    }
  }

  moveToCorrectLang(
    data: 'training' | 'article' | 'industry',
    key: 'TRAINING' | 'NEWS' | 'CASE_STUDY',
    path: string
  ) {
    if (path.includes(PL_CODE)) {
      // @Feature
      // location.replace(`${EN_CODE}/${enRoutes[key]}/${this[data]()?.slugEN}`);
    } else {
      // @Feature
      // location.replace(`${PL_CODE}/${plRoutes[key]}/${this[data]()?.slugPL}`);
    }
  }
}
