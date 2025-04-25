import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HerumSwitchComponent } from './herum-switch.component';

describe('HerumSwitchComponent', () => {
  let component: HerumSwitchComponent;
  let fixture: ComponentFixture<HerumSwitchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HerumSwitchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HerumSwitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
