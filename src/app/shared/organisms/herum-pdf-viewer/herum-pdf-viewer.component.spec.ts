import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HerumPdfViewerComponent } from './herum-pdf-viewer.component';

describe('HerumPdfViewerComponent', () => {
  let component: HerumPdfViewerComponent;
  let fixture: ComponentFixture<HerumPdfViewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HerumPdfViewerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HerumPdfViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
