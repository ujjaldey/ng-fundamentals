import { Routes } from "@angular/router";
import { EventListComponent, EventDetailsComponent, CreateEventComponent, EventListResolverService, CreateSessionComponent, EventResolverService } from './events/index';
import { Error404Component } from "./errors/error404/error404.component";

export const appRoutes: Routes = [
    { path: 'events/new', component: CreateEventComponent, canDeactivate: ['canDeactivateCreateEvent'] },
    {
        path: 'events', component: EventListComponent, resolve: {
            events: EventListResolverService
        }
    },
    { path: 'events/:id', component: EventDetailsComponent, resolve: { event: EventResolverService } },
    { path: 'events/session/new', component: CreateSessionComponent },
    { path: '404', component: Error404Component },
    { path: '', redirectTo: '/events', pathMatch: 'full' },
    { path: 'user', loadChildren: './user/user.module#UserModule' } // loads UserModule class from ./user/user.module.ts
];