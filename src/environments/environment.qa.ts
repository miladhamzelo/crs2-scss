import {NgxLoggerLevel} from 'ngx-logger';

export const environment = {
  production: false,
  apiEndPoint: 'https://crs2-qa.es.corpintra.net/fieldOne/api-service/v1',
  apiCriteriaService: 'https://crs2-qa.es.corpintra.net/api-criteria-service/api-service/v1',
  apiVanService: 'https://crs2-qa.es.corpintra.net/van-api-service/v1/',
  logLevel: NgxLoggerLevel.INFO,
  googleAnalyticsMode: 'auto',
  googleAnalyticsUID: 'UA-108182264-2'
};
