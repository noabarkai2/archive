import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HerumMultiSelectComponent } from './herum-multi-select.component';

describe('HerumMultiSelectComponent', () => {
  let component: HerumMultiSelectComponent;
  let fixture: ComponentFixture<HerumMultiSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HerumMultiSelectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HerumMultiSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
