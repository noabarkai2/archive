import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AuthService } from "src/app/services/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: "sign-in",
  templateUrl: "./sign-in.component.html",
  styleUrls: [
    "./sign-in.component.scss",
    "../../../../app/shared/styles/forms.scss",
  ],
})
export class SignInComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    this.loginForm = this.fb.group({
      id: ["", [Validators.required, Validators.pattern(/^\d{9}$/)]],
      armyId: ["", [Validators.required, Validators.pattern(/^\d{6,}$/)]],
    });
  }

  _onSubmit(): void {
    // אם לא תקין – דגום כל השדות כדי שיופיעו הודעות השגיאה
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }
    const { id, armyId } = this.loginForm.value;
    this.auth.login(id, armyId).subscribe({
      next: () => this.router.navigate(["/homepage"]),
      error: () => alert("התחברות נכשלה, בדוק פרטים ונסה שוב"),
    });
  }
}
