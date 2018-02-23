import { Component, OnInit } from '@angular/core';
// import * as c3 from 'c3';
declare var tableau: any;

@Component({
  selector: 'app-app-c3-charts',
  templateUrl: './app-c3-charts.component.html',
  styleUrls: ['./app-c3-charts.component.scss']
})
export class AppC3ChartsComponent implements OnInit {

  tableauViz: any;

  constructor() { }

  ngOnInit() {
      /*let chart = c3.generate({
          bindto: '#chart',
          data: {
              columns: [
                  ['data1', 30, 20, 50, 40, 60, 50],
                  ['data2', 200, 130, 90, 240, 130, 220],
                  ['data3', 300, 200, 160, 400, 250, 250],
                  ['data4', 200, 130, 90, 240, 130, 220],
                  ['data5', 130, 120, 150, 140, 160, 150],
                  ['data6', 90, 70, 20, 50, 60, 120],
              ],
              type: 'bar',
              types: {
                  data3: 'spline',
                  data4: 'line',
                  data6: 'area',
              },
              groups: [
                  ['data1','data2']
              ]
          }
      });*/
    const placeholderDiv = document.getElementById('tableauViz');
    const url = 'https://public.tableau.com/views/CMO_1/GlobalOverview?:embed=y&:loadOrderID=0&:display_count=yes';
    const options = {
      hideTabs: false,
      width: '100%',
      height: '100%',
      toolbar: 'top',
      onFirstInteractive: function() {
        // The viz is now ready and can be safely used.
      }
    };
    this.tableauViz = new tableau.Viz(placeholderDiv, url, options);
  }

}
