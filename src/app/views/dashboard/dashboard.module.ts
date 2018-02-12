import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

import {DashboardComponent} from './dashboard.component';
import {DashboardRoutes} from './dashboard.routing';
import {DragulaModule} from 'ng2-dragula';
import {CalloutBox1Component} from './callout-box-1/callout-box-1.component';
import {MaterialModule} from '../../shared/material/material.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    DragulaModule,
    RouterModule.forChild(DashboardRoutes)
  ],
  declarations: [
      DashboardComponent,
      CalloutBox1Component
  ],
  exports: []
})
export class DashboardModule {

}
