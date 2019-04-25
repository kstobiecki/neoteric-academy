import { Component } from '@angular/core';
import { AuthService } from '../../services';
import { FormControl, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-auth-login',
  templateUrl: './auth-login.component.html',
  styleUrls: ['./auth-login.component.scss'],
})
export class AuthLoginComponent {
  username: string = '';
  password: string = '';
  loginForm: FormGroup;
  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      'username': new FormControl(null, Validators.required),
      'password': new FormControl(null, [Validators.required])
    });
  }

  onSubmit() {
    console.log(this.loginForm.value);
    this.onLogin();
    this.loginForm.reset();
  }

  onLogin() {
    if (this.username === 'admin' && this.password === '1234') {
      alert('Access granted. You are logged as ' + this.username);    
    } else {
      alert('Access denied');
    }
  }
}
