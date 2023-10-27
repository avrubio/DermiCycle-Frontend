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
  private apiUrlLogin = 'http://localhost:317/auth/users/login/';

  private apiUrlSignUp = 'http://localhost:317/auth/users/register/';

  private apiUrlAddProduct = 'http://localhost:317/api/users/products/';

  constructor(private http: HttpClient) {}

  login(emailAddress: string, password: string): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const body = { emailAddress, password };

    return this.http.post(this.apiUrlLogin, body, { headers });
  }
  signUp(
    emailAddress: string,
    firstName: string,
    password: string,
    skinType: string,
    skinCyclePreference: string
  ): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const body = {
      firstName: firstName,
      emailAddress: emailAddress,
      skinCyclePreference: skinCyclePreference,
      skinType: skinType,
      password: password,
    };

    console.log(body);
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
