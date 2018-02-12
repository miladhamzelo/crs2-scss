import {NgxLoggerLevel} from 'ngx-logger';

export const environment = {
  production: false,
  apiEndPoint: 'http://mbhobgnapp802.americas.bg.corpintra.net:9084/fieldOne/api-service/v1',
  apiCriteriaService: 'http://mbhobgnapp802.americas.bg.corpintra.net:9084/api-criteria-service/api-service/v1',
  apiVanService: 'http://mbhobgnapp802.americas.bg.corpintra.net:9084/api-van-service/van-api-service/v1/',
  logLevel: NgxLoggerLevel.DEBUG,
  googleAnalyticsMode: 'auto',
  googleAnalyticsUID: 'UA-108182264-1'
};
