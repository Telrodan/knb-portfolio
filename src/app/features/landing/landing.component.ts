import { Component, OnInit } from '@angular/core';
import { faUser, faPhone } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'knb-portfolio-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  public isLoading = true;
  public faUser = faUser;
  public faPhone = faPhone;

  public ngOnInit(): void {
    setTimeout(() => {
      this.isLoading = false;
    }, 500);
  }
}
