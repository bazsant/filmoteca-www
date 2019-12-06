import { Component, OnInit } from '@angular/core';
import { CotacaoService } from '../shared/services/cotacao.service';
import { UserService } from '../shared/services/user.service';
import { FilmeService } from '../shared/services/filme.service';
import * as moment from 'moment';
import { Cotacao } from '../shared/models/cotacao';
import { Validators, FormBuilder } from '@angular/forms';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { User } from '../shared/models/user';

@Component({
  selector: 'app-entregar',
  templateUrl: './entregar.component.html',
  styleUrls: ['./entregar.component.scss']
})
export class EntregarComponent implements OnInit {

  constructor(private fb: FormBuilder,
    private router: Router,
    private cotacaoService: CotacaoService,
    private pessoaService: UserService,
    private filmesService: FilmeService) { }

  adicionados: any = [];
  cotacoes: Cotacao[] = [];
  valor: any;
  clientes: User[] = [];

  userForm = this.fb.group({
    cdPessoa: ['', Validators.required]
  });

  ngOnInit() {
    this.pessoaService.get().subscribe(ret => {
      this.clientes = ret;
    })
  }

  buscar(cliente) {

    const filmes = [];

    this.cotacaoService.getByClientId(cliente).subscribe(ret => {
      ret.map(x => filmes.push(x.cdFilme));
      this.cotacoes = ret;
      this.filmesService.getByIds(filmes).subscribe(films => {
        this.adicionados = films;
      });
    });
  }

  retirar(item) {
    this.adicionados.splice(this.adicionados.indexOf(item), 1);
  }

  cotar() {
    this.valor = 0;

    this.cotacoes.map(x => {

      const diferenca = moment(x.dtEntregaPrevista).diff(moment(), 'days');

      this.valor += x.vlValor;

      if (moment(x.dtEntregaPrevista) <= moment() && diferenca > 0) {
        this.valor += diferenca * 1;
      }
    });

  }

  onSubmit() {
    const cots = [];

    this.cotacoes.map(x => cots.push({
      cdCotacao: x.cdCotacao,
      vlValor: x.vlValor
    }));

    this.cotacaoService.postDevolver(cots).subscribe(x => {
      Swal.fire('Sucesso!', 'Filmes devolvidos com sucesso!', 'success').then(() => {
        this.router.navigate(['/']);
      });
    }, err => {
      console.error(err);
      Swal.fire('Erro!', 'Erro ao devolver filmes', 'error');
    });
  }
}
