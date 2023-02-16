import { Component, OnDestroy, OnInit } from '@angular/core';

import { Subject, takeUntil, tap } from 'rxjs';

import { Work } from 'src/app/core/models/work.model';
import { WorkService } from 'src/app/core/services/work.service';

@Component({
  selector: 'knb-portfolio-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.scss']
})
export class WorksComponent implements OnInit, OnDestroy {
  public works: Work[];
  private destroy = new Subject<null>();
  constructor(private workService: WorkService) {}

  public ngOnInit(): void {
    this.workService
      .getWorks()
      .pipe(
        tap((worksDTO) => {
          this.works = worksDTO.works;
        }),
        takeUntil(this.destroy)
      )
      .subscribe();
  }

  public ngOnDestroy(): void {
    this.destroy.next(null);
    this.destroy.complete();
  }
}
