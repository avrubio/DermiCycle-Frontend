import {
  Component,
  OnInit,
} from '@angular/core';
import { Router } from '@angular/router';

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

  constructor(private loginService: UserService, private router: Router) {}

  login(): void {
    this.loginService
      .login(this.user.emailAddress, this.user.password)
      .subscribe(
        (response) => {
          console.log('Login successful', response);
          // Handle successful login here (e.g., set user session, redirect, etc.)
          localStorage.setItem('jwt', response.jwt);
          this.router.navigate(['/stage']);
        },
        (error) => {
          console.error('Login failed', error);
          // Handle login errors here (e.g., display an error message)
        }
      );
  }

  ngOnInit(): void {}
}
