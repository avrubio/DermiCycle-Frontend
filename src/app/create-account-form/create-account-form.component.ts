import {
  Component,
  OnInit,
} from '@angular/core';

import { UserService } from '../services/user.service';

@Component({
  selector: 'app-create-account-form',
  templateUrl: './create-account-form.component.html',
  styleUrls: ['./create-account-form.component.css'],
})
export class CreateAccountFormComponent implements OnInit {
  user = {
    firstName: '',
    emailAddress: '',
    password: '',
    skinCycle: '',
    skinType: '',
  };
  jwt: string = '';

  constructor(private signupService: UserService) {}

  signUp(): void {
    this.signupService
      .signUp(
        this.user.firstName,
        this.user.emailAddress,
        this.user.password,
        this.user.skinCycle,
        this.user.skinType
      )
      .subscribe(
        (response) => {
          console.log('Account signup successful', response);
        },
        (error) => {
          console.error('Account signup failed', error);
          // Handle login errors here (e.g., display an error message)
        }
      );
  }

  ngOnInit(): void {}
}
