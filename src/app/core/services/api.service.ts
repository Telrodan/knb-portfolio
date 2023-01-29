import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) {}

  public post$<T>(endpoint: string, data: any): Observable<T> {
    return <Observable<T>>(
      this.http.post(`${environment.databaseUrl}${endpoint}`, data)
    );
  }

  public get$<T>(endpoint: string, params?: any): Observable<T> {
    return <Observable<T>>(
      this.http.get(`${environment.databaseUrl}${endpoint}`, { params })
    );
  }

  public delete$<T>(endpoint: string, id: string): Observable<T> {
    return <Observable<T>>(
      this.http.delete(`${environment.databaseUrl}${endpoint}/` + id)
    );
  }

  public put$<T>(endpoint: string, id: string, data: any): Observable<T> {
    return <Observable<T>>(
      this.http.put(`${environment.databaseUrl}${endpoint}/` + id, data)
    );
  }
}
