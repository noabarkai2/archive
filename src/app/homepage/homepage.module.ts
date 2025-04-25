import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { EducationStatusItemComponent } from "./molecules/education-status-item/education-status-item.component";
import { HomeLayoutComponent } from "./home-layout/home-layout.component";
import { SharedModule } from "../shared/shared.module";

@NgModule({
  declarations: [HomeLayoutComponent, EducationStatusItemComponent],
  imports: [CommonModule, SharedModule],
})
export class HomepageModule {}
