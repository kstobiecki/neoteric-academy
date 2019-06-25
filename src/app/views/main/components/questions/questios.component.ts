import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MainService } from '../../services';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class AppQuestionsComponent implements OnInit, OnDestroy {

  constructor(private mainService: MainService) {}

  category: Category;
  activeCategorySub: Subscription;

  ngOnInit() {
    this.activeCategorySub = this.mainService.getActiveCategoryStream().subscribe((category: Category) => {
      this.category = category;
    });
  }

  ngOnDestroy() {
    this.activeCategorySub.unsubscribe();
  }
}
