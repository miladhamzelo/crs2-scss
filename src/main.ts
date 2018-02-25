// Third party JS imports
// Page loader
import './vendor/pace/pace.min.js';

import '../node_modules/hammerjs/hammer.js';
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import {environment} from "@env/environment";

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule).then(ref => {
  // Ensure Angular destroys itself on hot reloads.
  if (window['ngRef']) {
    window['ngRef'].destroy();
  }
  window['ngRef'] = ref;
  // Otherise, log the boot error
}).catch(err => console.error(err));
