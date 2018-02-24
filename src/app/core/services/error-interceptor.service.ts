import {
	HttpErrorResponse,
	HttpEvent,
	HttpHandler,
	HttpInterceptor,
	HttpRequest,
	HttpResponse
} from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/do";
import "rxjs/add/operator/catch";
import "rxjs/add/observable/throw";
import { Injector } from "@angular/core";
import { NGXLogger } from "ngx-logger";

export class ErrorInterceptorService implements HttpInterceptor {
	constructor(private injector: Injector, private logger: NGXLogger) {}

	intercept(
		req: HttpRequest<any>,
		next: HttpHandler
	): Observable<HttpEvent<any>> {
		return next
			.handle(req)
			.do((ev: HttpEvent<any>) => {
				if (ev instanceof HttpResponse) {
					this.logger.log("ev in the do: ", ev);
				}
			})
			.catch((response: any) => {
				if (response.error instanceof ErrorEvent) {
					this.logger.error("An error occurred:", response.error.message);
				} else if (response instanceof HttpErrorResponse) {
					this.logger.error(
						`Backend returned code ${response.status}, ` +
							`body was: ${response.error}`
					);
				}
				return Observable.throw(response);
			});
	}
}
