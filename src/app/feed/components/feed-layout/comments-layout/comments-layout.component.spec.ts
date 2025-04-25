import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentsLayoutComponent } from './comments-layout.component';

describe('CommentsLayoutComponent', () => {
  let component: CommentsLayoutComponent;
  let fixture: ComponentFixture<CommentsLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommentsLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommentsLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
