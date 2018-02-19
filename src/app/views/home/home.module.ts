import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

import {HomeComponent} from './home.component';
import {HomeRoutes} from './home.routing';
import {DragulaModule} from 'ng2-dragula';
import {CalloutBox1Component} from './callout-box-1/callout-box-1.component';
import {MaterialModule} from '../../shared/material/material.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    DragulaModule,
    RouterModule.forChild(HomeRoutes)
  ],
  declarations: [
      HomeComponent,
      CalloutBox1Component
  ],
  exports: []
})
export class HomeModule {

}
