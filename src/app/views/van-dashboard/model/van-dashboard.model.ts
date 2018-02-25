import { KpiInfoModel } from "./kpi-info.model";

export interface VanDashboardModel {
	kpiInfo: Array<KpiInfoModel>;
	/*last_six_month_names: Array<any>;
    actl_ytd_last_6_months: Array<any>;
    obj_ytd_last_6_months: Array<any>;*/
	bubble_chart_data: Array<BubbleChartModel>;
}

export interface BubbleChartModel {
	x: number;
	y: number;
	z: number;
	code: string;
	name: string;
}
