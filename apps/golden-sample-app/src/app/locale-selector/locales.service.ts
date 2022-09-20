import { DOCUMENT } from '@angular/common';
import { Inject, Injectable, LOCALE_ID } from '@angular/core';

const COOKIE_ATTRIBUTES =
  'Path=/;expires=Fri, 31 Dec 9999 23:59:59 GMT;secure;samesite=Lax;';

@Injectable()
export class LocalesService {
  constructor(
    @Inject(LOCALE_ID) private locale: string,
    @Inject(DOCUMENT) private document: Document
  ) {}

  setLocaleCookie(value: string) {
    this.document.cookie =
      encodeURIComponent('bb-locale') +
      '=' +
      encodeURIComponent(value) +
      `;${COOKIE_ATTRIBUTES}`;
  }

  get currentLocale() {
    return this.locale;
  }
}
