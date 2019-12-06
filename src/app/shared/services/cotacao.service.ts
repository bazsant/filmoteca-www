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

  getDashboard(): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/cotacaos/dashboard`);
  }

  getById(id): Observable<Cotacao[]> {
    return this.http.get<Cotacao[]>(`${environment.apiUrl}/cotacaos/${id}`);
  }

  getByClientId(id): Observable<Cotacao[]> {
    return this.http.get<Cotacao[]>(`${environment.apiUrl}/cotacaos/cliente/${id}`);
  }

  post(cotacao, diferenca, filme): Observable<Cotacao> {
    return this.http.post<Cotacao>(`${environment.apiUrl}/cotacaos`, {
      CdFilme: filme.cdFilme,
      CdPessoa: cotacao.cdPessoa,
      VlValor: 1.5 * diferenca,
      DtEntregaPrevista: cotacao.dtEntregaPrevista
    });
  }

  postDevolver(cotacoes): Observable<any> {
    return this.http.post<any>(`${environment.apiUrl}/cotacaos/devolver`, cotacoes);
  }

  put(cotacao): Observable<Cotacao[]> {
    return this.http.put<Cotacao[]>(`${environment.apiUrl}/cotacaos/${cotacao.cdCotacao}`, cotacao);
  }

  delete(id): Observable<Cotacao> {
    return this.http.delete<Cotacao>(`${environment.apiUrl}/cotacaos/${id}`);
  }
}
