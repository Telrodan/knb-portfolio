import { Component, OnInit } from '@angular/core';
import { faUser, faPhone } from '@fortawesome/free-solid-svg-icons';
import { SpinnerService } from 'src/app/core/services/spinner.service';
@Component({
  selector: 'knb-portfolio-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  public faUser = faUser;
  public faPhone = faPhone;

  constructor(private spinnerService: SpinnerService) {}

  public ngOnInit(): void {
    this.spinnerService.startSpinner();
    setTimeout(() => {
      this.spinnerService.stopSpinner();
    }, 700);
  }
}
