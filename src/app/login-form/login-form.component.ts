import {
  Component,
  OnInit,
} from '@angular/core';

import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
})
export class LoginFormComponent implements OnInit {
  user = {
    emailAddress: '',
    password: '',
  };
  jwt: string = '';

  constructor(private loginService: UserService) {}

  login(): void {
    this.loginService
      .login(this.user.emailAddress, this.user.password)
      .subscribe(
        (response) => {
          console.log('Login successful', response);
          // Handle successful login here (e.g., set user session, redirect, etc.)
          this.jwt = response.jwt;
          console.log(this.jwt);
        },
        (error) => {
          console.error('Login failed', error);
          // Handle login errors here (e.g., display an error message)
        }
      );
  }

  ngOnInit(): void {}
}
