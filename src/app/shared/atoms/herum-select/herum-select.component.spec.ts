import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HerumSelectComponent } from './herum-select.component';

describe('HerumSelectComponent', () => {
  let component: HerumSelectComponent;
  let fixture: ComponentFixture<HerumSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HerumSelectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HerumSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
