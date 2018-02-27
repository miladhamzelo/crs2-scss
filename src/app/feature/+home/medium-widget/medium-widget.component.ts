import { Component, Input, OnInit } from '@angular/core';
import { WindowRef } from '../../../core/services/window.ref.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-medium-widget',
	templateUrl: './medium-widget.component.html',
	styleUrls: ['./medium-widget.component.scss']
})
export class MediumWidgetComponent implements OnInit {
	@Input() title: string;
	@Input() iconClass: string;
	@Input() iconName: string;
	@Input() tooltipPosition: string;
	@Input() tooltipText: string;
	@Input() linkTo: string; // internal or external
	@Input() url: string;
	@Input() externalWindowName: string;

	nativeWindow: any;

	public constructor(private _windowref: WindowRef, private router: Router) {
		this.nativeWindow = _windowref.getNativeWindow();
	}

	ngOnInit() {}

	widgetOnClick(): void {
		if (this.linkTo === 'internal') {
			this.router.navigateByUrl(this.url);
		} else if (this.linkTo === 'external') {
			this.nativeWindow.open(this.url, this.externalWindowName);
		} else {
			return;
		}
	}
}
