import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HerumCheckboxComponent } from './herum-checkbox.component';

describe('HerumCheckboxComponent', () => {
  let component: HerumCheckboxComponent;
  let fixture: ComponentFixture<HerumCheckboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HerumCheckboxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HerumCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
