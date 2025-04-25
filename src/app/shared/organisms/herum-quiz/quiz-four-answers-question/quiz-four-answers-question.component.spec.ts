import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizFourAnswersQuestionComponent } from './quiz-four-answers-question.component';

describe('QuizFourAnswersQuestionComponent', () => {
  let component: QuizFourAnswersQuestionComponent;
  let fixture: ComponentFixture<QuizFourAnswersQuestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuizFourAnswersQuestionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuizFourAnswersQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
