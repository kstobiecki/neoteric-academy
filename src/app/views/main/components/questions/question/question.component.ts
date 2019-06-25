import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class AppQuestionComponent {

  question: string;
  @Input() set setQuestion(question: string) {
    console.log('setQuestion triggered');
    this.question = question;
  }

}
