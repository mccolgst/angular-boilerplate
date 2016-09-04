import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';

import { AppComponent } from './app/app.component';
import { ROUTER_PROVIDERS } from './app/app.routes';
import { CookieService } from './app/shared/utils/cookie.service';

if (process.env.ENV === 'production') {
  enableProdMode();
}

bootstrap(AppComponent, [ROUTER_PROVIDERS, HTTP_PROVIDERS, CookieService]);