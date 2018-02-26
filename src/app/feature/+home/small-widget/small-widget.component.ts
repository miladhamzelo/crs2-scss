import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'app-small-widget',
	templateUrl: './small-widget.component.html',
	styleUrls: ['./small-widget.component.scss']
})
export class SmallWidgetComponent implements OnInit {
	@Input() title: string;
	@Input() subTitle: string;
	@Input() chipText: string;
	@Input() chipIcon: string;
	@Input() chipColor: string;
	@Input() valueText: string;

	constructor() {}

	ngOnInit() {}
}
