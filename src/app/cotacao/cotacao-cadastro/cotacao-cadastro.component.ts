import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { UserService } from 'src/app/shared/services/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { CotacaoService } from 'src/app/shared/services/cotacao.service';
import { FilmeService } from 'src/app/shared/services/filme.service';
import * as moment from 'moment';

@Component({
  selector: 'app-cotacao-cadastro',
  templateUrl: './cotacao-cadastro.component.html',
  styleUrls: ['./cotacao-cadastro.component.scss']
})
export class CotacaoCadastroComponent implements OnInit {

  userForm = this.fb.group({    
    cdCotacao: [''],
    cdFilme: ['', Validators.required],
    cdPessoa: ['', Validators.required],
    vlValor: ['', Validators.required],
    dtEntrega: ['', Validators.required]
  });

  inserir = true;
  id: string;

  clientes= [];
  filmes = [];
  adicionados = [];

  constructor(private fb: FormBuilder,
              private cotacaoService: CotacaoService,
              private userService: UserService,
              private filmeService: FilmeService,
              private route: ActivatedRoute,
              private router: Router) { }

   ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');


    this.userService.get().subscribe(x=> {
      this.clientes = x
    })

    this.filmeService.get().subscribe(x=> {
      this.filmes = x
    })

    
    if (this.id) {
      this.inserir = false;
      this.cotacaoService.getById(this.id).subscribe(res => {
        this.userForm.patchValue(res);
      }, err => {
        console.error(err);

      });
    }

  }

  adicionar(item) {
    
    this.adicionados.push({
      dsTitulo: this.filmes.find(x=> x.cdFilme == item).dsTitulo,
      cdFilme: item
    })
    
  }

  cotar() {    
    const diferenca =this.userForm.get('dtEntrega').value.diff(moment(), 'days') + 1;

    this.userForm.patchValue({
      vlValor: this.adicionados.length * 1.5 * diferenca
    })
  }

  onSubmit() {
    if (this.inserir) {
      this.cotacaoService.post(this.userForm.value).subscribe(() => {
        Swal.fire('Sucesso!', 'Cotação inserida com sucesso!', 'success').then(() => {
          this.router.navigate(['/cotacoes']);
        });
      }, err => {
        console.error(err);
        Swal.fire('Erro!', 'Erro ao inserir cotação', 'error');
      });
    } else {
      this.cotacaoService.put(this.userForm.value).subscribe(() => {
        Swal.fire('Sucesso!', 'Cotação alterada com sucesso!', 'success').then((res) => {
          this.router.navigate(['/cotacoes']);
        });
      }, err => {
        console.error(err);
        Swal.fire('Erro!', 'Erro ao cotação cliente', 'error');
      });
    }
  }

}
