import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HerumVideoPlayerComponent } from './herum-video-player.component';

describe('HerumVideoPlayerComponent', () => {
  let component: HerumVideoPlayerComponent;
  let fixture: ComponentFixture<HerumVideoPlayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HerumVideoPlayerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HerumVideoPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
