import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizMultiAnswerQuestionComponent } from './quiz-multi-answer-question.component';

describe('QuizMultiAnswerQuestionComponent', () => {
  let component: QuizMultiAnswerQuestionComponent;
  let fixture: ComponentFixture<QuizMultiAnswerQuestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuizMultiAnswerQuestionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuizMultiAnswerQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
