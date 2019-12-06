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
    return this.http.get<User[]>(`${environment.apiUrl}/pessoas`);
  }

  getById(id): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/pessoas/${id}`);
  }

  post(user): Observable<User> {
    return this.http.post<User>(`${environment.apiUrl}/pessoas`, {
      nmPessoa: user.nmPessoa,
      dtNascimento: user.dtNascimento,
      cdSexo: user.cdSexo,
      dsEmail: user.dsEmail,
      dsTelefone: user.dsTelefone
    });
  }

  put(user): Observable<User[]> {
    return this.http.put<User[]>(`${environment.apiUrl}/pessoas/${user.cdPessoa}`, user);
  }

  delete(id): Observable<User> {
    return this.http.delete<User>(`${environment.apiUrl}/pessoas/${id}`);
  }
}
