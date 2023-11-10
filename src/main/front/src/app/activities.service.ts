import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {ActivityInterface} from "../models/activity.interface";

@Injectable({
  providedIn: 'root'
})
export class ActivitiesService {
  private apiUrl = 'http://localhost:8080/api';
  private mockApi = 'http://localhost:5000';

  constructor(private http: HttpClient) { }

  loadActivities(status: string): Observable<any> {
    const params = new HttpParams()
      .set('status', status)
    return this.http.get<ActivityInterface[]>(`${this.apiUrl}/activities`, {params});
  }

  addActivity(activityObject: any, userId: number): Observable<any> {
    const params = new HttpParams()
      .set('userId', userId)
    return this.http.post(`${this.apiUrl}/activities/add`, activityObject, {params})
  }

  deleteActivity(id: number): Observable<ActivityInterface[]> {
    const params = new HttpParams()
      .set('id', id)
    return this.http.delete<ActivityInterface[]>(`${this.apiUrl}/activities/delete`, {params})
  }

  participate(id: number, userId: number): Observable<any> {
    const params = new HttpParams()
      .set('id', id)
      .set('userId', userId)
    return this.http.put(`${this.apiUrl}/activities/participate`, null, {params})
  }

  cancel_participation(id: number, userId: number): Observable<any> {
    const params = new HttpParams()
      .set('id', id)
      .set('userId', userId)
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Access-Control-Allow-Origin', '*');
    headers.append('Access-Control-Allow-Methods', 'GET,POST,OPTIONS,DELETE,PUT')

    return this.http.put(`${this.apiUrl}/activities/cancel-participation`, null, {params})
  }

  loadProposition(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/activities/${id}`);
  }

  loadActivity(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/activities/${id}`);
  }

  isParticipating(id: number, userId: number): Observable<boolean> {
    const params = new HttpParams()
      .set('id', id)
      .set('userId', userId)
    return this.http.get<boolean>(`${this.apiUrl}/activities/isParticipating`, {params})
  }

}
