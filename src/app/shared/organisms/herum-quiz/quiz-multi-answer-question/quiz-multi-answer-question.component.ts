import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Question, Answer } from '../herum-quiz.component';

@Component({
  selector: 'quiz-multi-answer-question',
  templateUrl: './quiz-multi-answer-question.component.html',
  styleUrls: ['./quiz-multi-answer-question.component.scss','../quiz-pages.scss']
})
export class QuizMultiAnswerQuestionComponent implements OnInit {

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

  get correctAnswerCount(){
    return this.question.answers.filter(answer => answer.isCorrect).length
  }

}
