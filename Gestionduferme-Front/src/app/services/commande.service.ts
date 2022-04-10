import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Commande } from '../models/Commande';

@Injectable({
  providedIn: 'root'
})
export class CommandeService {

  private baseURL = "http://localhost:8091/api/commande";

  constructor(private httpClient: HttpClient) { }

  getCommandeList(): Observable<any> {
    return this.httpClient.get(`${this.baseURL}`);
  }

  createCommande(commande: Commande): Observable<any>{
    return this.httpClient.post(`${this.baseURL}`, commande);
  }

  getCommandeById(id: number): Observable<any>{
    return this.httpClient.get(`${this.baseURL}/${id}`);
  }

  updateCommande(id: number, value: any): Observable<Object> {
    return this.httpClient.put(`${this.baseURL}/${id}`, value);
  }

  deleteCommande(id: number): Observable<any> {
    return this.httpClient.delete(`${this.baseURL}/${id}`, { responseType: 'text' });
  }
}
