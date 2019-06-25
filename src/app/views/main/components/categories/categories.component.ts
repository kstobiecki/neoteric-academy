import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { MainService } from '../../services';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class AppCategoriesComponent implements OnInit, OnDestroy {

  constructor(private mainService: MainService) {}

  @Output() emitCategory = new EventEmitter<Category>();
  activeCategorySub: Subscription;
  categories: Category[] = [
    {
      name: 'javascript',
      rating: 2,
      question: 'What is an arrow function?'
    },
    {
      name: 'html',
      rating: 1,
      question: 'What is a div?'
    },
    {
      name: 'css',
      rating: 3,
      question: 'What is a combinator?'
    },
    {
      name: 'typescript',
      rating: 7,
      question: 'What is an interface?'
    }
  ];
  activeCategory: Category = undefined;

  activateCategory(category: Category) {
    this.activeCategory = this.activeCategory !== category ? category : undefined;
    this.mainService.setActiveCategory(category);
  }

  showInputVariable(activeCategoryInput: HTMLInputElement) {
    console.log(activeCategoryInput);
  }

  ngOnInit() {
    this.activeCategorySub = this.mainService.getActiveCategoryStream().subscribe((category: Category) => {
      this.activeCategory = category;
    });
  }

  ngOnDestroy() {
    this.activeCategorySub.unsubscribe();
  }
}
