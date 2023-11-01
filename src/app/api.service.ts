import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = 'http://localhost:5000';

  constructor(private http: HttpClient) { }

  login(credentials: any): Observable<any> {
    return this.http.get(`${this.apiUrl}/login`, credentials)
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
    return this.http.post(`${this.apiUrl}/register`, userObject)
  }
}
