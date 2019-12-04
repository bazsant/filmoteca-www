import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { FilmeService } from 'src/app/shared/services/filme.service';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-filme-cadastro',
  templateUrl: './filme-cadastro.component.html',
  styleUrls: ['./filme-cadastro.component.scss']
})
export class FilmeCadastroComponent implements OnInit {

  filmeForm = this.fb.group({
    cdFilme: [''],
    dsTitulo: ['', Validators.required],
    dsDiretor: ['', Validators.required],
    dsElenco: ['', Validators.required],
    dsGenero: ['', Validators.required],
    dsEstudio: ['', Validators.required],
    dtLancamento: ['', Validators.required]
  });

  inserir = true;
  id: string;

  constructor(private fb: FormBuilder,
    private filmeService: FilmeService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');

    if (this.id) {
      this.inserir = false;
      this.filmeService.getById(this.id).subscribe(res => {
        this.filmeForm.patchValue(res);
      }, err => {
        console.error(err);

      });
    }

  }

  onSubmit() {
    if (this.inserir) {
      this.filmeService.post(this.filmeForm.value).subscribe(() => {
        Swal.fire('Sucesso!', 'Filme inserido com sucesso!', 'success').then(() => {
          this.router.navigate(['/filmes']);
        });
      }, err => {
        console.error(err);
        Swal.fire('Erro!', 'Filme ao inserir cliente', 'error');
      });
    } else {
      this.filmeService.put(this.filmeForm.value).subscribe(() => {
        Swal.fire('Sucesso!', 'Filme alterado com sucesso!', 'success').then((res) => {
          this.router.navigate(['/filmes']);
        });
      }, err => {
        console.error(err);
        Swal.fire('Erro!', 'Erro ao alterar filme', 'error');
      });
    }
  }

}
