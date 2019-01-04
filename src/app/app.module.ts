import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import {
  EventListComponent, EventThumbnailComponent,
  EventService, EventDetailsComponent,
  CreateEventComponent, EventListResolverService, CreateSessionComponent, DurationPipe,
  LocationValidator, EventResolverService
} from './events/index';
import { AppComponent } from './app.component';
import { NavbarComponent } from './nav/navbar/navbar.component';
import { JQ_TOKEN, TOASTR_TOKEN, Toastr, CollapsibleWellComponent, SimpleModalComponent } from './common/index';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routes';
import { Error404Component } from './errors/error404/error404.component';
import { AuthService } from './user/auth.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SessionListComponent } from './events/event-details/session-list/session-list.component';
import { ModalTriggerDirective } from './common/modal-trigger.directive';
import { UpvoteComponent } from './events/event-details/upvote/upvote.component';
import { VoterService } from './events/event-details/voter.service';

let toastr: Toastr = window['toastr'];
let jQuery = window['$'];

@NgModule({
  declarations: [
    AppComponent,
    EventListComponent,
    EventThumbnailComponent,
    NavbarComponent,
    EventDetailsComponent,
    CreateEventComponent,
    Error404Component,
    CreateSessionComponent,
    SessionListComponent,
    CollapsibleWellComponent,
    DurationPipe,
    SimpleModalComponent,
    ModalTriggerDirective,
    UpvoteComponent,
    LocationValidator
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [EventService,
    {
      provide: TOASTR_TOKEN,
      useValue: toastr
    },
    {
      provide: JQ_TOKEN,
      useValue: jQuery
    },
    // EventRouteActivatorService, // this can be written as: { provide: EventRouteActivatorService, useClass: EventRouteActivatorService },
    // useValue, useClass, useExisting, useFactory
    {
      provide: 'canDeactivateCreateEvent',
      useValue: checkDirtyState
    },
    EventListResolverService,
    AuthService, // AuthService is part of user.module. but it's added here as it can be shared. but this is not true for declarations & imports
    VoterService,
    EventResolverService
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }

export function checkDirtyState(component: CreateEventComponent) {
  if (component.isDirty) {
    return window.confirm('You have not saved this event, do you really want to cancel?');
  }
  return true;
}