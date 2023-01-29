import { Component, OnInit } from '@angular/core';
import { Work } from 'src/app/core/models/works.model';

import { works } from './WORKS_DATA';

@Component({
  selector: 'knb-portfolio-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.scss']
})
export class WorksComponent implements OnInit {
  public works: Work[] = works;
  public isLoading = true;

  public ngOnInit(): void {
    setTimeout(() => {
      this.isLoading = false;
    }, 500);
  }
}
