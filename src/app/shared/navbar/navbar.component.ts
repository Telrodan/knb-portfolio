import { Component, HostListener, Input, OnInit } from '@angular/core';
import {
  animate,
  style,
  transition,
  trigger,
  state
} from '@angular/animations';

import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import {
  faXmark,
  faBars,
  faUser,
  faSheetPlastic,
  faPhone
} from '@fortawesome/free-solid-svg-icons';

import { isMobileView } from '../utils/mobile-view-treshold';

@Component({
  selector: 'knb-portfolio-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  animations: [
    trigger('slideInAndOutFromLeftAnimation', [
      state('false', style({ right: '-100%' })),
      state('true', style({ right: '0' })),
      transition('false => true', animate('0.3s ease-in')),
      transition('true => false', animate('0.3s ease-out'))
    ]),
    trigger('slideInAndOutFromTopAnimation', [
      state('false', style({ top: '0' })),
      state('true', style({ top: '-100px' })),
      transition('false => true', animate('0.4s ease-in')),
      transition('true => false', animate('0.4s ease-out'))
    ])
  ]
})
export class NavbarComponent implements OnInit {
  @HostListener('window:resize', ['$event'])
  public onResize() {
    this.isMobileView = isMobileView();
  }
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
  @Input() public isDemoMode: boolean;
  public isNavbarOpen = false;
  public isMobileView = false;
  public isNavbarHidden = false;
  private previousScrollDistance = 0;
  public faLinkedin = faLinkedin;
  public faGithub = faGithub;
  public faXmark = faXmark;
  public faBars = faBars;
  public faUser = faUser;
  public faSheetPlastic = faSheetPlastic;
  public faPhone = faPhone;

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
