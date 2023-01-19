import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'knb-portfolio-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  public isLoading = true;

  public ngOnInit(): void {
    setTimeout(() => {
      this.isLoading = false;
    }, 500);
  }
}
