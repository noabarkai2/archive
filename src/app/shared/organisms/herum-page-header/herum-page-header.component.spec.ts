import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HerumPageHeaderComponent } from './herum-page-header.component';

describe('HerumPageHeaderComponent', () => {
  let component: HerumPageHeaderComponent;
  let fixture: ComponentFixture<HerumPageHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HerumPageHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HerumPageHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
