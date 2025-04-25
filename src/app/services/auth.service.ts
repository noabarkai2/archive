import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject, tap } from "rxjs";

@Injectable({ providedIn: "root" })
export class AuthService {
  private sessionId$ = new BehaviorSubject<string | null>(null);

  constructor(private http: HttpClient) {}

  login(personalId: string, militaryId: string) {
    return this.http
      .post<{ sessionId: string }>("/api/login", {
        PersonalId: personalId,
        MilitaryId: militaryId,
      })
      .pipe(tap((res) => this.sessionId$.next(res.sessionId)));
  }

  signup(data: {
    firstName: string;
    lastName: string;
    personalId: string;
    militaryId: string;
    referringUser: string;
    status: string;
  }) {
    return this.http.post("/api/login/create", data);
  }

  getSessionId(): string | null {
    return this.sessionId$.value;
  }
}
