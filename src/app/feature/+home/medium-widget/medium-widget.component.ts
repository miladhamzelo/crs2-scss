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
  tooltipPositionAbove = 'above';
  tooltipPositionBelow = 'below';

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
}
