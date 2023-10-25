import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

@Injectable()
export class UserService {
  constructor(private http: HttpClient) {}

  login(userData: any): Observable<any> {
    // Make sure to specify the response type you expect
    const apiUrl = 'http://localhost:0317/auth/users/login';
    return this.http.post(apiUrl, userData);
  }
}
