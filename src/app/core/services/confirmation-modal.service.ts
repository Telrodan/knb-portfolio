import { Injectable } from '@angular/core';

import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConfirmationModalService {
  public isOpen = false;
  public titleAndMessageChanges$ = new Subject();
  public confirm = new Subject<boolean>();
  public cancel = new Subject<boolean>();

  public toggleModal(): void {
    this.isOpen = !this.isOpen;
  }

  public confirmAction(title: string, message: string): Promise<boolean> {
    this.isOpen = true;
    this.titleAndMessageChanges$.next({ title, message });
    return new Promise((resolve) => {
      this.confirm.subscribe(() => {
        this.isOpen = false;
        resolve(true);
      });
      this.cancel.subscribe(() => {
        this.isOpen = false;
        resolve(false);
      });
    });
  }
}
