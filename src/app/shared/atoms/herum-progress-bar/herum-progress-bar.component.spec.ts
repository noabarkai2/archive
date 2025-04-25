import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HerumProgressBarComponent } from './herum-progress-bar.component';

describe('HerumProgressBarComponent', () => {
  let component: HerumProgressBarComponent;
  let fixture: ComponentFixture<HerumProgressBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HerumProgressBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HerumProgressBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
