import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { AppBlankComponent } from "./app-blank/app-blank.component";
import { OthersRoutes } from "./others.routing";
import { HighchartsModule } from "../../shared/highcharts/highcharts.module";
import { AppHighchartsComponent } from "./app-highcharts/app-highcharts.component";
import { MaterialModule } from "../../shared/material/material.module";
import { AppC3ChartsComponent } from "./app-c3-charts/app-c3-charts.component";
import { AppExternalComponent } from "./app-external/app-external.component";
import { CommonPipesModule } from "../../core/pipes/common-pipes.module";
import { AppTableauDemoComponent } from "./app-tableau-demo/app-tableau-demo.component";

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		HighchartsModule,
		MaterialModule,
		CommonPipesModule,
		RouterModule.forChild(OthersRoutes)
	],
	declarations: [
		AppBlankComponent,
		AppHighchartsComponent,
		AppC3ChartsComponent,
		AppExternalComponent,
		AppTableauDemoComponent
	]
})
export class OthersModule {}
