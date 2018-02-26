import { Component, OnInit } from '@angular/core';
import { WindowRef } from '../../../core/services/window.ref.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-medium-widget',
	templateUrl: './medium-widget.component.html',
	styleUrls: ['./medium-widget.component.scss']
})
export class MediumWidgetComponent implements OnInit {
	nativeWindow: any;
	box1Color = 'lightslategrey';
	box1HighlightClass = 'p-0';
	icon1ColorClass = 'text-gray';
	tooltipPositionAbove = 'above';
	tooltipPositionBelow = 'below';

	box2Color = 'lightslategrey';
	box2HighlightClass = 'p-0';
	icon2ColorClass = 'text-gray';

	box3Color = 'lightslategrey';
	box3HighlightClass = 'p-0';
	icon3ColorClass = 'text-gray';

	box4Color = 'lightslategrey';
	box4HighlightClass = 'p-0';
	icon4ColorClass = 'text-gray';

	box5Color = 'lightslategrey';
	box5HighlightClass = 'p-0';
	icon5ColorClass = 'text-gray';

	public constructor(private _windowref: WindowRef, private router: Router) {
		this.nativeWindow = _windowref.getNativeWindow();
	}

	ngOnInit() {}

	dpsOnClick(): void {
		this.nativeWindow.open(
			'http://mbhobgnapp802.americas.bg.corpintra.net:9084/fieldOne',
			'DPS'
		);
	}

	pacOnClick(): void {
		this.nativeWindow.open(
			'https://crs2-qa.es.corpintra.net/pac/app/main.html#/dealerCallVolumeReport',
			'PAC'
		);
	}

	laureateOnClick(): void {
		this.nativeWindow.open(
			'http://sl-qa.usfdc.corpintra.net/laureate-admin/main/indexFull.html?userType=H&costCenter=00273',
			'Laureate'
		);
	}

	vanDashboardOnClick(): void {
		this.router.navigateByUrl('vandashboard');
	}

	selfServiceOnClick(): void {
		this.router.navigateByUrl('others/c3');
	}

	changeStyle_1($event) {
		if ($event.type === 'mouseover') {
			this.box1Color = '#3f51b5';
			this.box1HighlightClass = 'p-0 dashboard-box-border';
			this.icon1ColorClass = 'text-blue';
		} else {
			this.box1Color = 'lightslategrey';
			this.box1HighlightClass = 'p-0';
			this.icon1ColorClass = 'text-gray';
		}
	}

	changeStyle_2($event) {
		if ($event.type === 'mouseover') {
			this.box2Color = '#3f51b5';
			this.box2HighlightClass = 'p-0 dashboard-box-border';
			this.icon2ColorClass = 'text-blue';
		} else {
			this.box2Color = 'lightslategrey';
			this.box2HighlightClass = 'p-0';
			this.icon2ColorClass = 'text-gray';
		}
	}

	changeStyle_3($event) {
		if ($event.type === 'mouseover') {
			this.box3Color = '#3f51b5';
			this.box3HighlightClass = 'p-0 dashboard-box-border';
			this.icon3ColorClass = 'text-blue';
		} else {
			this.box3Color = 'lightslategrey';
			this.box3HighlightClass = 'p-0';
			this.icon3ColorClass = 'text-gray';
		}
	}

	changeStyle_4($event) {
		if ($event.type === 'mouseover') {
			this.box4Color = '#3f51b5';
			this.box4HighlightClass = 'p-0 dashboard-box-border';
			this.icon4ColorClass = 'text-blue';
		} else {
			this.box4Color = 'lightslategrey';
			this.box4HighlightClass = 'p-0';
			this.icon4ColorClass = 'text-gray';
		}
	}

	changeStyle_5($event) {
		if ($event.type === 'mouseover') {
			this.box5Color = '#3f51b5';
			this.box5HighlightClass = 'p-0 dashboard-box-border';
			this.icon5ColorClass = 'text-blue';
		} else {
			this.box5Color = 'lightslategrey';
			this.box5HighlightClass = 'p-0';
			this.icon5ColorClass = 'text-gray';
		}
	}
}
