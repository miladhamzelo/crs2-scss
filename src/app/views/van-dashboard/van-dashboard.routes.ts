import { Routes } from "@angular/router";
import { VanDashboardComponent } from "./van-dashboard.component";

export const VanDashboardRoutes: Routes = [
	{
		path: "",
		component: VanDashboardComponent,
		data: { title: "Vans Dashboard" }
	}
];
