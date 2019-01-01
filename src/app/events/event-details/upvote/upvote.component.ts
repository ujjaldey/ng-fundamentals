import { Component, OnInit, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-upvote',
  templateUrl: './upvote.component.html',
  styleUrls: ['./upvote.component.css']
})
export class UpvoteComponent implements OnInit {
  iconColor: string;
  @Input() count: number;
  @Input() set voted(val) { // @Input setters
    this.iconColor = val ? 'red' : 'white';
  }
  @Input() vote: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  onClick() {
    this.vote.emit({});
  }
}
