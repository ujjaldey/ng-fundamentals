import { Injectable } from '@angular/core';
import { EventService } from '../shared/event.service';
import { Resolve } from '@angular/router';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EventListResolverService implements Resolve<any>{

  constructor(private eventService: EventService) { }

  resolve() {
    return this.eventService.getEvents().pipe(map(events => events)); // we need to retrun an observable. if we subscribe() then it wont be returning an observable
  }
}
