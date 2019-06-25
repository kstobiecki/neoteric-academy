import { Injectable } from '@angular/core';
import {  Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class MainService {
  activeCategorySubject = new Subject();
  activeCategory: Category;

  setActiveCategory(category: Category) {
    this.activeCategory = this.activeCategory !== category ? category : undefined;
    this.activeCategorySubject.next(this.activeCategory);
  }

  getActiveCategoryStream() {
    return this.activeCategorySubject.asObservable();
  }
}
