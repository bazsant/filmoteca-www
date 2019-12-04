import { Component, OnInit } from '@angular/core';
import { CotacaoService } from '../shared/services/cotacao.service';
import Swal from 'sweetalert2';
import { FilmeService } from '../shared/services/filme.service';
import { UserService } from '../shared/services/user.service';

@Component({
  selector: 'app-cotacao',
  templateUrl: './cotacao.component.html',
  styleUrls: ['./cotacao.component.scss']
})
export class CotacaoComponent implements OnInit {

  cotacoes = [];
  pessoas = [];
  filmes = [];

  constructor(private cotacaoService: CotacaoService,
    private filmeService: FilmeService,
    private pessoasService: UserService) { }

  ngOnInit() {
    this.buscar();
  }

  buscar(): any {


    this.cotacaoService.get().subscribe(ret => {
      this.cotacoes = ret;
    });
  }

  excluir(cotacao) {
    Swal.fire({
      title: 'Tem certeza?',
      text: 'Você não poderá reverter esta ação!',
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sim, exclua!',
      cancelButtonText: 'Nãããão!'
    }).then((result) => {
      if (result.value) {
        this.cotacaoService.delete(cotacao).subscribe(() => {
          Swal.fire(
            'Excluído!',
            'Excluído com sucesso.',
            'success'
          ).then(() => {
            this.buscar();
          });
        }, err => {
          console.error(err);

          Swal.fire(
            'Erro!',
            'Houve erro na exclusão.',
            'error'
          );
        });
      }
    });
  }

}
