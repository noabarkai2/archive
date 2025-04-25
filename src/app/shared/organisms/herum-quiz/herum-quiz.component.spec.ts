import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HerumQuizComponent } from './herum-quiz.component';

describe('HerumQuizComponent', () => {
  let component: HerumQuizComponent;
  let fixture: ComponentFixture<HerumQuizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HerumQuizComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HerumQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
