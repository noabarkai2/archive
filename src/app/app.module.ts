// src/app/app.module.ts
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

// Feature Modules
import { SharedModule } from "./shared/shared.module";
import { FeedModule } from "./feed/feed.module";
import { HomepageModule } from "./homepage/homepage.module";

// External Libs
import { QuillModule } from "ngx-quill";
import { NgxExtendedPdfViewerModule } from "ngx-extended-pdf-viewer";

// Interceptor
import { SessionInterceptor } from "./interceptors/session.interceptor";

// Page & Layout Components
import { LoginLayoutComponent } from "./pages/login-layout/login-layout.component";
import { LoginPageAnimatedContainerComponent } from "./pages/login-layout/login-page-animated-container/login-page-animated-container.component";
import { SignInComponent } from "./pages/login-layout/sign-in/sign-in.component";
import { SignUpComponent } from "./pages/login-layout/sign-up/sign-up.component";
import { StyleGuidComponent } from "./style-guid/style-guid.component";

// Header Components
import { HeaderComponent } from "./pages/header/header.component";
import { HeaderMenuComponent } from "./pages/header/header-menu/header-menu.component";
import { HeaderControllersComponent } from "./pages/header/header-controllers/header-controllers.component";
import { NotebookDialogComponent } from "./pages/header/notebook-dialog/notebook-dialog.component";

@NgModule({
  declarations: [
    AppComponent,

    // login & misc pages
    LoginLayoutComponent,
    LoginPageAnimatedContainerComponent,
    SignInComponent,
    SignUpComponent,
    StyleGuidComponent,

    // header
    HeaderComponent,
    HeaderMenuComponent,
    HeaderControllersComponent,
    NotebookDialogComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,

    AppRoutingModule,
    SharedModule,
    FeedModule,
    HomepageModule,

    QuillModule.forRoot(),
    NgxExtendedPdfViewerModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: SessionInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
