import { NgModule } from "@angular/core";
import { CommonModule, TitleCasePipe } from "@angular/common";
import { RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { VanDashboardComponent } from "./van-dashboard.component";
import { VanDashboardRoutes } from "./van-dashboard.routes";
import { MaterialModule } from "../../shared/material/material.module";
import { PrimengModule } from "../../shared/primeng/primeng.module";
import { HighchartsModule } from "../../shared/highcharts/highcharts.module";
import { KpiTableComponent } from "./components/kpi-table/kpi-table.component";
import { NgHttpLoaderModule } from "ng-http-loader/ng-http-loader.module";

@NgModule({
	imports: [
		CommonModule,
		ReactiveFormsModule,
		FormsModule,
		MaterialModule,
		PrimengModule,
		HighchartsModule,
		NgHttpLoaderModule,
		RouterModule.forChild(VanDashboardRoutes)
	],
	declarations: [VanDashboardComponent, KpiTableComponent],
	providers: [TitleCasePipe]
})
export class VanDashboardModule {}
