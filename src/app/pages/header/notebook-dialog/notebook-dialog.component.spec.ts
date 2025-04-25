import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotebookDialogComponent } from './notebook-dialog.component';

describe('NotebookDialogComponent', () => {
  let component: NotebookDialogComponent;
  let fixture: ComponentFixture<NotebookDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotebookDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotebookDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
