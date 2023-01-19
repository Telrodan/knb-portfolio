import { Component } from '@angular/core';
import { faUser, faPhone } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'knb-portfolio-landing-intro',
  templateUrl: './landing-intro.component.html',
  styleUrls: ['./landing-intro.component.scss']
})
export class LandingIntroComponent {
  public faUser = faUser;
  public faPhone = faPhone;
}
