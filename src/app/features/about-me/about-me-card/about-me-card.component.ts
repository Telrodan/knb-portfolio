import { Component, Input } from '@angular/core';

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
  titleSpan: string;
  description: string;
  isButton: boolean;
  buttonText: string;
  buttonUrl: string;
  isIcons: boolean;
  imgSrc: string;
}

@Component({
  selector: 'knb-portfolio-about-me-card',
  templateUrl: './about-me-card.component.html',
  styleUrls: ['./about-me-card.component.scss']
})
export class AboutMeCardComponent {
  @Input() public data: CardData;

  public faHtml5 = faHtml5;
  public faCss3Alt = faCss3Alt;
  public faSass = faSass;
  public faSquareJs = faSquareJs;
  public faAngular = faAngular;
  public faGit = faGit;
  public faGithub = faGithub;
  public faNodeJs = faNodeJs;
}
