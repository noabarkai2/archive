import { Component, Input, OnInit } from '@angular/core';
import { QuizData } from '../herum-quiz.component';

@Component({
  selector: 'quiz-grade-sheet',
  templateUrl: './quiz-grade-sheet.component.html',
  styleUrls: ['./quiz-grade-sheet.component.scss','../quiz-pages.scss']
})
export class QuizGradeSheetComponent implements OnInit {

  @Input() quizData!: QuizData;

  constructor() { }

  ngOnInit(): void {
  }

  get isUserPassTheQuiz() {
    if(!this.quizData.grade) return false;
    return this.quizData.grade > this.quizData.minGrade;
  }

}
