import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AngularAppAppComponent, environment } from './app/';

if (environment.production) {
  enableProdMode();
}

bootstrap(AngularAppAppComponent);
