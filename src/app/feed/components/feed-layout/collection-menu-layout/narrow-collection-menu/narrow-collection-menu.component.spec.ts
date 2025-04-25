import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NarrowCollectionMenuComponent } from './narrow-collection-menu.component';

describe('NarrowCollectionMenuComponent', () => {
  let component: NarrowCollectionMenuComponent;
  let fixture: ComponentFixture<NarrowCollectionMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NarrowCollectionMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NarrowCollectionMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
