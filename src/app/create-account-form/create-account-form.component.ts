import {
  Component,
  OnInit,
} from '@angular/core';

import { SkincycleService } from '../services/skincycle.service';
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
    skinCyclePreference: '',
    skinType: '',
  };

  constructor(
    private signupService: UserService,
    private skincycleService: SkincycleService
  ) {}

  signUp(): void {
    this.signupService
      .signUp(
        this.user.emailAddress,
        this.user.firstName,
        this.user.skinCyclePreference,
        this.user.skinType,
        this.user.password
      )
      .subscribe(
        (response) => {
          console.log('Account signup successful', response);
          this.skincycleService.setUserSkinCyclePreference(
            this.user.skinCyclePreference
          );
        },
        (error) => {
          console.error('Account signup failed', error);
          // Handle login errors here (e.g., display an error message)
          console.log(error);
        }
      );
  }

  ngOnInit(): void {}
}
