import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HerumButtonComponent } from './herum-button.component';

describe('HerumButtonComponent', () => {
  let component: HerumButtonComponent;
  let fixture: ComponentFixture<HerumButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HerumButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HerumButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
