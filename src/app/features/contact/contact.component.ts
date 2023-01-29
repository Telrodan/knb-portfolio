import { Component } from '@angular/core';

import {
  faInbox,
  faPhone,
  faLocationDot
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'knb-portfolio-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  public faInbox = faInbox;
  public faPhone = faPhone;
  public faLocationDot = faLocationDot;
}
