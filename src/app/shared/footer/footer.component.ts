import { Component, Input } from '@angular/core';

import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faSheetPlastic, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'knb-portfolio-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  @Input() public isDemoMode: boolean;

  public faUser = faUser;
  public faSheetPlastic = faSheetPlastic;
  public faPhone = faPhone;
  public faLinkedin = faLinkedin;
  public faGithub = faGithub;
}
