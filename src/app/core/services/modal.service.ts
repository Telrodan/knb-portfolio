import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  public isOpen = false;

  public toggleModal(): void {
    this.isOpen = !this.isOpen;
  }
}
