import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HerumCircularProgressBarComponent } from './herum-circular-progress-bar.component';

describe('HerumCircularProgressBarComponent', () => {
  let component: HerumCircularProgressBarComponent;
  let fixture: ComponentFixture<HerumCircularProgressBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HerumCircularProgressBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HerumCircularProgressBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
