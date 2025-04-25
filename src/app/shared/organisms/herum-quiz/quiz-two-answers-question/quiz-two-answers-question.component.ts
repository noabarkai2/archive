import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Answer, Question, QuizUserAnswer } from '../herum-quiz.component';

@Component({
  selector: 'quiz-two-answers-question',
  templateUrl: './quiz-two-answers-question.component.html',
  styleUrls: ['./quiz-two-answers-question.component.scss']
})
export class QuizTwoAnswersQuestionComponent implements OnInit {

  @Input() question!: Question;
  @Input() userAnswers!: QuizUserAnswer;
  @Input() isSubmitted: boolean = false;
  @Output() onAnswersChange = new EventEmitter<string[]>();

  selectedAnswer: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  _onAnswersChange(answer: Answer) {
    console.log(answer);
    this.selectedAnswer = answer.id;
    this.onAnswersChange.emit([answer.id]);
  }

  _getAnswerClass(answer: Answer) {
    if (this.isSubmitted) {
      if (this.userAnswers.answerIds.includes(answer.id)) {
        return answer.isCorrect ? 'correct' : 'wrong';
      }
    }
    return answer.id == this.selectedAnswer ? 'selected-answer' : '';
  }
}
