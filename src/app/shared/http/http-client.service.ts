import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { LoginUser, User } from '../shared.interface';
import { CookieService } from 'ngx-cookie-service';


@Injectable()
export class HttpClientService {
  serverPath: string = 'http://localhost:5000';
  authorization: string = '/auth';
  register: string = '/register';
  login: string = '/login';
  token: string = 'token';


  constructor(private http: HttpClient,
              private cookieServ: CookieService) {}

  async onRegister(user: User): Promise<any> {
    let url = this.serverPath + this.authorization + this.register;
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    let options = { headers: headers};
    let resp = await this.http.post( url, JSON.stringify(user), options)
      .toPromise().catch((error: HttpErrorResponse) => {
        return error;
      });
    return resp;
  }

  async OnLogin(user: LoginUser): Promise<any> {
    let url = this.serverPath + this.authorization + this.login;
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    let options = { headers: headers};
    let resp = await this.http.post( url, JSON.stringify(user), options)
      .toPromise().catch((error: HttpErrorResponse) => {
        return error;
      });
    if (!(resp instanceof HttpErrorResponse)) {
      let data = <{user: User, token: {expiresIn: number, token: string}}>
        resp.valueOf();
      this.cookieServ.set(this.token, data.token.token);
    }
    console.log(resp);
    return resp;
  }
}
