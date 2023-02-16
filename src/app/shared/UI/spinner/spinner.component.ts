import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil, tap } from 'rxjs';
import { SpinnerService } from 'src/app/core/services/spinner.service';

@Component({
  selector: 'knb-portfolio-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent implements OnInit, OnDestroy {
  public isLoading = false;
  private destroy = new Subject<null>();

  constructor(private spinnerService: SpinnerService) {}

  public ngOnInit(): void {
    this.spinnerService
      .getSpinnerStatus$()
      .pipe(
        tap((spinnerStatus) => {
          this.isLoading = spinnerStatus;
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
