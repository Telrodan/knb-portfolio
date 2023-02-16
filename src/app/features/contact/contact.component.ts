import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import {
  faInbox,
  faPhone,
  faLocationDot,
  faPaperPlane
} from '@fortawesome/free-solid-svg-icons';
import { Subject, takeUntil, tap } from 'rxjs';
import { EmailService } from 'src/app/core/services/email.service';

@Component({
  selector: 'knb-portfolio-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit, OnDestroy {
  public contactForm: FormGroup;
  public isMessageSent = false;
  public isError = false;
  private destroy = new Subject<null>();

  public faInbox = faInbox;
  public faPhone = faPhone;
  public faLocationDot = faLocationDot;
  public faPaperPlane = faPaperPlane;

  constructor(private emailService: EmailService) {}

  public ngOnInit(): void {
    this.contactForm = new FormGroup({
      name: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      message: new FormControl(null, Validators.required)
    });
  }

  public ngOnDestroy(): void {
    this.destroy.next(null);
    this.destroy.complete();
  }

  public onSendMessage(): void {
    if (this.contactForm.valid) {
      const message = {
        ...this.contactForm.value
      };
      this.emailService
        .sendEmail$(message)
        .pipe(
          tap(() => {
            this.isMessageSent = true;
          }),
          takeUntil(this.destroy)
        )
        .subscribe();
    }
  }
}
