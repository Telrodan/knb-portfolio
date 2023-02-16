import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';

import AOS from 'aos';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'knb-portfolio-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public currentRoute: string;
  public isDemoMode = false;
  public faYoutube = faYoutube;

  constructor(private router: Router) {}

  public ngOnInit(): void {
    // Check URL, if starts with /works/demo no portfolio navbar and footer displayed in demo mode
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.currentRoute = event.url;
        this.isDemoMode = this.currentRoute.startsWith('/works/demo');
      }
    });
    // Init animations
    AOS.init();
  }
}
