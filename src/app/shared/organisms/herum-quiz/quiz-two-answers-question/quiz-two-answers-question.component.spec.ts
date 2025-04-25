import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizTwoAnswersQuestionComponent } from './quiz-two-answers-question.component';

describe('QuizTwoAnswersQuestionComponent', () => {
  let component: QuizTwoAnswersQuestionComponent;
  let fixture: ComponentFixture<QuizTwoAnswersQuestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuizTwoAnswersQuestionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuizTwoAnswersQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
