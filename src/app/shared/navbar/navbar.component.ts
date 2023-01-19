import { Component, HostListener, Input, OnInit } from '@angular/core';
import {
  animate,
  style,
  transition,
  trigger,
  state
} from '@angular/animations';

import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faXmark, faBars } from '@fortawesome/free-solid-svg-icons';

import { isMobileView } from '../utils/mobile-view-treshold';

@Component({
  selector: 'knb-portfolio-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  animations: [
    trigger('slideInAndOutAnimation', [
      state('false', style({ right: '-100%' })),
      state('true', style({ right: '0' })),
      transition('false => true', animate('0.3s ease-in')),
      transition('true => false', animate('0.3s ease-in'))
    ])
  ]
})
export class NavbarComponent implements OnInit {
  @Input() public isDemoMode: boolean;
  public isNavbarOpen = false;
  public isMobileView = false;

  public faLinkedin = faLinkedin;
  public faGithub = faGithub;
  public faXmark = faXmark;
  public faBars = faBars;

  @HostListener('window:resize', ['$event'])
  public onResize() {
    this.isMobileView = isMobileView();
  }

  public ngOnInit(): void {
    this.onResize();
  }

  public toggleNavbar(): void {
    if (this.isMobileView) {
      this.isNavbarOpen = !this.isNavbarOpen;
      document.body.style.overflowY = this.isNavbarOpen ? 'hidden' : 'scroll';
    }
  }
}
