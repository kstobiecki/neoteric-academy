import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class AppQuestionsComponent {
  @Input() category: Category;
}
