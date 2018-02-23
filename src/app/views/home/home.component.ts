import {Component, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {Router} from '@angular/router';
import {WindowRef} from '../../core/services/window.ref.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    @ViewChild('testOutlet', {read: ViewContainerRef}) testOutlet: ViewContainerRef;
    nativeWindow: any;
    box1Color = 'lightslategrey';
    box1HighlightClass = 'p-0';
    icon1ColorClass = 'text-gray';
    tooltipPositionAbove = 'above';
    tooltipPositionBelow = 'below';

    box2Color = 'lightslategrey';
    box2HighlightClass = 'p-0';
    icon2ColorClass = 'text-gray';

    box3Color = 'lightslategrey';
    box3HighlightClass = 'p-0';
    icon3ColorClass = 'text-gray';

    box4Color = 'lightslategrey';
    box4HighlightClass = 'p-0';
    icon4ColorClass = 'text-gray';

    box5Color = 'lightslategrey';
    box5HighlightClass = 'p-0';
    icon5ColorClass = 'text-gray';

    sharedChartOptions: any = {
        responsive: true,
        legend: {
            display: false,
            position: 'bottom'
        }
    };
    chartColors: Array <any> = [{
        backgroundColor: '#3f51b5',
        borderColor: '#3f51b5',
        pointBackgroundColor: '#3f51b5',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }, {
        backgroundColor: '#eeeeee',
        borderColor: '#e0e0e0',
        pointBackgroundColor: '#e0e0e0',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(77,83,96,1)'
    }, {
        backgroundColor: 'rgba(148,159,177,0.2)',
        borderColor: 'rgba(148,159,177,1)',
        pointBackgroundColor: 'rgba(148,159,177,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }];
    /*
  * Line Chart Options
  */
    lineChartData: Array <any> = [{
        data: [5, 5, 7, 8, 4, 5, 5],
        label: 'Series A',
        borderWidth: 1
    }, {
        data: [5, 4, 4, 3, 6, 2, 5],
        label: 'Series B',
        borderWidth: 1
    }];
    lineChartLabels: Array <any> = ['1', '2', '3', '4', '5', '6', '7'];
    lineChartOptions: any = Object.assign({
        animation: false,
        scales: {
            xAxes: [{
                gridLines: {
                    color: 'rgba(0,0,0,0.02)',
                    zeroLineColor: 'rgba(0,0,0,0.02)'
                }
            }],
            yAxes: [{
                gridLines: {
                    color: 'rgba(0,0,0,0.02)',
                    zeroLineColor: 'rgba(0,0,0,0.02)'
                },
                ticks: {
                    beginAtZero: true,
                    suggestedMax: 9,
                }
            }]
        }
    }, this.sharedChartOptions);
    public lineChartLegend = false;
    public lineChartType = 'line';
    lineChartPointsData: Array <any> = [{
        data: [6, 5, 8, 8, 5, 5, 4],
        label: 'Series A',
        borderWidth: 1,
        fill: false,
        pointRadius: 10,
        pointHoverRadius: 15,
        showLine: false
    }, {
        data: [5, 4, 4, 2, 6, 2, 5],
        label: 'Series B',
        borderWidth: 1,
        fill: false,
        pointRadius: 10,
        pointHoverRadius: 15,
        showLine: false
    }];
    lineChartPointsOptions: any = Object.assign({
        scales: {
            xAxes: [{
                gridLines: {
                    color: 'rgba(0,0,0,0.02)',
                    zeroLineColor: 'rgba(0,0,0,0.02)'
                }
            }],
            yAxes: [{
                gridLines: {
                    color: 'rgba(0,0,0,0.02)',
                    zeroLineColor: 'rgba(0,0,0,0.02)'
                },
                ticks: {
                    beginAtZero: true,
                    suggestedMax: 9,
                }
            }]
        },
        elements: {
            point: {
                pointStyle: 'rectRot',
            }
        }
    }, this.sharedChartOptions);

    // Bubble Chart
    bubbleChartData: Array <any> = [{
        data: [{
            x: 4,
            y: 4,
            r: 15,
        }, {
            x: 6,
            y: 12,
            r: 30,
        }, {
            x: 5,
            y: 4,
            r: 10,
        }, {
            x: 8,
            y: 4,
            r: 6,
        }, {
            x: 7,
            y: 8,
            r: 4,
        }, {
            x: 3,
            y: 13,
            r: 14,
        }, {
            x: 5,
            y: 6,
            r: 8,
        }, {
            x: 7,
            y: 2,
            r: 10,
        }],
        label: 'Series A',
        borderWidth: 1
    }];
    bubbleChartType = 'bubble';
    bubbleChartLabels: Array <any> = ['1', '2', '3', '4', '5', '6', '7'];
    bubbleChartLegend = true;

    bubbleChartOptions: any = Object.assign({
        animation: false,
        scales: {
            xAxes: [{
                gridLines: {
                    color: 'rgba(0,0,0,0.02)',
                    zeroLineColor: 'rgba(0,0,0,0.02)'
                }
            }],
            yAxes: [{
                gridLines: {
                    color: 'rgba(0,0,0,0.02)',
                    zeroLineColor: 'rgba(0,0,0,0.02)'
                },
                ticks: {
                    beginAtZero: true,
                    suggestedMax: 9,
                }
            }]
        }
    }, this.sharedChartOptions);

    /*
  * Bar Chart
  */
    barChartLabels: string[] = ['1', '2', '3', '4', '5', '6', '7'];
    barChartType = 'bar';
    barChartLegend = true;
    barChartData: any[] = [{
        data: [5, 6, 7, 8, 4, 5, 5],
        label: 'Series A',
        borderWidth: 0
    }, {
        data: [5, 4, 4, 3, 6, 2, 5],
        label: 'Series B',
        borderWidth: 0
    }];
    barChartOptions: any = Object.assign({
        scaleShowVerticalLines: false,
        scales: {
            xAxes: [{
                gridLines: {
                    color: 'rgba(0,0,0,0.02)',
                    zeroLineColor: 'rgba(0,0,0,0.02)'
                }
            }],
            yAxes: [{
                gridLines: {
                    color: 'rgba(0,0,0,0.02)',
                    zeroLineColor: 'rgba(0,0,0,0.02)'
                },
                position: 'left',
                ticks: {
                    beginAtZero: true,
                    suggestedMax: 9
                }
            }]
        }
    }, this.sharedChartOptions);

    // Horizontal Bar Chart
    barChartHorizontalType = 'horizontalBar';
    barChartHorizontalOptions: any = Object.assign({
        scaleShowVerticalLines: false,
        scales: {
            xAxes: [{
                gridLines: {
                    color: 'rgba(0,0,0,0.02)',
                    zeroLineColor: 'rgba(0,0,0,0.02)'
                },
                ticks: {
                    beginAtZero: true,
                    suggestedMax: 9
                }
            }],
            yAxes: [{
                gridLines: {
                    color: 'rgba(0,0,0,0.02)',
                    zeroLineColor: 'rgba(0,0,0,0.02)'
                }
            }]
        }
    }, this.sharedChartOptions);

    callOutOneBoxes: CallOutOneBox[] = [
        {
            title: 'Total Sales',
            subTitle: 'Month To Date',
            chipText: '20%',
            chipIcon: 'trending_up',
            chipColor: 'primary',
            valueText: '22,450',
        },
        {
            title: 'Sales Exp Score',
            subTitle: 'Quarter To Date',
            chipText: '10%',
            chipIcon: 'trending_up',
            chipColor: 'accent',
            valueText: '982',
        },
        {
            title: 'Turn Rate',
            subTitle: 'Year To Date',
            chipText: '9%',
            chipIcon: 'trending_up',
            chipColor: 'accent',
            valueText: '44.7%',
        },
        {
            title: 'Tier Purchases',
            subTitle: 'Year To Date',
            chipText: '2%',
            chipIcon: 'trending_down',
            chipColor: 'warn',
            valueText: '$503,893',
        }
    ];

    public constructor(private _windowref: WindowRef, private router: Router) {
        this.nativeWindow = _windowref.getNativeWindow();
    }

    ngOnInit() {}

    dpsOnClick(): void {
        this.nativeWindow.open('http://mbhobgnapp802.americas.bg.corpintra.net:9084/fieldOne', 'DPS');
    }

    pacOnClick(): void {
        this.nativeWindow.open('https://crs2-qa.es.corpintra.net/pac/app/main.html#/dealerCallVolumeReport', 'PAC');
    }

    laureateOnClick(): void {
        this.nativeWindow.open('http://sl-qa.usfdc.corpintra.net/laureate-admin/main/indexFull.html?userType=H&costCenter=00273', 'Laureate');
    }

    vanDashboardOnClick(): void {
        this.router.navigateByUrl('vandashboard');
    }

  selfServiceOnClick(): void {
    this.router.navigateByUrl('others/c3');
  }

    changeStyle_1($event) {
        if ($event.type === 'mouseover') {
            this.box1Color = '#3f51b5';
            this.box1HighlightClass = 'p-0 dashboard-box-border';
            this.icon1ColorClass = 'text-blue';
        } else {
            this.box1Color = 'lightslategrey';
            this.box1HighlightClass = 'p-0';
            this.icon1ColorClass = 'text-gray';
        }
    }

    changeStyle_2($event) {
        if ($event.type === 'mouseover') {
            this.box2Color = '#3f51b5';
            this.box2HighlightClass = 'p-0 dashboard-box-border';
            this.icon2ColorClass = 'text-blue';
        } else {
            this.box2Color = 'lightslategrey';
            this.box2HighlightClass = 'p-0';
            this.icon2ColorClass = 'text-gray';
        }
    }

    changeStyle_3($event) {
        if ($event.type === 'mouseover') {
            this.box3Color = '#3f51b5';
            this.box3HighlightClass = 'p-0 dashboard-box-border';
            this.icon3ColorClass = 'text-blue';
        } else {
            this.box3Color = 'lightslategrey';
            this.box3HighlightClass = 'p-0';
            this.icon3ColorClass = 'text-gray';
        }
    }

    changeStyle_4($event) {
        if ($event.type === 'mouseover') {
            this.box4Color = '#3f51b5';
            this.box4HighlightClass = 'p-0 dashboard-box-border';
            this.icon4ColorClass = 'text-blue';
        } else {
            this.box4Color = 'lightslategrey';
            this.box4HighlightClass = 'p-0';
            this.icon4ColorClass = 'text-gray';
        }
    }

  changeStyle_5($event) {
    if ($event.type === 'mouseover') {
      this.box5Color = '#3f51b5';
      this.box5HighlightClass = 'p-0 dashboard-box-border';
      this.icon5ColorClass = 'text-blue';
    } else {
      this.box5Color = 'lightslategrey';
      this.box5HighlightClass = 'p-0';
      this.icon5ColorClass = 'text-gray';
    }
  }

    /*loadComponent() {
        this.dynamicComponentLoader
            .getComponentFactory<MessageComponent>('message')
            .subscribe(componentFactory => {
                this.testOutlet.createComponent(componentFactory);
            }, error => {
                console.warn(error);
            });
    }*/
}

export interface CallOutOneBox {
    title: string;
    subTitle: string;
    chipText: string;
    chipIcon: string;
    chipColor: string;
    valueText: string;
}
