import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedCommentItemComponent } from './feed-comment-item.component';

describe('FeedCommentItemComponent', () => {
  let component: FeedCommentItemComponent;
  let fixture: ComponentFixture<FeedCommentItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeedCommentItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeedCommentItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
