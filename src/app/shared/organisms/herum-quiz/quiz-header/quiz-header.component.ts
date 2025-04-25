import { Component, ElementRef, EventEmitter, Input, OnChanges, OnInit, Output, Renderer2, SimpleChanges } from '@angular/core';
import { Question, QuizData } from '../herum-quiz.component';

@Component({
  selector: 'quiz-header',
  templateUrl: './quiz-header.component.html',
  styleUrls: ['./quiz-header.component.scss']
})
export class QuizHeaderComponent implements OnInit, OnChanges {

  @Input() quizData!: QuizData;
  @Output() onSelectQuestion = new EventEmitter<number>()
  @Output() onReturnToGradePage = new EventEmitter<boolean>()

  maxQuestionsToShow: number = 18;
  viewIndex: number = 0;

  constructor(private el: ElementRef) { }

  ngAfterViewInit() {
    this.calculateMaxQuestionsToShow();
  }

  ngOnChanges(changes: SimpleChanges) {
    this.viewIndex = 0;
    console.log(this.quizData);
    console.log("startIndexOfQuestions + viewIndex", this.startIndexOfQuestions, this.viewIndex);
  }

  private calculateMaxQuestionsToShow() {
    const containerWidth = this.el.nativeElement.querySelector('.question-list-container').offsetWidth;
    const questionWidth = 47;
    this.maxQuestionsToShow = Math.floor(containerWidth / questionWidth);
  }

  ngOnInit(): void {
  }

  _onSelectQuestion(questionIndex: number) {
    console.log('questionIndex', questionIndex)
    this.viewIndex = 0;

    this.onSelectQuestion.emit(questionIndex);
  }

  _getQuestionStatus(question: Question, questionIndex: number) {
    if (question.index + 1 === this.quizData.currentQuestion)
      return this.quizData.isSubmitted ? 'current-submitted' : 'current';

    if (this.quizData.isSubmitted)
      return this.isUserAnsweredCorrect(question) ? 'correct' : 'wrong';

    if (question.isSkipped) return 'skipped';

    if (this.isQuestionAnswered(question))
      return 'answered';

    return 'unanswered';
  }

  _previousViewIndex() {
    if (0 < this.startIndexOfQuestions + this.viewIndex)
      this.viewIndex--;
  }

  _nextViewIndex() {
    if (this.quizData.questions.length - 1 >= this.endIndexOfQuestions + this.viewIndex)
      this.viewIndex++;
  }

  _onReturnToGradePage(){
    this.onReturnToGradePage.emit(true);
  }

  get startIndexOfQuestions() {
    return Math.max(this.quizData.currentQuestion - (this.maxQuestionsToShow / 2), 0);
  }

  get endIndexOfQuestions() {
    return Math.max(this.quizData.currentQuestion + this.maxQuestionsToShow / 2, this.maxQuestionsToShow);
  }

  get slicedQuestionsList(){
    if(!this.isViewIndexNeeded)
      return this.quizData.questions;

    return this.quizData.questions.slice(
      this.startIndexOfQuestions + this.viewIndex, 
      this.startIndexOfQuestions + this.viewIndex + this.maxQuestionsToShow)
  }

  get isViewIndexNeeded(){
    return this.quizData.questions.length > this.maxQuestionsToShow
  }

  private isQuestionAnswered(question: Question) {
    let userAnswerCount = this.quizData.userAnswers?.find(answer => answer.questionId == question.id)?.answerIds?.length;
    return userAnswerCount ? userAnswerCount > 0 : false;
  }

  private isUserAnsweredCorrect(question: Question) {
    if(question.id == '1') {
      console.log('question', question);
      console.log('this.quizData.userAnswers', this.quizData.userAnswers);
      console.log("this.quizData",this.quizData);
      
    }
    return question.answers.filter(answer => answer.isCorrect).every(answer => {
      return this.quizData.userAnswers!.find(answer => answer.questionId == question.id)?.answerIds.includes(answer.id)
    });
  }

}
