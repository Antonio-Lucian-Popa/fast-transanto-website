import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Email } from '../interfaces/email';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  URL = "http://localhost:8080";

  constructor(private http: HttpClient) { }

  sendEmail(emailPayload: Email): Observable<any> {
    return this.http.post<any>(`${this.URL}/api/v1/email`, emailPayload);
  }
}
