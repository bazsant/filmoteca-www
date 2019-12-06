import { Component, OnInit } from '@angular/core';
import { FilmeService } from '../shared/services/filme.service';
import { CotacaoService } from '../shared/services/cotacao.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  filmes: any;

  constructor() { }

  ngOnInit() {

  }

}
