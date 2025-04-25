import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedCollectionStatusItemComponent } from './feed-collection-status-item.component';

describe('FeedCollectionStatusItemComponent', () => {
  let component: FeedCollectionStatusItemComponent;
  let fixture: ComponentFixture<FeedCollectionStatusItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeedCollectionStatusItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeedCollectionStatusItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
