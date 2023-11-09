import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ActivitiesService {
  private apiUrl = 'http://localhost:8080/api';
  private mockApi = 'http://localhost:5000';

  constructor(private http: HttpClient) { }

  loadActivities(): Observable<any> {
    return this.http.get<any>(`${this.mockApi}/activities`);
  }

  loadPropositions(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/activities`);
  }

  loadProposition(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/activities/${id}`);
  }

  loadActivity(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/activities/${id}`);
  }

}
