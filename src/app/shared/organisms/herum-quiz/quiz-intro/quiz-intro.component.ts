import { Component, Input, OnInit } from '@angular/core';
import { QuizData } from '../herum-quiz.component';

@Component({
  selector: 'quiz-intro',
  templateUrl: './quiz-intro.component.html',
  styleUrls: ['./quiz-intro.component.scss', '../quiz-pages.scss']
})
export class QuizIntroComponent implements OnInit {

  @Input() quizData!: QuizData;

  constructor() { }

  ngOnInit(): void {
  }

}
