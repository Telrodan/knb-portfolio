import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {
  private spinnerStatusUpdated = new Subject<boolean>();

  public getSpinnerStatus$(): Observable<boolean> {
    return this.spinnerStatusUpdated.asObservable();
  }

  public startSpinner(): void {
    document.body.style.overflow = 'hidden';
    this.spinnerStatusUpdated.next(true);
  }

  public stopSpinner(): void {
    document.body.style.overflow = 'scroll';
    this.spinnerStatusUpdated.next(false);
  }
}
