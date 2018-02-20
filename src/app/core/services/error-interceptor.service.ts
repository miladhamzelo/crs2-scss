import {
  HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest,
  HttpResponse
} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import {Injector} from "@angular/core";

export class ErrorInterceptorService implements HttpInterceptor {

  constructor(private injector: Injector) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req)
      .do((ev: HttpEvent<any>) => {
        if (ev instanceof HttpResponse) {
          console.log('ev in the do: ', ev);
        }
      })
      .catch((response: any) => {
        // console.log('inside error');
        if (response instanceof HttpErrorResponse) {
          // console.log('response in the catch: ', response);
        }

        return Observable.throw(response);
      });
  }
}
