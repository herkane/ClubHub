import {Injectable, OnInit} from '@angular/core';
import {HttpClient, HttpEvent} from '@angular/common/http';
import {BehaviorSubject, Observable, tap} from 'rxjs';
import {User} from "../../models/user.interface";
import {ApiService} from "../api.service";

@Injectable({
  providedIn: 'root'
})
export class AuthService{
  private readonly _isLoggedIn$ = new BehaviorSubject<boolean>(false);
  private readonly TOKEN_NAME = 'auth';
  isLoggedIn$ = this._isLoggedIn$.asObservable();
  user: any
  customTokenAdmin = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6IkFkbWluIEFkbWluIiwiZW1haWwiOiJhZG1pbkBhZG1pbi5jb20iLCJyb2xlcyI6WyJhZG1pbiIsInZpcCIsIm1lbWJlciJdfQ.7_7BqdVBEa2EOuL0QBpcBMccji-MPK3M2nHwy_qHQ_Q';
  customTokenVip = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6IkFkbWluIEFkbWluIiwiZW1haWwiOiJhZG1pbkBhZG1pbi5jb20iLCJyb2xlcyI6WyJ2aXAiLCJtZW1iZXIiXX0.R42lm4ipcblk_tq1wCxHa7xLwfaartNdVieEg-BAnIY';
  customTokenMember = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6IkFkbWluIEFkbWluIiwiZW1haWwiOiJhZG1pbkBhZG1pbi5jb20iLCJyb2xlcyI6WyJtZW1iZXIiXX0.lPXLVPvNFhutoZFFjss92f8jtANn2VgpysUVptcQlRU';
  customTokenVisitor = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6IkFkbWluIEFkbWluIiwiZW1haWwiOiJhZG1pbkBhZG1pbi5jb20iLCJyb2xlcyI6WyJ2aXNpdG9yIl19.rxGqMkmykIG7bKDhu4RySxbA6xpGFZZQ8Yd0zIqhnl8';

  customToken : string | undefined;
  get token(): any {
    return localStorage.getItem(this.TOKEN_NAME)
  }

  constructor(private apiService : ApiService) {
    this._isLoggedIn$.next(!!localStorage.getItem(this.TOKEN_NAME))
    this.isLoggedIn$.subscribe((isLoggedIn: boolean) => {
      if (isLoggedIn) {
        this.user = this.getUser(this.token);
      }
    })
  }

  login(credentials: any) {
    this.customToken = this.customTokenAdmin;
    return this.apiService.login(credentials).pipe(
      tap((res: any) => {
        console.log("Auth service");
        console.log(res);
        this._isLoggedIn$.next(true);
        if (typeof res.token === "string") {
          localStorage.setItem(this.TOKEN_NAME, res.token); // Use the token from the API response
          this.user = this.getUser(res.token); // Decode and set the user data
          console.log(this.user);
        }
      }, (err) => {
        console.log("Error");
        console.log(err);
      })
    );
  }

  private getUser(token: undefined | string): User | null {
    if (!token) {
      return null
    }
    return JSON.parse(atob(token.split('.')[1])).user as User;
  }

  logout(): void {
    localStorage.removeItem(this.TOKEN_NAME);
    this._isLoggedIn$.next(false);
    this.user = null;
  }

  register(userObject: any): Observable<any> {
    return this.apiService.register(userObject)
  }
}
