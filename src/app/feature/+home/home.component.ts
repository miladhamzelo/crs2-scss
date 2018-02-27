import { Component, OnInit } from '@angular/core';
import { NGXLogger } from 'ngx-logger';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
	smallWidgetArray: SmallWidget[];
	mediumWidgetArray: MediumWidget[];
	fetchMockData = true;

	constructor(private http: HttpClient, private logger: NGXLogger) {}

	ngOnInit() {
		let url: string;
		if (this.fetchMockData) {
			url = 'assets/mock-data/home/small-widget-data.json';
			this.http.get<SmallWidget[]>(url).subscribe(
				data => {
					this.smallWidgetArray = data;
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
			url = 'assets/mock-data/home/medium-widget-data.json';
			this.http.get<MediumWidget[]>(url).subscribe(
				data => {
					this.mediumWidgetArray = data;
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
	}
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
