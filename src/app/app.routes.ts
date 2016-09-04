import { provideRouter, RouterConfig } from '@angular/router';

import { AppComponent } from './app.component';

export const routes: RouterConfig = [
  { path: '/', component: AppComponent }
];

export const ROUTER_PROVIDERS = [
  provideRouter(routes)
];

