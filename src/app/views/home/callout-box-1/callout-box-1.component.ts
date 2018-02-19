import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-callout-box-1',
  templateUrl: './callout-box-1.component.html',
  styleUrls: ['./callout-box-1.component.css']
})
export class CalloutBox1Component implements OnInit {

    @Input() title: string;
    @Input() subTitle: string;
    @Input() chipText: string;
    @Input() chipIcon: string;
    @Input() chipColor: string;
    @Input() valueText: string;

  constructor() { }

  ngOnInit() {
  }

}
