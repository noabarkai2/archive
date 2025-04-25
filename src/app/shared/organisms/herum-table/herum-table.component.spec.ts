import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HerumTableComponent } from './herum-table.component';

describe('HerumTableComponent', () => {
  let component: HerumTableComponent;
  let fixture: ComponentFixture<HerumTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HerumTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HerumTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
