import {
  type HttpHandlerFn,
  type HttpInterceptorFn,
  HttpRequest,
} from '@angular/common/http';
import { inject } from '@angular/core';
import { LanguageSwitchService } from '../../shared/language-switch/language-switch.service';

export const languageInterceptor: HttpInterceptorFn = (
  req: HttpRequest<unknown>,
  next: HttpHandlerFn
) => {
  const lang = inject(LanguageSwitchService);
  const currLang = lang.activeLanguage();
  const langRequest = req.clone({
    url: req.url + `?locale=${currLang}`,
  });
  return next(langRequest);
};
