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
  public currentRoute = '';
  public isDemoMode = false;
  public faYoutube = faYoutube;

  constructor(private router: Router) {}

  public ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.currentRoute = event.url;
        this.isDemoMode = this.currentRoute.startsWith('/works/demo');
      }
    });
    AOS.init();
  }
}
