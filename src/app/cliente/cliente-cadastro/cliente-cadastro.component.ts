import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/app/shared/services/user.service';
import Swal from 'sweetalert2';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cliente-cadastro',
  templateUrl: './cliente-cadastro.component.html',
  styleUrls: ['./cliente-cadastro.component.scss']
})
export class ClienteCadastroComponent implements OnInit {

  userForm = this.fb.group({    
    cdPessoa: [''],
    nmPessoa: ['', Validators.required],
    dsTelefone: ['', Validators.required],
    cdSexo: ['', Validators.required],
    dsEmail: ['', Validators.required],
    dtNascimento: ['', Validators.required]
  });

  inserir = true;
  id: string;

  constructor(private fb: FormBuilder,
              private userService: UserService,
              private route: ActivatedRoute,
              private router: Router) { }

   ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');

    if (this.id) {
      this.inserir = false;
      this.userService.getById(this.id).subscribe(res => {
        this.userForm.patchValue(res);
      }, err => {
        console.error(err);

      });
    }

  }

  onSubmit() {
    if (this.inserir) {
      this.userService.post(this.userForm.value).subscribe(() => {
        Swal.fire('Sucesso!', 'Cliente inserido com sucesso!', 'success').then(() => {
          this.router.navigate(['/clientes']);
        });
      }, err => {
        console.error(err);
        Swal.fire('Erro!', 'Erro ao inserir cliente', 'error');
      });
    } else {
      this.userService.put(this.userForm.value).subscribe(() => {
        Swal.fire('Sucesso!', 'Cliente alterado com sucesso!', 'success').then((res) => {
          this.router.navigate(['/clientes']);
        });
      }, err => {
        console.error(err);
        Swal.fire('Erro!', 'Erro ao alterar cliente', 'error');
      });
    }
  }

}
