import { AfterViewInit, Component, OnInit } from "@angular/core";
import { MatTabChangeEvent } from "@angular/material";

declare var tableau: any;

@Component({
	selector: "app-app-tableau-demo",
	templateUrl: "./app-tableau-demo.component.html",
	styleUrls: ["./app-tableau-demo.component.scss"]
})
export class AppTableauDemoComponent implements OnInit, AfterViewInit {
	tableauViz1: any;
	tableauViz2: any;
	tableauViz1Url: string;
	tableauViz2Url: string;

	constructor() {}

	ngOnInit() {
		this.tableauViz1Url =
			"https://public.tableau.com/views/Moneywellspent/Dashboard1?:embed=y&:display_count=yes";
		this.tableauViz2Url =
			"https://public.tableau.com/views/AtlanticHurricanes1950-2014/AtlanticHurricanes1950-2014?:embed=y&:loadOrderID=0&:display_count=yes";
	}

	ngAfterViewInit(): void {
		this.initTableauViz(0);
	}

	onTabChange(event: MatTabChangeEvent) {
		this.initTableauViz(event.index);
	}

	initTableauViz(index: number) {
		let placeholderDiv: any;
		let url = "";
		const options = {
			hideTabs: true,
			width: window.innerWidth - window.innerWidth * 0.1,
			height: window.innerHeight - window.innerHeight * 0.1,
			onFirstInteractive: function() {
				// The viz is now ready and can be safely used.
			}
		};
		if (index === 0) {
			url = this.tableauViz1Url;
			placeholderDiv = document.getElementById("tableauViz1");
			this.tableauViz1 = new tableau.Viz(placeholderDiv, url, options);
		} else if (index === 1) {
			url = this.tableauViz2Url;
			placeholderDiv = document.getElementById("tableauViz2");
			this.tableauViz2 = new tableau.Viz(placeholderDiv, url, options);
		}
	}
}
