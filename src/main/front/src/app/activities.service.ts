import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {ActivityInterface} from "../models/activity.interface";

@Injectable({
  providedIn: 'root'
})
export class ActivitiesService {
  private apiUrl = '/api/activities';
  private mockApi = 'http://localhost:5000';

  constructor(private http: HttpClient) { }

  loadActivities(status: string): Observable<any> {
    const params = new HttpParams()
      .set('status', status)
    return this.http.get<ActivityInterface[]>(`${this.apiUrl}`, {params});
  }

  addActivity(activityObject: any, userId: number): Observable<any> {
    const params = new HttpParams()
      .set('userId', userId)
    return this.http.post(`${this.apiUrl}/add`, activityObject, {params})
  }

  approveOrRefuseActivity(id: number, status: string): Observable<any> {
    const params = new HttpParams()
      .set('activityId', id)
      .set('action', status)
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    headers.append('Access-Control-Allow-Origin', '*');
    headers.append('Access-Control-Allow-Methods', 'GET,POST,OPTIONS,DELETE,PUT')
    return this.http.put(`${this.apiUrl}/prove-or-refuse-activity`, null, {headers, params})
  }

  deleteActivity(id: number): Observable<ActivityInterface[]> {
    const params = new HttpParams()
      .set('id', id)
    return this.http.delete<ActivityInterface[]>(`${this.apiUrl}/delete`, {params})
  }

  participate(id: number, userId: number): Observable<any> {
    const params = new HttpParams()
      .set('id', id)
      .set('userId', userId)
    return this.http.put(`${this.apiUrl}/participate`, null, {params})
  }

  cancel_participation(id: number, userId: number): Observable<any> {
    const params = new HttpParams()
      .set('id', id)
      .set('userId', userId)
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    headers.append('Access-Control-Allow-Origin', '*');
    headers.append('Access-Control-Allow-Methods', 'GET,POST,OPTIONS,DELETE,PUT')

    return this.http.put(`${this.apiUrl}/cancel-participation`, null, {headers, params})
  }

  loadProposition(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  loadActivity(id: number): Observable<any> {
    const params = new HttpParams()
      .set('postId', id)
    return this.http.get<any>(`${this.apiUrl}/get`, {params});
  }

  isParticipating(id: number, userId: number): Observable<boolean> {
    const params = new HttpParams()
      .set('id', id)
      .set('userId', userId)
    return this.http.get<boolean>(`${this.apiUrl}/isParticipating`, {params})
  }

}
