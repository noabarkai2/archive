import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HerumToggleButtonComponent } from './herum-toggle-button.component';

describe('HerumToggleButtonComponent', () => {
  let component: HerumToggleButtonComponent;
  let fixture: ComponentFixture<HerumToggleButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HerumToggleButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HerumToggleButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
