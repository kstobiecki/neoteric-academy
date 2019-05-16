import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../services';


@Component({
  selector: 'app-auth-signup',
  templateUrl: './auth-signup.component.html',
  styleUrls: ['./auth-signup.component.scss']
})
export class AuthSignupComponent implements OnInit {
  username: string = '';
  password: string = '';
  hideFilters = true;
  passwordPattern = '[a-z].*[0-9]|[0-9].*[a-z]';
  emailPattern = '^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\\.[a-zA-Z0-9-]+)*$';

  countries = ['Poland', 'Great Britain', 'Germany', 'USA', 'Russia'];

  angForm: FormGroup;

  constructor(private authService: AuthService,
              private router: Router,
              private route: ActivatedRoute,
              private formBuilder: FormBuilder) {
    this.createForm();
  }
  createForm() {
    this.angForm = this.formBuilder.group({
      email: ['', Validators.required ],
      password: ['', Validators.required ]
      }
    );
  }

  ngOnInit() {
    this.authService.hideFilters = this.hideFilters;
  }

  onSignup() {
    this.router.navigate(['../login'], {relativeTo: this.route});
  }
}
