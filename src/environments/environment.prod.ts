import {NgxLoggerLevel} from 'ngx-logger';

export const environment = {
  production: true,
  apiEndPoint: 'https://crs2.es.corpintra.net/fieldOne/api-service/v1',
  apiCriteriaService: 'https://crs2.es.corpintra.net/api-criteria-service/api-service/v1',
  apiVanService: 'https://crs2.es.corpintra.net/van-api-service/v1/',
  logLevel: NgxLoggerLevel.LOG,
  googleAnalyticsMode: 'auto',
  googleAnalyticsUID: 'UA-108182264-3'
};
