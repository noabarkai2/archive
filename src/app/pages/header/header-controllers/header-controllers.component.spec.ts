import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderControllersComponent } from './header-controllers.component';

describe('HeaderControllersComponent', () => {
  let component: HeaderControllersComponent;
  let fixture: ComponentFixture<HeaderControllersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderControllersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderControllersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
