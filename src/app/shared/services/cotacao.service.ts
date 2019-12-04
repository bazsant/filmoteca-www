import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Cotacao } from '../models/cotacao';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CotacaoService {

  constructor(private http: HttpClient) { }

  get(): Observable<Cotacao[]> {
    return this.http.get<Cotacao[]>(`${environment.apiUrl}/cotacaos`);
  }

  getById(id): Observable<Cotacao[]> {
    return this.http.get<Cotacao[]>(`${environment.apiUrl}/cotacaos/${id}`);
  }

  post(cotacao): Observable<Cotacao> {
    return this.http.post<Cotacao>(`${environment.apiUrl}/cotacaos`, {      
      CdFilme: cotacao.cdFilme,
      CdPessoa: cotacao.cdPessoa,
      VlValor: cotacao.vlValor,
      DtEntrega: cotacao.dtEntrega
    });
  }

  put(cotacao): Observable<Cotacao[]> {
    return this.http.put<Cotacao[]>(`${environment.apiUrl}/cotacaos/${cotacao.cdCotacao}`, cotacao);
  }

  delete(id): Observable<Cotacao> {
    return this.http.delete<Cotacao>(`${environment.apiUrl}/cotacaos/${id}`);
  }
}
