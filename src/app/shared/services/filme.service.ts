import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Filme } from '../models/filme';

@Injectable({
  providedIn: 'root'
})
export class FilmeService {

  constructor(private http: HttpClient) { }

  get(): Observable<Filme[]> {
    return this.http.get<Filme[]>(`${environment.apiUrl}/filmes`);
  }

  getById(id): Observable<Filme> {
    return this.http.get<Filme>(`${environment.apiUrl}/filmes/${id}`);
  }

  getByIds(ids): Observable<Filme[]> {
    return this.http.post<Filme[]>(`${environment.apiUrl}/filmes/ids`, ids);
  }

  diminuirEstoque(id): any {
    return this.http.get<any>(`${environment.apiUrl}/filmes/diminuirEstoque/${id}`);
  }

  filmeDevolvido(id): any {
    return this.http.get<any>(`${environment.apiUrl}/filmes/filmeDevolvido/${id}`);
  }

  post(filme): Observable<Filme> {
    return this.http.post<Filme>(`${environment.apiUrl}/filmes`, {
      dsTitulo: filme.dsTitulo,
      dsDiretor: filme.dsDiretor,
      dsElenco: filme.dsElenco,
      dsGenero: filme.dsGenero,
      dsEstudio: filme.dsEstudio,
      dtLancamento: filme.dtLancamento,
      vlEstoque: filme.vlEstoque
    });
  }

  put(filme): Observable<Filme[]> {
    return this.http.put<Filme[]>(`${environment.apiUrl}/filmes/${filme.cdFilme}`, filme);
  }

  delete(id): Observable<Filme> {
    return this.http.delete<Filme>(`${environment.apiUrl}/filmes/${id}`);
  }
}
