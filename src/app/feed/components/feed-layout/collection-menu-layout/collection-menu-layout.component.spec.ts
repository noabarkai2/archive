import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectionMenuLayoutComponent } from './collection-menu-layout.component';

describe('CollectionMenuLayoutComponent', () => {
  let component: CollectionMenuLayoutComponent;
  let fixture: ComponentFixture<CollectionMenuLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CollectionMenuLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CollectionMenuLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
