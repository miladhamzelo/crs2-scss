import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-app-external',
  templateUrl: './app-external.component.html',
  styleUrls: ['./app-external.component.css']
})
export class AppExternalComponent implements OnInit {

  @ViewChild('iframe') iframe: ElementRef;
  @Input() sourceURL: string;

  constructor() { }

  ngOnInit() {
    this.sourceURL = 'https://www.youtube.com/embed/LiJcw-iAGKQ';
  }

}
