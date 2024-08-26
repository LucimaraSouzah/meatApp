import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { MeatApi } from "app/app.api";
import { User } from "./user.model";
import { NavigationEnd, Router } from "@angular/router";
import { tap, filter } from "rxjs/operators";

@Injectable()
export class LoginService {
  user: User;
  lastUrl: string;

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit() {
    this.router.events
      .pipe(filter((e) => e instanceof NavigationEnd))
      .subscribe((e: NavigationEnd) => (this.lastUrl = e.url));
  }

  isLoggedIn(): boolean {
    return this.user !== undefined;
  }

  login(email: string, password: string): Observable<User> {
    return this.http
      .post<User>(`${MeatApi}/login`, {
        email: email,
        password: password,
      })
      .pipe(tap((user) => (this.user = user)));
  }

  handleLogin(path?: string) {
    this.router.navigate(["/login", btoa(path)]);
  }

  logout() {
    this.user = undefined;
  }
}
