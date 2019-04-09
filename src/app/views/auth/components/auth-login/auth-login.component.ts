import { Component } from '@angular/core';
import { AuthService } from '../../services';

@Component({
  selector: 'app-auth-login',
  templateUrl: './auth-login.component.html',
  styleUrls: ['./auth-login.component.scss'],
})
export class AuthLoginComponent {
  constructor(private authService: AuthService) {}
}
