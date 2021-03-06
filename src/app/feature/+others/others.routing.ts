import { Routes } from '@angular/router';

import { AppBlankComponent } from './app-blank/app-blank.component';
import { AppHighchartsComponent } from './app-highcharts/app-highcharts.component';
import { AppC3ChartsComponent } from './app-c3-charts/app-c3-charts.component';
import { AppExternalComponent } from './app-external/app-external.component';
import { AppTableauDemoComponent } from './app-tableau-demo/app-tableau-demo.component';

export const OthersRoutes: Routes = [
	{
		path: '',
		component: AppBlankComponent
	},
	{
		path: 'highcharts',
		component: AppHighchartsComponent,
		data: { title: 'Highcharts', breadcrumb: 'Highcharts' }
	},
	{
		path: 'c3',
		component: AppC3ChartsComponent,
		data: { title: 'C3', breadcrumb: 'C3' }
	},
	{
		path: 'external',
		component: AppExternalComponent,
		data: { title: 'External', breadcrumb: 'External' }
	},
	{
		path: 'tableau',
		component: AppTableauDemoComponent,
		data: { title: 'Tableau Demo', breadcrumb: 'Tableau' }
	}
];
