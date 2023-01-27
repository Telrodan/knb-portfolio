import { Component, OnInit, HostListener } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import {
  animate,
  style,
  transition,
  trigger,
  state
} from '@angular/animations';

import AOS from 'aos';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'knb-portfolio-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('slideInAndOutAnimation', [
      state('false', style({ top: '0' })),
      state('true', style({ top: '-82px' })),
      transition('false => true', animate('0.4s ease-in')),
      transition('true => false', animate('0.4s ease-in'))
    ])
  ]
})
export class AppComponent implements OnInit {
  @HostListener('window:scroll', ['$event'])
  private onScroll() {
    const scrollDistance = window.pageYOffset;
    if (scrollDistance < this.previousScrollDistance) {
      this.isNavbarHidden = false;
    } else {
      this.isNavbarHidden = window.pageYOffset >= 50 ? true : false;
    }
    this.previousScrollDistance = scrollDistance;
  }

  public isNavbarHidden = false;
  public previousScrollDistance = 0;

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
