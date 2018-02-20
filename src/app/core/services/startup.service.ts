import {Injectable} from '@angular/core';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';

import {environment} from '@env/environment';

import {GlobalDataService} from './globaldata.service';
import {UserInfoModel} from '../global-model/userinfo/userinfo.model';
import {NGXLogger} from 'ngx-logger';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';

@Injectable()
export class StartupService {

    constructor(private http: HttpClient,
                public logger: NGXLogger,
                private globalDataService: GlobalDataService) {
    }

    load(): any {
        return this.http
        .get<UserInfoModel>(environment.apiEndPoint + '/getLoggedInUserId')
        .subscribe(
            data => {
                this.logger.log(data);
                this.globalDataService.shareObj['userInfoModel'] = data;
            }/*,
            (err: HttpErrorResponse) => {
                if (err.error instanceof Error) {
                    this.logger.error('An error occurred:', err.error.message);
                } else {
                    this.logger.error(`Backend returned code ${err.status}, body was: ${err.error}`);
                }
            }*/
        );
    }
}


