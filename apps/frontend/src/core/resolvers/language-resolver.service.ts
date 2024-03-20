import { Injectable, inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  type Resolve,
} from '@angular/router';
import { EN_CODE, PL_CODE } from '../routes/routes';
import { LanguageSwitchService } from '../../shared/language-switch/language-switch.service';

@Injectable({ providedIn: 'root' })
export class DefaultLanguageResolver implements Resolve<string> {
  readonly #language = inject(LanguageSwitchService);

  resolve(_: ActivatedRouteSnapshot, state: RouterStateSnapshot): string {
    const locale = state.url.split('/')[1];
    if (locale?.toLowerCase() === PL_CODE.toLowerCase()) {
      this.#language.changeLanguage(PL_CODE, false);
      return PL_CODE;
    } else {
      this.#language.changeLanguage(EN_CODE, false);
      return EN_CODE;
    }
  }
}
