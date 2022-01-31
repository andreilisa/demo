import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cats } from '../model/cats.model';

const baseUrl = '/rest';
@Injectable({
  providedIn: 'root'
})
export class TypeService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Cats[]> {
    return this.http.get<Cats[]>(baseUrl);
  }

  get(id: any): Observable<Cats[]> {
    return this.http.get<Cats[]>(id);
  }

  getDetails(id : any) : Observable<any> {
    return this.http.get(`${baseUrl}/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  update(id, data): Observable<any> {
    return this.http.put(`${baseUrl}/update/${id}`, data);
  }

  delete(id): Observable<any> {
    return this.http.delete(`${baseUrl}/delete/${id}`);
  }

  findByName(name): Observable<any> {
    return this.http.get(`${baseUrl}/find/${name}`);
  }
}
