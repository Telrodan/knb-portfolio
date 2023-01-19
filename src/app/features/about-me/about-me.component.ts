import { Component, OnInit } from '@angular/core';

import { data } from './ABOUT_ME_DATA';

@Component({
  selector: 'knb-portfolio-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {
  public isLoading = true;
  public cardData = data;

  public ngOnInit(): void {
    setTimeout(() => {
      this.scrollToElement('about-me-section');
      this.isLoading = false;
    }, 500);
  }

  public scrollToElement(elementId: string): void {
    document
      .getElementById(elementId)
      .scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
