import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectionsMenuLayoutComponent } from './collections-menu-layout.component';

describe('CollectionsMenuLayoutComponent', () => {
  let component: CollectionsMenuLayoutComponent;
  let fixture: ComponentFixture<CollectionsMenuLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CollectionsMenuLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CollectionsMenuLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
