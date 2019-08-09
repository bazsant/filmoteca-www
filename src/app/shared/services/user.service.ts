import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  get(): Observable<User[]> {
    return this.http.get<User[]>(`${environment.apiUrl}/users`);
  }

  getById(id): Observable<User[]> {
    return this.http.get<User[]>(`${environment.apiUrl}/users/${id}`);
  }

  post(user): Observable<User> {
    return this.http.post<User>(`${environment.apiUrl}/users`, user);
  }

  put(user): Observable<User[]> {
    return this.http.put<User[]>(`${environment.apiUrl}/users`, user);
  }

  delete(id): Observable<User> {
    return this.http.delete<User>(`${environment.apiUrl}/users/${id}`);
  }
}
