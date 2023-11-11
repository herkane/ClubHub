import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = 'http://localhost:8080/api';
  private mockApi = 'http://localhost:5000';

  constructor(private http: HttpClient) { }

  login(credentials: any): Observable<any> {
    const params = new HttpParams()
      .set('email', credentials.email)
      .set('password', credentials.password);
    return this.http.post(`${this.apiUrl}/auth/login`, null, {params})
  }

  register(userObject: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/auth/signup`, userObject)
  }

  approveOrRefuseCandidate(id: number, action: string): Observable<any> {
    const params = new HttpParams()
      .set('userId', id)
      .set('action', action)
    return this.http.put(`${this.apiUrl}/users/approve-or-refuse-member`, null, {params})
  }

  getUsersByRole(role: string): Observable<any> {
    const params = new HttpParams()
      .set('role', role)
    return this.http.get(`${this.apiUrl}/users/findUsersByRole`, {params})
  }
}
