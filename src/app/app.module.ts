import {APP_INITIALIZER, NgModule} from '@angular/core';
import {RouteReuseStrategy, RouterModule} from '@angular/router';
import { BrowserModule, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { Http, HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateModule, TranslateLoader, TranslateStaticLoader } from 'ng2-translate/ng2-translate';
import { GestureConfig } from '@angular/material';
import { LoggerModule, NGXLogger } from 'ngx-logger';
import { Angulartics2GoogleAnalytics } from 'angulartics2/ga';
import { Angulartics2Module } from 'angulartics2';

import {environment} from '@env/environment';

import { rootRouterConfig } from './app.routing';
import { CoreModule } from './core/core.module';
import { AppComponent } from './app.component';
import {StartupService} from './core/services/startup.service';
import {CustomReuseStrategy} from "./core/helpers/custom.reuse.strategy";
// import {HTTP_INTERCEPTORS} from "@angular/common/http";
// import {ErrorInterceptorService} from "./core/services/error-interceptor.service";

export function createTranslateLoader(http: Http) {
  return new TranslateStaticLoader(http, './assets/i18n', '.json');
}

export function startupServiceFactory(startupService: StartupService): Function {
  return () => startupService.load();
}

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    CoreModule,
    TranslateModule.forRoot({
      provide: TranslateLoader,
      useFactory: (createTranslateLoader),
      deps: [Http]
    }),
    LoggerModule.forRoot({
      serverLogLevel: environment.logLevel,
      level: environment.logLevel
    }),
    Angulartics2Module.forRoot(
      [Angulartics2GoogleAnalytics], {}),
    RouterModule.forRoot(rootRouterConfig, { useHash: true })
  ],
  declarations: [AppComponent],
  providers: [
    // ANGULAR MATERIAL SLIDER FIX
    { provide: HAMMER_GESTURE_CONFIG, useClass: GestureConfig },
    NGXLogger,
    {
      provide: APP_INITIALIZER,
      useFactory: startupServiceFactory,
      deps: [StartupService],
      multi: true
    },
    {
      provide: RouteReuseStrategy,
      useClass: CustomReuseStrategy
    }/*,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptorService,
      multi: true
    }*/
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
