import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedCollectionPriorityExpendablePanelComponent } from './feed-collection-priority-expendable-panel.component';

describe('FeedCollectionPriorityExpendablePanelComponent', () => {
  let component: FeedCollectionPriorityExpendablePanelComponent;
  let fixture: ComponentFixture<FeedCollectionPriorityExpendablePanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeedCollectionPriorityExpendablePanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeedCollectionPriorityExpendablePanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
