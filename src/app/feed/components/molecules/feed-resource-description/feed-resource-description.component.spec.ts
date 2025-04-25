import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedResourceDescriptionComponent } from './feed-resource-description.component';

describe('FeedResourceDescriptionComponent', () => {
  let component: FeedResourceDescriptionComponent;
  let fixture: ComponentFixture<FeedResourceDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeedResourceDescriptionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeedResourceDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
