import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../../../views/home/home/models/createUser';
import { environment } from '../../../../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {


  constructor(private http: HttpClient) { }

  createItem(url:string ,user: any): Observable<User> {
    return this.http.post<User>(`${environment.baseApiUrl}/${url}`, user);
  }
  getItems(url:string): Observable<any[]> {
    return this.http.get<any[]>(`${environment.baseApiUrl}/${url}`);
  }

  getItem(url:string ,id: number): Observable<any> {
    return this.http.get<any>(`${environment.baseApiUrl}/${url}/${id}`);
  }

  updateItem( url:string, item: any): Observable<any> {
    return this.http.put(`${environment.baseApiUrl}/${url}/${item.id}`, item);
  }

  deleteItem(url:string ,id: number): Observable<any> {
    return this.http.delete(`${environment.baseApiUrl}/${url}/${id}`);
  }
}

