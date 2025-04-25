import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WideCollectionMenuComponent } from './wide-collection-menu.component';

describe('WideCollectionMenuComponent', () => {
  let component: WideCollectionMenuComponent;
  let fixture: ComponentFixture<WideCollectionMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WideCollectionMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WideCollectionMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
