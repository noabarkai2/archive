import { Component, OnInit } from "@angular/core";
import { loginIconsList } from "./loginIconsList";

@Component({
  selector: "app-login-layout",
  templateUrl: "./login-layout.component.html",
  styleUrls: ["./login-layout.component.scss"],
})
export class LoginLayoutComponent implements OnInit {
  isSignInMode = true;
  loginIconsList = loginIconsList;

  constructor() {}

  ngOnInit(): void {}

  switchMode(): void {
    this.isSignInMode = !this.isSignInMode;
  }
}
