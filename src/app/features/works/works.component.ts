import { Component } from '@angular/core';

import { works } from './WORKS_DATA';

@Component({
  selector: 'knb-portfolio-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.scss']
})
export class WorksComponent {
  public works = works;
}
