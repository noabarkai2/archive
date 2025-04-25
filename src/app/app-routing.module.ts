import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { LoginLayoutComponent } from "./pages/login-layout/login-layout.component";
import { AuthGuard } from "./auth.guard";
import { HomeLayoutComponent } from "./homepage/home-layout/home-layout.component";
import { AppComponent } from "./app.component";
import { StyleGuidComponent } from "./style-guid/style-guid.component";
import { FeedLayoutComponent } from "./feed/components/feed-layout/feed-layout.component";

const routes: Routes = [
  {
    path: "",
    component: LoginLayoutComponent,
  },
  {
    path: "login",
    component: LoginLayoutComponent,
  },
  {
    path: "homepage",
    component: HomeLayoutComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "feed",
    component: FeedLayoutComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "sign-in",
    component: LoginLayoutComponent,
  },
  {
    path: "style-guid",
    component: StyleGuidComponent,
  },
  // { path: '**', component: AppComponent },
  { path: "**", redirectTo: "login", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), FormsModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
