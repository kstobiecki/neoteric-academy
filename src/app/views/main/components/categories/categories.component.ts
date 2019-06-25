import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class AppCategoriesComponent {

  @Output() emitCategory = new EventEmitter<Category>();
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
    this.emitCategory.emit(this.activeCategory);
  }

  showInputVariable(activeCategoryInput: HTMLInputElement) {
    console.log(activeCategoryInput);
  }

}
