import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedUserProgressComponent } from './herum-user-progress.component';

describe('FeedUserProgressComponent', () => {
  let component: FeedUserProgressComponent;
  let fixture: ComponentFixture<FeedUserProgressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeedUserProgressComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeedUserProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
