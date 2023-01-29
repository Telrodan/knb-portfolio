import { Component, OnInit } from '@angular/core';

import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { ConfirmationModalService } from 'src/app/core/services/confirmation-modal.service';

interface ConfirmationModal {
  title: string;
  message: string;
}

@Component({
  selector: 'knb-portfolio-confirmation-modal',
  templateUrl: './confirmation-modal.component.html',
  styleUrls: ['./confirmation-modal.component.scss']
})
export class ConfirmationModalComponent implements OnInit {
  public faXmark = faXmark;

  public title: string;
  public message: string;

  constructor(public confirmationModalService: ConfirmationModalService) {}

  public ngOnInit(): void {
    this.confirmationModalService.titleAndMessageChanges$.subscribe(
      (data: ConfirmationModal) => {
        console.log(data);
        this.title = data.title;
        this.message = data.message;
      }
    );
  }

  public onConfirm(): void {
    this.confirmationModalService.confirm.next(true);
  }

  public onCancel(): void {
    this.confirmationModalService.cancel.next(false);
  }

  public onClose(): void {
    this.confirmationModalService.cancel.next(false);
  }
}
