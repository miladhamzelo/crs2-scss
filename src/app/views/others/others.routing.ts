import { Routes } from '@angular/router';

import { AppBlankComponent } from './app-blank/app-blank.component';
import {AppHighchartsComponent} from './app-highcharts/app-highcharts.component';

export const OthersRoutes: Routes = [
  {
    path: '',
    component: AppBlankComponent,
  },
  {
    path: 'highcharts',
    component: AppHighchartsComponent,
    data: { title: 'Highcharts', breadcrumb: 'Highcharts' }
  }
];
