import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HerumIndeterminateComponent } from './herum-indeterminate.component';

describe('HerumIndeterminateComponent', () => {
  let component: HerumIndeterminateComponent;
  let fixture: ComponentFixture<HerumIndeterminateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HerumIndeterminateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HerumIndeterminateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
