import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HerumChipsComponent } from './herum-chips.component';

describe('HerumChipsComponent', () => {
  let component: HerumChipsComponent;
  let fixture: ComponentFixture<HerumChipsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HerumChipsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HerumChipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
