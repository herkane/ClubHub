import { Injectable } from '@angular/core';
import {HttpClient, HttpEvent} from '@angular/common/http';
import { Observable } from 'rxjs';
import {User} from "../../models/user.interface";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:5000';

  constructor(private http: HttpClient) { }

  login(credentials: any): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/login`, credentials);
  }

  storeToken(token: string): void {
    localStorage.setItem('token', token);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  isLoggedIn(): boolean {
    return this.getToken() !== null;
  }

  logout(): void {
    localStorage.removeItem('token');
  }

  async getUser() : Promise<Observable<User>> {
    if (!this.isLoggedIn()) {
      throw new Error('User not logged in.');
    }
    return this.http.get<User>(`${this.apiUrl}`);
  }
}
