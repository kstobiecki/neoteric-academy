import { Component } from '@angular/core';
import { AuthService } from '../../services';

@Component({
  selector: 'app-auth-signin',
  templateUrl: './auth-signin.component.html',
  styleUrls: ['./auth-signin.component.scss'],
})
export class AuthSigninComponent {
  constructor(private authService: AuthService) {}
}
