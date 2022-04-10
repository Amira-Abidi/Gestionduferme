import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Planning } from '../models/planning';

@Injectable({
  providedIn: 'root'
})
export class PlanningService {

  private baseURL = "http://localhost:8091/api/planning";

  constructor(private httpClient: HttpClient) { }

  getPlanningList(): Observable<any> {
    return this.httpClient.get(`${this.baseURL}`);
  }

  createPlanning(planning: Planning): Observable<any>{
    return this.httpClient.post(`${this.baseURL}`, planning);
  }

  getPlanningById(id_planning: number): Observable<any>{
    return this.httpClient.get(`${this.baseURL}/${id_planning}`);
  }

  updatePlanning(id: number, value: any): Observable<Object> {
    return this.httpClient.put(`${this.baseURL}/${id}`, value);
  }

  deletePlanning(id: number): Observable<any> {
    return this.httpClient.delete(`${this.baseURL}/${id}`, { responseType: 'text' });
  }
}
