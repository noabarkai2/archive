import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectionHorizontalOverviewComponent } from './collection-horizontal-overview.component';

describe('CollectionHorizontalOverviewComponent', () => {
  let component: CollectionHorizontalOverviewComponent;
  let fixture: ComponentFixture<CollectionHorizontalOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CollectionHorizontalOverviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CollectionHorizontalOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
