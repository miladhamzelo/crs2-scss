import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
	smallWidgetArray: SmallWidget[] = [
		{
			title: 'Total Sales',
			subTitle: 'Month To Date',
			chipText: '20%',
			chipIcon: 'trending_up',
			chipColor: 'primary',
			valueText: '22,450'
		},
		{
			title: 'Sales Exp Score',
			subTitle: 'Quarter To Date',
			chipText: '10%',
			chipIcon: 'trending_up',
			chipColor: 'accent',
			valueText: '982'
		},
		{
			title: 'Turn Rate',
			subTitle: 'Year To Date',
			chipText: '9%',
			chipIcon: 'trending_up',
			chipColor: 'accent',
			valueText: '44.7%'
		},
		{
			title: 'Tier Purchases',
			subTitle: 'Year To Date',
			chipText: '2%',
			chipIcon: 'trending_down',
			chipColor: 'warn',
			valueText: '$503,893'
		}
	];
	mediumWidgetArray: MediumWidget[] = [
		{
			title: 'Self Service',
			iconClass: 'material-icons md-48',
			iconName: 'photo_filter',
			tooltipPosition: 'above',
			tooltipText: '',
			linko: 'internal',
			url: 'others/c3',
			externalWindowName: ''
		},
		{
			title: 'DPS',
			iconClass: 'fa fa-tachometer fa-4x',
			iconName: '',
			tooltipPosition: 'above',
			tooltipText: 'Click to open Dealer Performance Summary dashboard',
			linko: 'external',
			url: 'http://mbhobgnapp802.americas.bg.corpintra.net:9084/fieldOne',
			externalWindowName: 'DPS'
		},
		{
			title: 'Vans Dashboard',
			iconClass: 'fa fa-bus fa-4x',
			iconName: '',
			tooltipPosition: 'above',
			tooltipText: '',
			linko: 'internal',
			url: 'vandashboard',
			externalWindowName: ''
		},
		{
			title: 'Laureate',
			iconClass: 'fa fa-trophy fa-4x',
			iconName: '',
			tooltipPosition: 'above',
			tooltipText: 'Click to open Laureate application',
			linko: 'external',
			url:
				'http://sl-qa.usfdc.corpintra.net/laureate-admin/main/indexFull.html?userType=H&costCenter=00273',
			externalWindowName: 'Laureate'
		},
		{
			title: 'PAC',
			iconClass: 'fa fa-wrench fa-4x',
			iconName: '',
			tooltipPosition: 'above',
			tooltipText: 'Click to open Parts Assiatance Center report',
			linko: 'external',
			url:
				'https://crs2-qa.es.corpintra.net/pac/app/main.html#/dealerCallVolumeReport',
			externalWindowName: 'PAC'
		},
		{
			title: 'Available',
			iconClass: 'fa fa-check-square-o fa-4x text-lightgray',
			iconName: '',
			tooltipPosition: 'above',
			tooltipText: '',
			linko: 'none',
			url: '',
			externalWindowName: ''
		}
	];
	constructor() {}

	ngOnInit() {}
}

export interface SmallWidget {
	title: string;
	subTitle: string;
	chipText: string;
	chipIcon: string;
	chipColor: string;
	valueText: string;
}

export interface MediumWidget {
	title: string;
	iconClass: string;
	iconName: string;
	tooltipPosition: string;
	tooltipText: string;
	linko: string; // internal or external
	url: string;
	externalWindowName: string;
}
