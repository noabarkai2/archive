import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AuthService } from "src/app/services/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: "sign-up",
  templateUrl: "./sign-up.component.html",
  styleUrls: [
    "./sign-up.component.scss",
    "../../../../app/shared/styles/forms.scss",
  ],
})
export class SignUpComponent implements OnInit {
  signUpForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.signUpForm = this.fb.group({
      firstName: ["", Validators.required],
      lastName: ["", Validators.required],
      personalId: [
        "",
        [
          Validators.required,
          Validators.pattern(/^\d+$/),
          Validators.minLength(6),
        ],
      ],
      militaryId: [
        "",
        [
          Validators.required,
          Validators.pattern(/^\d+$/),
          Validators.minLength(6),
        ],
      ],
      referringUser: ["", Validators.required],
    });
  }

  _onSubmit(): void {
    if (this.signUpForm.invalid) {
      this.signUpForm.markAllAsTouched();
      return;
    }
    this.auth.signup(this.signUpForm.value).subscribe({
      next: () => {
        alert("הרשמה הצליחה! אנא התחברי.");
        this.router.navigate(["/login"]);
      },
      error: (err) => {
        console.error("Signup failed:", err);
        alert("שגיאה בהרשמה, בדקי את הקונסולה");
      },
    });
  }
}
