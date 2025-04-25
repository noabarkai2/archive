import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationStatusItemComponent } from './education-status-item.component';

describe('EducationStatusItemComponent', () => {
  let component: EducationStatusItemComponent;
  let fixture: ComponentFixture<EducationStatusItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EducationStatusItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EducationStatusItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
