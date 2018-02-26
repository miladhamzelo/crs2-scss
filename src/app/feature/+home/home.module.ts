import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import { HomeRoutes } from './home.routing';
import { DragulaModule } from 'ng2-dragula';
import { SmallWidgetComponent } from './small-widget/small-widget.component';
import { MaterialModule } from '../../shared/material/material.module';
import { MediumWidgetComponent } from './medium-widget/medium-widget.component';

@NgModule({
	imports: [
		CommonModule,
		MaterialModule,
		DragulaModule,
		RouterModule.forChild(HomeRoutes)
	],
	declarations: [HomeComponent, SmallWidgetComponent, MediumWidgetComponent],
	exports: []
})
export class HomeModule {}
