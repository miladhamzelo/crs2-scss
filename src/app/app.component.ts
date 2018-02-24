import { Component, OnInit, AfterViewInit, Renderer2 } from "@angular/core";
import { Title } from "@angular/platform-browser";
import {
	Router,
	NavigationEnd,
	ActivatedRoute,
	ActivatedRouteSnapshot
} from "@angular/router";
import "rxjs/add/operator/filter";
import { RoutePartsService } from "./core/services/route-parts.service";
import { ThemeService } from "./core/services/theme.service";
import { NGXLogger } from "ngx-logger";
import { environment } from "@env/environment";

declare const ga: Function;

@Component({
	selector: "app-root",
	templateUrl: "./app.component.html",
	styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit, AfterViewInit {
	appTitle = "CRS 2.0";
	pageTitle = "";

	constructor(
		public title: Title,
		private router: Router,
		private activeRoute: ActivatedRoute,
		private routePartsService: RoutePartsService,
		private themeService: ThemeService,
		private renderer: Renderer2,
		private _logger: NGXLogger
	) {
		ga(
			"create",
			environment.googleAnalyticsUID,
			environment.googleAnalyticsMode
		);
	}

	ngOnInit() {
		// if EAI service is down/not reachable
		/*if (this._globalDataService.shareObj['userInfoModel'] === undefined) {
        this._logger.error('Looks like the EAI service is down...redirecting to fatal error page...');
        this.router.navigate(['/app-sessions/error/'],
            {
                replaceUrl: true,
                queryParams:
                    {
                        reportName: 'CRS2 application',
                        statusCode: '500',
                        statusMessage: 'Fatal Error'
                    }
            }
        );
    } else {
        // If EAI service call is successful
        if (this._globalDataService.shareObj['userInfoModel'].response.statusCode === '200') {
            this._logger.debug('app onInit() - has application access?- ' +
                      this._globalDataService.shareObj['userInfoModel'].hasAppAccess);
            if (!this._globalDataService.shareObj['userInfoModel'].hasAppAccess) {
                this._logger.info('User ' + this._globalDataService.shareObj['userInfoModel'].loggedInUserId +
                    ' has no access to the app...');
                this._logger.info('redirecting to not authorized page...');
                this.router.navigate(['/app-sessions/not-authorized'],
                    {
                        replaceUrl: true,
                        queryParams:
                            {
                                userId: this._globalDataService.shareObj['userInfoModel'].loggedInUserId,
                                reportName: 'CRS2 application'
                            }
                    });
            }
            // If EAI service returns any other status code except 200
        } else {
            this._logger.error('There is an error on the EAI service call - status code - ' +
                this._globalDataService.shareObj['userInfoModel'].response.statusCode +
                'and message - ' + this._globalDataService.shareObj['userInfoModel'].response.message);
            this.router.navigate(['/app-sessions/error/'],
                {
                    replaceUrl: true,
                    queryParams:
                        {
                            reportName: 'CRS2 application',
                            statusCode: this._globalDataService.shareObj['userInfoModel'].response.statusCode,
                            statusMessage: this._globalDataService.shareObj['userInfoModel'].response.message
                        }
                }
            );
        }
    }*/
		this.changePageTitle();
	}

	ngAfterViewInit() {
		this.themeService.applyMatTheme(this.renderer);
	}

	changePageTitle() {
		this.router.events
			.filter(event => event instanceof NavigationEnd)
			.subscribe(routeChange => {
				const routeParts = this.routePartsService.generateRouteParts(
					this.activeRoute.snapshot
				);
				if (!routeParts.length) {
					return this.title.setTitle(this.appTitle);
				}

				// Extract title from parts;
				this.pageTitle = routeParts
					.reverse()
					.map(part => part.title)
					.reduce((partA, partI) => {
						return `${partA} > ${partI}`;
					});
				this.pageTitle += ` | ${this.appTitle}`;
				this.title.setTitle(this.pageTitle);
			});
	}
}
