import { Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  selectedCategory: Category;

  catchCategory(event: Category) {
    this.selectedCategory = event;
  }
}
