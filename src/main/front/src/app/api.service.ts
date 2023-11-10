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

  addActivity(activityObject: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/activities/add`, activityObject)
  }

  getActivities(): Observable<any> {
    return this.http.get(`${this.apiUrl}/activities`)
  }

  getMembers(): Observable<any> {
    return this.http.get(`${this.apiUrl}/members`)
  }

  getPropositions(): Observable<any> {
    return this.http.get(`${this.apiUrl}/propositions`)
  }

  register(userObject: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/auth/signup`, userObject)
  }
}
