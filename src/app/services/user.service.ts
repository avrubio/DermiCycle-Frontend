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
  private apiUrlLogin = 'http://localhost:0317/auth/users/login/';

  private apiUrlSignUp = 'http://localhost:0317/auth/users/register/';

  private apiUrlAddProduct = 'http://localhost:0317/api/users/products/';

  constructor(private http: HttpClient) {}

  login(emailAddress: string, password: string): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const body = { emailAddress, password };

    return this.http.post(this.apiUrlLogin, body, { headers });
  }
  signUp(
    firstName: string,
    emailAddress: string,
    password: string,
    skinType: string,
    skinCyclePreference: string
  ): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const body = {
      emailAddress,
      firstName,
      skinType,
      skinCyclePreference,
      password,
    };

    return this.http.post(this.apiUrlSignUp, body, { headers });
  }

  addProduct(
    name: string,
    directions: string,
    stageId: number
  ): Observable<any> {
    const token = localStorage.getItem('jwt'); // Replace with your JWT token
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    const body = {
      name,
      directions,
      stageId,
    };

    return this.http.post(this.apiUrlAddProduct, body, { headers });
  }
}
