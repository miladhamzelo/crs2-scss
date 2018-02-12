import {NgModule} from '@angular/core';
import {HighchartsStatic} from 'angular2-highcharts/dist/HighchartsService';

declare var require: any;
export function highchartsFactory() {
    const highcharts = require('highcharts');
    const highchartsMore = require('highcharts/highcharts-more');
    const highcharts3D = require('highcharts/highcharts-3d');
    const highchartsExporting = require('highcharts/modules/exporting');
    highchartsMore(highcharts);
    highcharts3D(highcharts);
    highchartsExporting(highcharts);
    return highcharts;
}
import {ChartModule} from 'angular2-highcharts';

@NgModule({
    imports: [
        ChartModule
    ],
    providers: [
        {
            provide: HighchartsStatic,
            useFactory: highchartsFactory
        }
    ],
    exports: [
        ChartModule
    ]
})
export class HighchartsModule { }

