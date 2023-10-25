import {
  HttpClient,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrl = 'http://localhost:0317/auth/users/login/';

  constructor(private http: HttpClient) {}

  login(emailAddress: string, password: string): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const body = { emailAddress, password };

    return this.http.post(this.apiUrl, body, { headers });
  }
}
