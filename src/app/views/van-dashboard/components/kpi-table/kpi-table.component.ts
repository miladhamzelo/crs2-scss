import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {KpiInfoModel} from '../../model/kpi-info.model';
import {NGXLogger} from 'ngx-logger';

@Component({
  selector: 'app-kpi-table',
  templateUrl: './kpi-table.component.html',
  styleUrls: ['./kpi-table.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class KpiTableComponent implements OnInit {

  @Input() kpiInfo: KpiInfoModel[];
  stacked: boolean;

  constructor(private logger: NGXLogger) { }

  ngOnInit() {
  }

}
