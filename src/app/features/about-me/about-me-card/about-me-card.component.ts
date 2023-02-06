import { Component, Input, OnInit } from '@angular/core';

import {
  faHtml5,
  faCss3Alt,
  faSass,
  faSquareJs,
  faAngular,
  faGit,
  faGithub,
  faNodeJs
} from '@fortawesome/free-brands-svg-icons';

interface CardData {
  section: string;
  scroll: string;
  title: string;
  description: string;
  isButton: boolean;
  isIcons: boolean;
  backgroundImage: string;
  imgSrc: string;
  imgSrcMobile: string;
}

@Component({
  selector: 'knb-portfolio-about-me-card',
  templateUrl: './about-me-card.component.html',
  styleUrls: ['./about-me-card.component.scss']
})
export class AboutMeCardComponent implements OnInit {
  @Input() public data: CardData;
  public isMobileView: boolean;

  public faHtml5 = faHtml5;
  public faCss3Alt = faCss3Alt;
  public faSass = faSass;
  public faSquareJs = faSquareJs;
  public faAngular = faAngular;
  public faGit = faGit;
  public faGithub = faGithub;
  public faNodeJs = faNodeJs;

  public ngOnInit(): void {
    this.checkIsMobileView();
    console.log(this.isMobileView);
  }

  public checkIsMobileView(): void {
    this.isMobileView = window.innerWidth < 576;
  }
}
