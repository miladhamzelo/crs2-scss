import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';
import { TitleCasePipe } from '@angular/common';
import { MatTabChangeEvent } from '@angular/material';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { NGXLogger } from 'ngx-logger';

import { environment } from '@env/environment';

import {
	BubbleChartModel,
	VanDashboardModel
} from './model/van-dashboard.model';
import { KpiInfoModel } from './model/kpi-info.model';
import { DealerInfoModel } from './model/dealer-info.model';
import { MonthYearInfo } from './model/month-year-info.model';
import { AppResizeService } from '../../core/services/app-resize.service';
import { Spinkit } from 'ng-http-loader/spinkits';

declare var require: any;
const Highcharts = require('highcharts');

@Component({
	selector: 'app-van-dashboard',
	templateUrl: './van-dashboard.component.html',
	styleUrls: ['./van-dashboard.component.scss'],
	encapsulation: ViewEncapsulation.None
})
export class VanDashboardComponent implements OnInit {
	fetchMockData = true;
	public spinkit = Spinkit;

	basicForm: FormGroup;
	mthYrControl = new FormControl('', [Validators.required]);
	dealerCtrl = new FormControl('', [Validators.required]);

	dashboardHeader: string;
	kpiInfo: KpiInfoModel[];
	activeVanDealers: DealerInfoModel[];
	monthYearInfo: MonthYearInfo[];
	selectedMonthAndYear: MonthYearInfo;
	isFilterPanelOpen: boolean;

	selectedDealerInfo: DealerInfoModel;
	selectedKpi: any;

	donutChartOptions: Object;
	donutChart: any;
	donutChartData: Array<any>;

	bubbleChartOptions: Object;
	bubbleChart: any;
	bubbleChartData: Array<BubbleChartModel>;

	barChartOptions: Object;
	barChart: any;
	actForLastSixMonths = [];
	objForLastSixMonths = [];

	filteredDealers: Observable<any[]>;

	constructor(
		private http: HttpClient,
		private logger: NGXLogger,
		private appResizeService: AppResizeService,
		private titlecasePipe: TitleCasePipe
	) {
		this.appResizeService.appResized$.subscribe(isResized =>
			this.onAppResize(isResized)
		);
		this.selectedKpi = 'Total Sales';

		this.barChartOptions = {
			chart: {
				type: 'column'
			},
			title: {
				text: null
			},
			exporting: {
				enabled: false
			},
			credits: {
				enabled: false
			},
			xAxis: {
				crosshair: true
			},
			yAxis: {
				min: 0
			},
			tooltip: {
				headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
				pointFormat:
					'<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
					'<td style="padding:0"><b>{point.y:,.0f}</b></td></tr>',
				footerFormat: '</table>',
				shared: true,
				useHTML: true
			},
			plotOptions: {
				column: {
					pointPadding: 0.2,
					borderWidth: 0
				}
			},
			series: [
				{
					name: 'Actual'
				},
				{
					name: 'Objective'
				}
			]
		};

		this.donutChartOptions = {
			chart: {
				type: 'pie',
				options3d: {
					enabled: true,
					alpha: 45
				}
			},
			subtitle: {
				text: 'Fleet vs Retail'
			},
			plotOptions: {
				pie: {
					innerSize: 75,
					depth: 45
				}
			},
			exporting: {
				enabled: false
			},
			credits: {
				enabled: false
			},
			series: [
				{
					name: 'Sales'
				}
			]
		};

		this.bubbleChartOptions = {
			chart: {
				type: 'bubble',
				plotBorderWidth: 1,
				zoomType: 'xy',
				spacingTop: 0
			},
			legend: {
				enabled: false
			},
			title: {
				floating: true,
				text: 'Dealer Performance in their Region'
			},
			xAxis: {
				gridLineWidth: 1,
				title: {
					text: 'Actual'
				}
			},
			yAxis: {
				startOnTick: false,
				endOnTick: false,
				title: {
					text: 'Objective'
				},
				maxPadding: 0.2
			},
			tooltip: {
				useHTML: true,
				headerFormat: '<table>',
				footerFormat: '</table>',
				followPointer: true
			},
			plotOptions: {
				series: {
					dataLabels: {
						enabled: true,
						format: '{point.code}'
					}
				},
				bubble: {
					minSize: 3,
					maxSize: 50
				}
			},
			series: [
				{
					marker: {
						fillColor: {
							radialGradient: { cx: 0.4, cy: 0.3, r: 0.7 },
							stops: [
								[0, 'rgba(255,255,255,0.5)'],
								[
									1,
									Highcharts.Color(Highcharts.getOptions().colors[0])
										.setOpacity(0.5)
										.get('rgba')
								]
							]
						}
					}
				}
			],
			navigation: {
				buttonOptions: {
					symbolStroke: '#3F51B5'
				}
			}
		};
	}

	filterDealers(name: string) {
		return name
			? this.activeVanDealers.filter(
					dealer =>
						dealer.dealerName.toLowerCase().indexOf(name.toLowerCase()) >= 0 ||
						dealer.dealerCode.toLowerCase().indexOf(name.toLowerCase()) >= 0
				)
			: this.activeVanDealers;
	}

	displayFn(dealer): string {
		return dealer ? dealer.dealerName : dealer;
	}

	ngOnInit() {
		this.basicForm = new FormGroup({});
		this.getMonthYearArray();
	}

	// get all active van dealers
	getMonthYearArray() {
		let url: string;
		if (this.fetchMockData) {
			url = 'assets/mock-data/global/month-year-data.json';
		} else {
			url = environment.apiCriteriaService + '/years';
		}
		this.http.get<MonthYearInfo[]>(url).subscribe(
			data => {
				this.monthYearInfo = data;
				this.selectedMonthAndYear = this.monthYearInfo[0];
				this.getAllActiveDealers();
			},
			(err: HttpErrorResponse) => {
				if (err.error instanceof Error) {
					this.logger.error('An error occurred:', err.error.message);
				} else {
					this.logger.error(
						`Backend returned code ${err.status}, body was: ${err.error}`
					);
				}
			}
		);
	}

	// get all active van dealers
	getAllActiveDealers() {
		let url: string;
		if (this.fetchMockData) {
			url = 'assets/mock-data/van-dashboard/active-van-dealers.json';
		} else {
			url = environment.apiCriteriaService + '/vandealers';
		}
		this.http.get<DealerInfoModel[]>(url).subscribe(
			data => {
				this.activeVanDealers = data;
				this.filteredDealers = this.dealerCtrl.valueChanges
					.startWith(null)
					.map(
						dealer =>
							dealer && typeof dealer === 'object' ? dealer.dealerName : dealer
					)
					.map(name => this.filterDealers(name));
				this.selectedDealerInfo = this.activeVanDealers[0];
				this.dashboardHeader = this.selectedDealerInfo.dealerName;
				this.dashboardHeader +=
					' (' + this.monthYearInfo[0].monthYearDesc + ')';
				this.isFilterPanelOpen = true;
				this.getKpiInformation();
			},
			(err: HttpErrorResponse) => {
				if (err.error instanceof Error) {
					this.logger.error('An error occurred:', err.error.message);
				} else {
					this.logger.error(
						'Backend returned code ${err.status}, body was: ${err.error}'
					);
				}
			}
		);
	}

	onAppResize(isResized: boolean) {
		let counter = 0;
		if (isResized) {
			const intervalId = setInterval(() => {
				if (counter === 0) {
					if (this.donutChart) {
						this.donutChart.reflow();
					}
					if (this.bubbleChart) {
						this.bubbleChart.reflow();
					}
					if (this.barChart) {
						this.barChart.reflow();
					}
					counter++;
				}
			}, 200);
			setTimeout(() => {
				clearInterval(intervalId);
			}, 1000);
		}
	}

	saveDonutChartInstance(chartInstance) {
		this.donutChart = chartInstance;
		this.donutChart.reflow();
		this.donutChart.showLoading();
	}

	saveBubbleChartInstance(chartInstance) {
		this.bubbleChart = chartInstance;
		this.bubbleChart.reflow();
	}

	saveBarChartInstance(chartInstance) {
		this.barChart = chartInstance;
		this.barChart.reflow();
	}

	tabChanged(tabChangeEvent: MatTabChangeEvent) {
		if (tabChangeEvent.index === 1) {
			this.barChart.reflow();
		}
	}

	public onChange(event): void {
		this.barChart.yAxis[0].update({
			title: {
				text: event.value + ' (YTD)'
			}
		});
		this.setActlandObjForLastSixMonthsForGivenKpi(event.value);
	}

	public bottomKpiOnChange(event): void {
		this.setDataForBubbleChart(event.value);
	}

	setDataForBubbleChart(kpiName: string) {
		for (const kpi of this.kpiInfo) {
			if (kpi.kpi === kpiName) {
				this.bubbleChartData = [];
				this.bubbleChartData = kpi.bubble_chart_data.slice(0);
				if (kpiName === 'CPPP') {
					this.bubbleChart.xAxis[0].update({
						labels: {
							format: '${value}'
						}
					});
					this.bubbleChart.yAxis[0].update({
						labels: {
							format: '${value}'
						}
					});
					this.bubbleChart.series[0].update({
						tooltip: {
							pointFormat:
								'<tr><th colspan="2"><h3>{point.name}</h3></th></tr>' +
								'<tr><th>Actual:</th><td>${point.x}</td></tr>' +
								'<tr><th>Objective:</th><td>${point.y}</td></tr>' +
								'<tr><th>Contribution:</th><td>{point.z}%</td></tr>'
						}
					});
				} else {
					this.bubbleChart.xAxis[0].update({
						labels: {
							format: '{value}'
						}
					});
					this.bubbleChart.yAxis[0].update({
						labels: {
							format: '{value}'
						}
					});
					this.bubbleChart.series[0].update({
						tooltip: {
							pointFormat:
								'<tr><th colspan="2"><h3>{point.name}</h3></th></tr>' +
								'<tr><th>Actual:</th><td>{point.x}</td></tr>' +
								'<tr><th>Objective:</th><td>{point.y}</td></tr>' +
								'<tr><th>Contribution:</th><td>{point.z}%</td></tr>'
						}
					});
				}
				this.bubbleChart.series[0].setData(
					this.bubbleChartData,
					true,
					true,
					true
				);
				break;
			}
		}
	}

	setActlandObjForLastSixMonthsForGivenKpi(kpiName: string) {
		for (const kpi of this.kpiInfo) {
			if (kpi.kpi === kpiName) {
				this.actForLastSixMonths = kpi.actl_ytd_last_6_months.slice(0);
				this.objForLastSixMonths = kpi.obj_ytd_last_6_months.slice(0);
				this.barChart.xAxis[0].update({
					categories: kpi.last_six_month_names
				});
				this.barChart.yAxis[0].update({
					title: {
						text: kpi.kpi + ' (YTD)'
					}
				});
				this.barChart.series[0].setData(
					this.actForLastSixMonths,
					true,
					true,
					true
				);
				this.barChart.series[1].setData(
					this.objForLastSixMonths,
					true,
					true,
					true
				);
				break;
			}
		}
	}

	setBubbleChartInfo() {
		this.bubbleChart.setTitle(
			{
				text:
					'Dealer Performance - ' +
					this.titlecasePipe.transform(this.selectedDealerInfo.regionName) +
					' Region'
			},
			null
		);
	}

	setDonutChartInfo() {
		this.donutChartData = [];
		for (const kpi of this.kpiInfo) {
			if (kpi.kpi === 'Total Sales') {
				this.donutChart.setTitle(
					{
						text: 'Total Sales (YTD) - ' + kpi.ytd
					},
					null
				);
			} else if (kpi.kpi === 'Fleet Sales' || kpi.kpi === 'Retail Sales') {
				const tempChartData = [];
				tempChartData.push(kpi.kpi);
				tempChartData.push(parseInt(kpi.ytd.replace(/,/g, ''), 10));
				this.donutChartData.push(tempChartData);
			}
		}
		this.donutChart.series[0].setData(this.donutChartData, true, true, false);
		this.donutChart.hideLoading();
		this.setBubbleChartInfo();
	}

	getKpiInformation(): void {
		let urlStr: string;

		if (this.fetchMockData) {
			urlStr = 'assets/mock-data/van-dashboard/kpi-table-data.json';
			this.http.get<VanDashboardModel>(urlStr).subscribe(
				data => {
					this.kpiInfo = data.kpiInfo;
					this.setActlandObjForLastSixMonthsForGivenKpi(this.kpiInfo[0].kpi);
					this.setDonutChartInfo();
					this.setDataForBubbleChart(this.kpiInfo[0].kpi);
				},
				(err: HttpErrorResponse) => {
					if (err.error instanceof Error) {
						this.logger.error('An error occurred!:', err.error.message);
					} else {
						this.logger.error(
							`Backend returned code ${err.status}, body was: ${err.error}`
						);
					}
				}
			);
		} else {
			const body = {
				dealerDim: this.selectedDealerInfo.dealerDim,
				monthYrDim: this.selectedMonthAndYear.monthYearDim,
				regionDim: this.selectedDealerInfo.regionDim
			};
			console.log(JSON.stringify(body));
			urlStr = environment.apiVanService + '/generateReport';
			this.http.post<VanDashboardModel>(urlStr, body).subscribe(
				data => {
					this.kpiInfo = data.kpiInfo;
					this.setActlandObjForLastSixMonthsForGivenKpi(this.kpiInfo[0].kpi);
					this.setDonutChartInfo();
					this.isFilterPanelOpen = !this.isFilterPanelOpen;
					this.dashboardHeader = this.selectedDealerInfo.dealerName;
					this.dashboardHeader +=
						' (' + this.selectedMonthAndYear.monthYearDesc + ')';
					this.setBubbleChartInfo();
					this.setDataForBubbleChart(this.kpiInfo[0].kpi);
				},
				(err: HttpErrorResponse) => {
					if (err.error instanceof Error) {
						this.logger.error('An error occurred:', err.error.message);
					} else {
						this.logger.error(
							'Backend returned code ${err.status}, body was: ${err.error}'
						);
					}
				}
			);
		}
	}
}
