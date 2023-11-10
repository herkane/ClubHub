import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ActivitiesService {
  private apiUrl = 'http://localhost:8080/api';
  private mockApi = 'http://localhost:5000';

  constructor(private http: HttpClient) { }

  loadActivities(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/activities`);
  }

  addActivity(activityObject: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/activities/add`, activityObject)
  }

  deleteActivity(id: number): Observable<any> {
    const params = new HttpParams()
      .set('id', id)
    return this.http.delete(`${this.apiUrl}/activities/delete`, {params})
  }

  participate(id: number): Observable<any> {
    const params = new HttpParams()
      .set('id', id)
    return this.http.put(`${this.apiUrl}/activities/participate`, null, {params})
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
