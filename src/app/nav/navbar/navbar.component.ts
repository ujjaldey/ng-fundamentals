import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/user/auth.service';
import { ISession, EventService } from 'src/app/events';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  searchTerm = '';
  foundSessions: ISession[];

  constructor(private auth: AuthService, private eventService: EventService) { }

  ngOnInit() {
  }

  searchSessions(searchTerm: string) {
    this.eventService.searchSessions(searchTerm).subscribe(sessions => {
      this.foundSessions = sessions;
    });
  }
}
