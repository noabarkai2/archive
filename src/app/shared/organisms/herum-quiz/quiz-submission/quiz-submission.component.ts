import { Component, Input, OnInit } from '@angular/core';
import { QuizData } from '../herum-quiz.component';

@Component({
  selector: 'quiz-submission',
  templateUrl: './quiz-submission.component.html',
  styleUrls: ['./quiz-submission.component.scss', '../quiz-pages.scss']
})
export class QuizSubmissionComponent implements OnInit {

  @Input() quizData!: QuizData;

  constructor() { }

  ngOnInit(): void {
  }

  get isAllQuestionsAnswered() {
    return this.quizData.questions.length == this.quizData.userAnswers?.length
  }

}
