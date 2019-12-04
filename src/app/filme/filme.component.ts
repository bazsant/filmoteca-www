import { Component, OnInit } from '@angular/core';
import { Filme } from '../shared/models/filme';
import { FilmeService } from '../shared/services/filme.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-filme',
  templateUrl: './filme.component.html',
  styleUrls: ['./filme.component.scss']
})
export class FilmeComponent implements OnInit {

  filmes: Filme[];

  constructor(private filmeService: FilmeService) { }

  ngOnInit() {
    this.buscar();
  }

  buscar(): any {
    this.filmeService.get().subscribe(ret => {
      console.log(ret);
      
      this.filmes = ret;
    });
  }

  excluir(cliente) {
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
        this.filmeService.delete(cliente).subscribe(() => {
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
