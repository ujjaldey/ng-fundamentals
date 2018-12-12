import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-event-thumbnail',
  templateUrl: './event-thumbnail.component.html',
  styleUrls: ['./event-thumbnail.component.css']
})
export class EventThumbnailComponent implements OnInit {
  @Input()
  event: any;

  constructor() { }

  ngOnInit() {
  }

  getStartTimeClass() {
    const isEarlyStart = this.event && this.event.time === '8:00 am';
    return { green: isEarlyStart, bold: isEarlyStart };

    // if (this.event && this.event.time === '8:00 am') {
    //   return 'green bold';
    // }
    // return ''

    // if (this.event && this.event.time === '8:00 am') {
    //   return ['green', 'bold'];
    // }
    // return []
  }

  // getStartTimeStyle(): any {
  //   if (this.event && this.event.time === '8:00 am') {
  //     return { color: '#003300', 'font-weight': 'bold' };
  //   }
  //   return {};
  // }
}
