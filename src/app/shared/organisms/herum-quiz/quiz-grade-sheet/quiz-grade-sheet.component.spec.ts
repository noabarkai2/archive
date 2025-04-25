import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizGradeSheetComponent } from './quiz-grade-sheet.component';

describe('QuizGradeSheetComponent', () => {
  let component: QuizGradeSheetComponent;
  let fixture: ComponentFixture<QuizGradeSheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuizGradeSheetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuizGradeSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
