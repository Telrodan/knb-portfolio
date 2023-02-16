import { Component, Input } from '@angular/core';

import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faDisplay } from '@fortawesome/free-solid-svg-icons';

import { Work } from 'src/app/core/models/work.model';

@Component({
  selector: 'knb-portfolio-works-card',
  templateUrl: './works-card.component.html',
  styleUrls: ['./works-card.component.scss']
})
export class WorksCardComponent {
  @Input() public work: Work;

  public faGithub = faGithub;
  public faDisplay = faDisplay;
}
