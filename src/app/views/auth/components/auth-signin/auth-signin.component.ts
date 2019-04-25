import { Component } from '@angular/core';
import { AuthService } from '../../services';

import { FormControl, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-auth-signin',
  templateUrl: './auth-signin.component.html',
  styleUrls: ['./auth-signin.component.scss'],
})
export class AuthSigninComponent {

  signinForm: FormGroup;
  validated: boolean = false;
  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.signinForm = new FormGroup({
      'name': new FormControl(null, Validators.required),
      'username': new FormControl(null, Validators.required),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, [Validators.required]),
      'confirmPassword': new FormControl(null, [Validators.required])
    });
  }

  onSubmit() {
    console.log(this.signinForm);
    this.signinForm.reset();
  }

}
