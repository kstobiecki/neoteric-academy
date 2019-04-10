import { Component, DoCheck, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { AuthService } from '../../services';


@Component({
  selector: 'app-auth-signup',
  templateUrl: './auth-signup.component.html',
  styleUrls: ['./auth-signup.component.scss']
})
export class AuthSignupComponent implements OnInit, DoCheck {
  username: string = '';
  password: string = '';
  emptyEmail: boolean;
  emptyPassword: boolean;

  constructor(private authService: AuthService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
  }

  ngDoCheck() {
    this.route.params.subscribe(
      (params: Params) => {      // później params się przyda
        if (this.username === '') {
          this.emptyEmail = true;
        } else {
          this.emptyEmail = false;
        }
        if (this.password === '') {
          this.emptyPassword = true;
        } else {
          this.emptyPassword = false;
        }
      }
    );
  }

  onSignup() {
    this.router.navigate(['../login'], {relativeTo: this.route});
  }
  getEmailColor() {
    return this.emptyEmail === true ? 'red' : '';
  }
  getPasswordColor() {
    return this.emptyPassword === true ? 'red' : '';
  }
}
