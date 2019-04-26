import { Component } from '@angular/core';
import { AuthService } from '../../services';

import { FormControl, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-auth-signup',
  templateUrl: './auth-signup.component.html',
  styleUrls: ['./auth-signup.component.scss'],
})
export class AuthSignupComponent {

  signupForm: FormGroup;
  validated: boolean = false;
  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.signupForm = new FormGroup({
      'name': new FormControl(null, Validators.required),
      'username': new FormControl(null, Validators.required),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, [Validators.required]),
      'confirmPassword': new FormControl(null, [Validators.required])
    });
  }

  onSubmit() {
    console.log(this.signupForm);
   // this.signupForm.reset();
  }

}
