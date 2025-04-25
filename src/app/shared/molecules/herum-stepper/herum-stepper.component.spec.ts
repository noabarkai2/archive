import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HerumStepperComponent } from './herum-stepper.component';

describe('HerumStepperComponent', () => {
  let component: HerumStepperComponent;
  let fixture: ComponentFixture<HerumStepperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HerumStepperComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HerumStepperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
