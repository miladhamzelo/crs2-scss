// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
import {NgxLoggerLevel} from 'ngx-logger';

export const environment = {
  production: false,
  apiEndPoint: 'http://localhost:50695/api-service/v1',
  apiCriteriaService: 'http://localhost:57676/api-service/v1',
  apiVanService: 'http://localhost:50699/van-api-service/v1/',
  logLevel: NgxLoggerLevel.TRACE,
  googleAnalyticsMode: 'none',
  googleAnalyticsUID: ''
};
