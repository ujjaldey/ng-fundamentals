import { Component, OnInit } from '@angular/core';
import { EventService } from '../shared/event.service';
import { ToastrService } from 'src/app/common/toastr.service';
import { ActivatedRoute } from '@angular/router';
import { IEvent } from '../shared';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {
  constructor(private eventService: EventService, private toastr: ToastrService, private route: ActivatedRoute) { }
  events: IEvent[];

  ngOnInit() {
    this.events = this.route.snapshot.data['events']; //this 'events' should match with path: 'events' in app.routes
  }
}
