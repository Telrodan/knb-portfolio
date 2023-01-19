import { Component } from '@angular/core';

import { faXmark } from '@fortawesome/free-solid-svg-icons';

import { ModalService } from 'src/app/core/services/modal.service';

@Component({
  selector: 'knb-portfolio-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {
  public faXmark = faXmark;

  constructor(public modalService: ModalService) {}

  public onClose(): void {
    this.modalService.toggleModal();
  }
}
