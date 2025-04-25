import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedResourceItemComponent } from './feed-resource-item.component';

describe('FeedResourceItemComponent', () => {
  let component: FeedResourceItemComponent;
  let fixture: ComponentFixture<FeedResourceItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeedResourceItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeedResourceItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
