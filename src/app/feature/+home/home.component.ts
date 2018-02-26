import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';
import { WindowRef } from '../../core/services/window.ref.service';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
	callOutOneBoxes: CallOutOneBox[] = [
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
	constructor() {}

	ngOnInit() {}
}

export interface CallOutOneBox {
	title: string;
	subTitle: string;
	chipText: string;
	chipIcon: string;
	chipColor: string;
	valueText: string;
}
