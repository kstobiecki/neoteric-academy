import { Component } from '@angular/core';
import { SharedService } from '../../services/shared.service';
import { OfferService } from '../../../views/offers/services/offer.service';

@Component({
  selector: 'app-offers-technology-filter',
  templateUrl: './offers-technology-filter.component.html',
  styleUrls: ['./offers-technology-filter.component.scss']
})
export class OffersTechnologyFilterComponent {
  techVal: string = 'all';
  salaryVal: string = '0';
  expVal: string = 'all';
  value: number = 0;
  highValue: number = 33000;

  techMain = [
    {name: 'JS',
      path: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ138BrCpQ0YZJFyVDbNXHAiKD0GBb2e2ayZjILlOBEV2B1DIzIDw'},
    {name: 'HTML',
      path: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1200px-HTML5_logo_and_wordmark.svg.png'},
    {name: 'PHP',
      path: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQR2lvBDa69Pe4wk11grzlwMv9_CQ5fpVF2G8mkfDSp4TLng6VJ'},
    {name: 'Ruby',
      path: 'https://banner2.kisspng.com/20180811/fwb/kisspng--5b6f68be63a406.9717291515340279664081.jpg'},
    {name: 'Python',
      path: 'https://png.pngtree.com/svg/20170621/7a35d4cb9d.svg'},
    {name: 'Java',
      path: 'http://icons.iconarchive.com/icons/papirus-team/papirus-apps/256/java-icon.png'},
    {name: '.Net',
      path: 'https://www.capitoltechsolutions.com/images/new-image-icons/software-dev/dot-net.png'},
    {name: 'Scala',
      path: 'https://cdn.iconscout.com/icon/free/png-256/scala-226059.png'},
    {name: 'C',
      path: 'https://cdn3.iconfinder.com/data/icons/programming-16/512/programming_6_00001-2-512.png'},
    {name: 'Mobile',
      path: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWeKk-mJcb0fFy4dTPJvAUGqocStczfnVzK9gOhJ-f-4B-H4XQ'},
    {name: 'Testing',
      path: 'http://www.iconninja.com/files/869/3/698/loop-icon.png'},
    {name: 'DevOps',
      path: 'https://cdn3.iconfinder.com/data/icons/devops-cycle/25/devops_cycle_1-512.png'},
    {name: 'UX/UI',
      path: 'https://image.flaticon.com/icons/png/512/38/38964.png'},
    {name: 'PM',
      path: 'https://cdn1.iconfinder.com/data/icons/science-and-technology-glyphs-1/128/25-512.png'},
    {name: 'Game',
      path: 'https://cdn3.iconfinder.com/data/icons/computer-network-icons/512/Controller-512.png'},
    {name: 'Blockchain',
      path: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhAn7S-IKPaJ4n1gAwRC5FKzSCwKy3enNaiqnCLcLWAQ22j5Ce'},
    {name: 'Security',
      path: 'https://d1nhio0ox7pgb.cloudfront.net/_img/g_collection_png/standard/256x256/shield.png'},
    {name: 'Data',
      path: 'https://previews.123rf.com/images/frbird/frbird1407/frbird140700062/30441905-network-database-icon-vector-illustration.jpg'},
    {name: 'Golang',
      path: 'https://img.icons8.com/color/420/golang.png'},
    {name: 'SAP',
      path: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSg8GeYzO9Fnf7_HTZKbwK8KRWBjN9gGDS58W7SxNNNdMYrBpm'},
    {name: 'Other',
      path: 'https://static.thenounproject.com/png/1249709-200.png'},
  ];

  expLvl = [
    {name: 'All'},
    {name: 'Junior'},
    {name: 'Mid'},
    {name: 'Senior'},
  ];

  salarySlider = false;

  constructor(private sharedServ: SharedService,
              private offerService: OfferService) {}

  onSalaryChoose() {
    this.salarySlider = !this.salarySlider;
    this.sharedServ.filterParams.salaryMin = this.salaryVal;
    console.log('jest');
    this.highValue = 33000;
}

  onTechChange(val: string) {
    this.techVal = val;
    this.sharedServ.filterParams.technology = this.techVal;
  }

  onSalaryChange(val: string) {
    this.salaryVal = val;
  }

  onExpChange(val: string) {
    this.expVal = val;
    this.sharedServ.filterParams.expLvl = this.expVal;
  }

  async ongetOffers() {
    await this.offerService.downloadOffers();
  }

}

