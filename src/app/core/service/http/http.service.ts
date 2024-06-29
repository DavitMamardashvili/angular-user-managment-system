import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../../../views/home/home/models/createUser';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private apiUrl = ''; 

  constructor(private http: HttpClient) { }

  createItem(user: User): Observable<User> {
    return this.http.post<User>(`https://localhost:7157/api/User/AddUser`, user);
  }
  getItems(): Observable<any[]> {
    return this.http.get<any[]>('https://localhost:7157/api/User/GetAllUsers');
  }

  getItem(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  updateItem( item: any): Observable<any> {
    return this.http.put(`${'https://localhost:7157/api/User'}/${item.id}`, item);
  }

  deleteItem(id: number): Observable<any> {
    return this.http.delete(`https://localhost:7157/api/User/${id}`);
  }
}

