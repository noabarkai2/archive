import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HerumMatSelectComponent } from './herum-mat-select.component';

describe('HerumMatSelectComponent', () => {
  let component: HerumMatSelectComponent;
  let fixture: ComponentFixture<HerumMatSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HerumMatSelectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HerumMatSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
