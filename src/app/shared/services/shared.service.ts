import { Injectable } from '@angular/core';
import { LoginUser, ParamsInterface} from '../shared.interface';
import { HttpClientService } from '../http';

@Injectable({
  providedIn: 'root'
})

export class SharedService {

  canDisplaySidenav = false;

  userId: string = '';
  offerId: string = '';

  filterParams: ParamsInterface = {
    city: 'All',
    technology: 'All',
    expLvl: 'All',
    salaryMin: '0',
  };

  constructor(private  httpClientService: HttpClientService) {}

  onClick() {
    this.canDisplaySidenav = !this.canDisplaySidenav;
  }

  async login(email: string, password: string): Promise<any> {
    let user: LoginUser = {email: email, password: password};
    let resp = await  this.httpClientService.onLogin(user);
    return resp;
  }

  getUserId() {
    this.userId = this.httpClientService.userID;
    return this.userId;
  }

  async deleteOffer(offerId) {
    let id = offerId;
    let resp = await this.httpClientService.deleteOffer(id).subscribe();
    console.log(id);
    return resp;
  }
}
