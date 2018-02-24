import { AfterViewInit, Component, OnInit } from "@angular/core";
import { NGXLogger } from "ngx-logger";
import { AppResizeService } from "../../../core/services/app-resize.service";
declare var require: any;
const Highcharts = require("highcharts");

@Component({
	selector: "app-app-highcharts",
	templateUrl: "./app-highcharts.component.html",
	styleUrls: ["./app-highcharts.component.scss"]
})
export class AppHighchartsComponent implements OnInit, AfterViewInit {
	resChartOptions: Object;
	resChart: any;

	cmbChartOptions: Object;
	cmbChart: any;

	threeDimOptions: Object;
	threeDimChart: any;

	bubbleChartOptions: Object;
	bubbleChart: any;

	constructor(
		private logger: NGXLogger,
		private appResizeService: AppResizeService
	) {
		this.appResizeService.appResized$.subscribe(isResized =>
			this.onAppResize(isResized)
		);

		this.resChartOptions = {
			chart: {
				type: "column"
			},

			title: {
				text: "Highcharts Responsive Chart"
			},

			subtitle: {
				text: "Resize the frame to change appearance"
			},

			legend: {
				align: "right",
				verticalAlign: "middle",
				layout: "vertical"
			},

			xAxis: {
				categories: ["Apples", "Oranges", "Bananas"],
				labels: {
					x: -10
				}
			},

			yAxis: {
				allowDecimals: false,
				title: {
					text: "Amount"
				}
			},

			series: [
				{
					name: "Christmas Eve",
					data: [1, 4, 3]
				},
				{
					name: "Christmas Day before dinner",
					data: [6, 4, 2]
				},
				{
					name: "Christmas Day after dinner",
					data: [8, 4, 3]
				}
			],

			responsive: {
				rules: [
					{
						condition: {
							maxWidth: 500
						},
						chartOptions: {
							legend: {
								align: "center",
								verticalAlign: "bottom",
								layout: "horizontal"
							},
							yAxis: {
								labels: {
									align: "left",
									x: 0,
									y: -5
								},
								title: {
									text: null
								}
							},
							subtitle: {
								text: null
							},
							credits: {
								enabled: false
							}
						}
					}
				]
			}
		};

		this.bubbleChartOptions = {
			chart: {
				type: "areaspline"
			},
			title: {
				text: "Average fruit consumption during one week"
			},
			legend: {
				layout: "vertical",
				align: "left",
				verticalAlign: "top",
				x: 150,
				y: 100,
				floating: true,
				borderWidth: 1,
				backgroundColor:
					(Highcharts.theme && Highcharts.theme.legendBackgroundColor) ||
					"#FFFFFF"
			},
			xAxis: {
				categories: [
					"Monday",
					"Tuesday",
					"Wednesday",
					"Thursday",
					"Friday",
					"Saturday",
					"Sunday"
				],
				plotBands: [
					{
						// visualize the weekend
						from: 4.5,
						to: 6.5,
						color: "rgba(68, 170, 213, .2)"
					}
				]
			},
			yAxis: {
				title: {
					text: "Fruit units"
				}
			},
			tooltip: {
				shared: true,
				valueSuffix: " units"
			},
			credits: {
				enabled: false
			},
			plotOptions: {
				areaspline: {
					fillOpacity: 0.5
				}
			},
			series: [
				{
					name: "John",
					data: [3, 4, 3, 5, 4, 10, 12]
				},
				{
					name: "Jane",
					data: [1, 3, 4, 3, 3, 5, 4]
				}
			]
		};

		this.threeDimOptions = {
			chart: {
				type: "pie",
				options3d: {
					enabled: true,
					alpha: 45,
					beta: 0
				}
			},
			title: {
				text: "Browser market shares at a specific website, 2014"
			},
			tooltip: {
				pointFormat: "{series.name}: <b>{point.percentage:.1f}%</b>"
			},
			exporting: {
				enabled: false
			},
			plotOptions: {
				pie: {
					allowPointSelect: true,
					cursor: "pointer",
					depth: 35,
					dataLabels: {
						enabled: true,
						format: "{point.name}"
					}
				}
			},
			series: [
				{
					type: "pie",
					name: "Browser share",
					data: [
						["Firefox", 45.0],
						["IE", 26.8],
						{
							name: "Chrome",
							y: 12.8,
							sliced: true,
							selected: true
						},
						["Safari", 8.5],
						["Opera", 6.2],
						["Others", 0.7]
					]
				}
			]
		};

		this.cmbChartOptions = {
			plotOptions: {
				column: {
					stacking: "normal"
				}
			},
			chart: {
				zoomType: "xy"
			},
			title: {
				text: "Average Monthly Weather Data for Tokyo"
			},
			subtitle: {
				text: "Source: WorldClimate.com"
			},
			xAxis: [
				{
					categories: [
						"Jan",
						"Feb",
						"Mar",
						"Apr",
						"May",
						"Jun",
						"Jul",
						"Aug",
						"Sep",
						"Oct",
						"Nov",
						"Dec"
					]
				}
			],
			yAxis: [
				{
					// Primary yAxis
					labels: {
						formatter: function() {
							return this.value + "°C";
						},
						style: {
							color: "#89A54E"
						}
					},
					title: {
						text: "Temperature",
						style: {
							color: "#89A54E"
						}
					},
					opposite: true
				},
				{
					// Secondary yAxis
					gridLineWidth: 0,
					title: {
						text: "Rainfall",
						style: {
							color: "#4572A7"
						}
					},
					labels: {
						formatter: function() {
							return this.value + " mm";
						},
						style: {
							color: "#4572A7"
						}
					}
				},
				{
					// Tertiary yAxis
					gridLineWidth: 0,
					title: {
						text: "Sea-Level Pressure",
						style: {
							color: "#AA4643"
						}
					},
					labels: {
						formatter: function() {
							return this.value + " mb";
						},
						style: {
							color: "#AA4643"
						}
					},
					opposite: true
				}
			],
			tooltip: {
				shared: true
			},
			legend: {
				layout: "vertical",
				align: "left",
				x: 120,
				verticalAlign: "top",
				y: 80,
				floating: true,
				backgroundColor: "#FFFFFF"
			},
			series: [
				{
					name: "Rainfall",
					color: "#4572A7",
					type: "column",
					yAxis: 1,
					data: [
						49.9,
						71.5,
						106.4,
						129.2,
						144.0,
						176.0,
						135.6,
						148.5,
						216.4,
						194.1,
						95.6,
						54.4
					],
					tooltip: {
						valueSuffix: " mm"
					}
				},
				{
					name: "Frogs",
					color: "#257766",
					type: "column",
					yAxis: 1,
					data: [
						59.9,
						81.5,
						10.4,
						121.2,
						164.0,
						186.0,
						125.6,
						48.5,
						266.4,
						174.1,
						95.6,
						54.4
					],
					tooltip: {
						valueSuffix: " mm"
					}
				},
				{
					name: "Sea-Level Pressure",
					type: "spline",
					color: "#AA4643",
					yAxis: 2,
					data: [
						1016,
						1016,
						1015.9,
						1015.5,
						1012.3,
						1009.5,
						1009.6,
						1010.2,
						1013.1,
						1016.9,
						1018.2,
						1016.7
					],
					marker: {
						enabled: false
					},
					dashStyle: "shortdot",
					tooltip: {
						valueSuffix: " mb"
					}
				},
				{
					name: "Temperature",
					color: "#89A54E",
					type: "spline",
					data: [
						7.0,
						6.9,
						9.5,
						14.5,
						18.2,
						21.5,
						25.2,
						26.5,
						23.3,
						18.3,
						13.9,
						9.6
					],
					tooltip: {
						valueSuffix: " °C"
					}
				}
			]
		};
	}

	ngOnInit() {
		/*this.logger.error('my error message here!');
        this.logger.debug('my debug message here!');
        this.logger.info('my info message here!');
        this.logger.log('my log message here!');
        this.logger.trace('my trace message here!');
        this.logger.warn('my warn message here!');*/
	}

	ngAfterViewInit() {}

	onAppResize(isResized: boolean) {
		let counter = 0;
		if (isResized) {
			const intervalId = setInterval(() => {
				if (counter === 0) {
					if (this.resChart) {
						this.resChart.reflow();
					}
					if (this.bubbleChart) {
						this.bubbleChart.reflow();
					}
					if (this.threeDimChart) {
						this.threeDimChart.reflow();
					}
					if (this.cmbChart) {
						this.cmbChart.reflow();
					}
					counter++;
				}
			}, 200);
			setTimeout(() => {
				clearInterval(intervalId);
			}, 1000);
		}
	}

	saveResChartInstance(chartInstance) {
		this.resChart = chartInstance;
	}

	saveBubbleChartInstance(chartInstance) {
		this.bubbleChart = chartInstance;
	}

	saveCmbChartInstance(chartInstance) {
		this.cmbChart = chartInstance;
	}

	savethreeDimChartInstance(chartInstance) {
		this.threeDimChart = chartInstance;
	}
}
