import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/services/user.service';
import { User } from '../shared/models/user';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.scss']
})
export class ClienteComponent implements OnInit {

  users: User[];

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.buscar();
  }

  buscar(): any {
    this.userService.get().subscribe(ret => {
      this.users = ret;
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
        this.userService.delete(cliente).subscribe(ret => {
          Swal.fire(
            'Excluído!',
            'O usuário foi excluído.',
            'success'
          ).then(result => {
            this.buscar();
          });
        }, err => {
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
