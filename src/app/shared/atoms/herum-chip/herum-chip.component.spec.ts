import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HerumChipComponent } from './herum-chip.component';

describe('HerumChipComponent', () => {
  let component: HerumChipComponent;
  let fixture: ComponentFixture<HerumChipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HerumChipComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HerumChipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
