import { NO_ERRORS_SCHEMA, NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule, Routes } from "@angular/router";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HerumButtonComponent } from "./shared/atoms/herum-button/herum-button.component";
import { HerumCheckboxComponent } from "./shared/atoms/herum-checkbox/herum-checkbox.component";
import { HerumToggleButtonComponent } from "./shared/atoms/herum-toggle-button/herum-toggle-button.component";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HerumInputFieldComponent } from "./shared/atoms/herum-input-field/herum-input-field.component";
import { HerumToolTipDirective } from "./shared/directives/herum-tool-tip.directive";
import { HerumSelectComponent } from "./shared/atoms/herum-select/herum-select.component";
import { MatAutocompleteModule } from "@angular/material/autocomplete";
import { MatChipsModule } from "@angular/material/chips";
import { MatIconModule } from "@angular/material/icon";
import { HerumMultiSelectComponent } from "./shared/atoms/herum-multi-select/herum-multi-select.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatTooltipModule } from "@angular/material/tooltip";
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { HerumMatSelectComponent } from "./shared/atoms/herum-mat-select/herum-mat-select.component";
import { HerumSwitchComponent } from "./shared/atoms/herum-switch/herum-switch.component";
import { HerumIndeterminateComponent } from "./shared/atoms/herum-indeterminate/herum-indeterminate.component";
import { HerumChipComponent } from "./shared/atoms/herum-chip/herum-chip.component";
import { HerumChipsComponent } from "./shared/atoms/herum-chips/herum-chips.component";
import { LoginLayoutComponent } from "./pages/login-layout/login-layout.component";
import { HomeLayoutComponent } from "./homepage/home-layout/home-layout.component";
import { SignUpComponent } from "./pages/login-layout/sign-up/sign-up.component";
import { SignInComponent } from "./pages/login-layout/sign-in/sign-in.component";
import { StyleGuidComponent } from "./style-guid/style-guid.component";
import { ConditionalFormControlNameDirective } from "./shared/atoms/herum-input-field/conditional-form-control-name.directive";
import { RadioButtonComponent } from "./shared/atoms/radio-button/radio-button.component";
import { HeaderComponent } from "./pages/header/header.component";
import { HeaderMenuComponent } from "./pages/header/header-menu/header-menu.component";
import { HeaderControllersComponent } from "./pages/header/header-controllers/header-controllers.component";
import { HerumPageHeaderComponent } from "./shared/organisms/herum-page-header/herum-page-header.component";
import { HerumVideoPlayerComponent } from "./shared/organisms/herum-video-player/herum-video-player.component";
import { FeedModule } from "./feed/feed.module";
import { SharedModule } from "./shared/shared.module";
import { NotebookDialogComponent } from "./pages/header/notebook-dialog/notebook-dialog.component";
import { MatDialogModule } from "@angular/material/dialog";
import { MatMenuModule } from "@angular/material/menu";
import { QuillModule } from "ngx-quill";
import { HomepageModule } from "./homepage/homepage.module";
import { LoginPageAnimatedContainerComponent } from "./pages/login-layout/login-page-animated-container/login-page-animated-container.component";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { SessionInterceptor } from "./interceptors/session.interceptor";

@NgModule({
  declarations: [
    AppComponent,
    LoginLayoutComponent,
    SignUpComponent,
    SignInComponent,
    StyleGuidComponent,
    ConditionalFormControlNameDirective,
    RadioButtonComponent,
    HeaderComponent,
    HeaderMenuComponent,
    HeaderControllersComponent,
    NotebookDialogComponent,
    LoginPageAnimatedContainerComponent,
  ],
  imports: [
    MatDialogModule,
    MatMenuModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatTooltipModule,
    ReactiveFormsModule,
    CommonModule,
    FormsModule,

    QuillModule.forRoot(),
    HttpClientModule,
    AppRoutingModule,
    FeedModule,
    SharedModule,
    HomepageModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: SessionInterceptor,
      multi: true,
    },
  ],
  schemas: [NO_ERRORS_SCHEMA],
  bootstrap: [AppComponent],
})
export class AppModule {}
