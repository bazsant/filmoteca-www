import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/app/shared/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cliente-cadastro',
  templateUrl: './cliente-cadastro.component.html',
  styleUrls: ['./cliente-cadastro.component.scss']
})
export class ClienteCadastroComponent implements OnInit {

  userForm = this.fb.group({
    name: ['', Validators.required],
    phone: ['', Validators.required],
    gender: ['', Validators.required],
    email: ['', Validators.required],
    birth: ['', Validators.required]
  });

  constructor(private fb: FormBuilder,
              private userService: UserService) { }

  ngOnInit() {
  }

  onSubmit() {
    this.userService.post(this.userForm.value).subscribe(res => {
      Swal.fire('Sucesso!', 'Cliente inserido com sucesso!', 'success');
    }, err => {
      Swal.fire('Erro!', 'Erro ao inserir cliente', 'error');
    });
  }

}
