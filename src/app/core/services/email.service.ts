import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Message } from '../models/message.model';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  constructor(private apiService: ApiService) {}

  public sendEmail$(message: Message) {
    return this.apiService.post$('emails/send-email', message);
  }
}
