import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Answer, Question } from '../herum-quiz.component';

@Component({
  selector: 'quiz-four-answers-question',
  templateUrl: './quiz-four-answers-question.component.html',
  styleUrls: ['./quiz-four-answers-question.component.scss','../quiz-pages.scss']
})
export class QuizFourAnswersQuestionComponent implements OnInit {

  @Input() question!: Question;
  @Output() onAnswersChange = new EventEmitter<string[]>();

  userAnswers: string[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  //TODO: after move it to nes harim - add logic to uncheck using tal's formControl

  _onAnswersChange(answer: Answer) {
    this.userAnswers.push(answer.id);
    this.onAnswersChange.emit(this.userAnswers);
  }
}