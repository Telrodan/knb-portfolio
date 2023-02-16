import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Work } from '../models/work.model';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class WorkService {
  constructor(private apiService: ApiService) {}

  public getWorks(): Observable<{ works: Work[] }> {
    return this.apiService.get$<{ works: Work[] }>('works');
  }
}
