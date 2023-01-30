import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import {
  faInbox,
  faPhone,
  faLocationDot,
  faPaperPlane
} from '@fortawesome/free-solid-svg-icons';
import { catchError } from 'rxjs';
import { EmailService } from 'src/app/core/services/email.service';

@Component({
  selector: 'knb-portfolio-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  public contactForm: FormGroup;
  public isLoading = true;
  public isSending = false;
  public isMessageSent = false;
  public isError = false;
  public faInbox = faInbox;
  public faPhone = faPhone;
  public faLocationDot = faLocationDot;
  public faPaperPlane = faPaperPlane;

  constructor(private emailService: EmailService) {}

  public ngOnInit(): void {
    setTimeout(() => {
      this.isLoading = false;
    }, 500);
    this.contactForm = new FormGroup({
      name: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      message: new FormControl(null, Validators.required)
    });
  }

  public onSendMessage(): void {
    this.isSending = true;
    if (this.contactForm.valid) {
      const message = {
        ...this.contactForm.value,
        sentTime: new Date().toString()
      };
      this.emailService.sendMessage(message).subscribe(() => {
        this.isMessageSent = true;
        this.isSending = false;
        console.log('sending finished');
      });
    }
  }
}
