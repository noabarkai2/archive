import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginPageAnimatedContainerComponent } from './login-page-animated-container.component';

describe('LoginPageAnimatedContainerComponent', () => {
  let component: LoginPageAnimatedContainerComponent;
  let fixture: ComponentFixture<LoginPageAnimatedContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginPageAnimatedContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginPageAnimatedContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
