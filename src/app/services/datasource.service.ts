import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ResDataModal } from '../modals/resDataModal';

@Injectable({
  providedIn: 'root'
})
export class DatasourceService {
  apiUrl = 'http://localhost:4243/employee/';


  constructor(private http: HttpClient) { }

  getData(): Observable<ResDataModal> {
    return this.http.get<ResDataModal>(this.apiUrl);
  }

  createUser(user: ResDataModal): Observable<ResDataModal> {
    return this.http.post<ResDataModal>(this.apiUrl, user);
  }

  getUserById(id: number): Observable<ResDataModal> {
    return this.http.get<ResDataModal>(this.apiUrl + id);
  }

  updateUser(user: ResDataModal): Observable<ResDataModal> {
    return this.http.put<ResDataModal>(this.apiUrl + user.id, user);
  }

  deleteUser(id: number): Observable<ResDataModal> {
    return this.http.delete<ResDataModal>(this.apiUrl + id);
  }
}
