import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Aliment } from '../models/aliment';

@Injectable({
  providedIn: 'root'
})
export class AlimentService {

  private baseURL = "http://localhost:8091/api/aliment";

  constructor(private httpClient: HttpClient) { }

  getAlimentList(): Observable<any> {
    return this.httpClient.get(`${this.baseURL}`);
  }

  createAliment(aliment: Aliment): Observable<any>{
    return this.httpClient.post(`${this.baseURL}`, aliment);
  }

  getAlimentById(id_aliment: number): Observable<any>{
    return this.httpClient.get(`${this.baseURL}/${id_aliment}`);
  }

  updateAliment(id: number, value: any): Observable<Object> {
    return this.httpClient.put(`${this.baseURL}/${id}`, value);
  }

  deleteAliment(id: number): Observable<any> {
    return this.httpClient.delete(`${this.baseURL}/${id}`, { responseType: 'text' });
  }
}
