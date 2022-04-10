import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Animal } from '../models/animal';

@Injectable({
  providedIn: 'root'
})
export class AnimalService {

  private baseURL = "http://localhost:8091/api/animal";

  constructor(private httpClient: HttpClient) { }

  getAnimalList(): Observable<any> {
    return this.httpClient.get(`${this.baseURL}`);
  }

  createAnimal(animal: Animal): Observable<any>{
    return this.httpClient.post(`${this.baseURL}`, animal);
  }

  getAnimalById(id_animal: number): Observable<any>{
    return this.httpClient.get(`${this.baseURL}/${id_animal}`);
  }

  updateAnimal(id: number, value: any): Observable<Object> {
    return this.httpClient.put(`${this.baseURL}/${id}`, value);
  }

  deleteAnimal(id: number): Observable<any> {
    return this.httpClient.delete(`${this.baseURL}/${id}`, { responseType: 'text' });
  }
}
