import { Injectable } from '@angular/core';
import { HttpClientService } from '../../../shared/http';
import { LoginUser, User } from '../../../shared/shared.interface';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  hideFilters;

  constructor(private  httpClientService: HttpClientService) {}

  async register(email: string, name: string, password: string): Promise<any> {
    let user: User = {email: email, name: name, password: password};
    // @ts-ignore
    let resp = await this.httpClientService.onRegister(user);
    return resp;
  }

  async login(email: string, password: string): Promise<any> {
    let user: LoginUser = {email: email, password: password};
    let resp = await  this.httpClientService.onLogin(user);
    return resp;
  }
}
