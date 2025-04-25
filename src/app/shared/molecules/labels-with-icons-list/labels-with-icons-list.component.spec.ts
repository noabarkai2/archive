import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabelsWithIconsListComponent } from './labels-with-icons-list.component';

describe('LabelsWithIconsListComponent', () => {
  let component: LabelsWithIconsListComponent;
  let fixture: ComponentFixture<LabelsWithIconsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LabelsWithIconsListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LabelsWithIconsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
