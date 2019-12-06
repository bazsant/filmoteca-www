import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { LOCALE_ID } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatListModule } from '@angular/material/list';
import { MatMomentDateModule, MAT_MOMENT_DATE_ADAPTER_OPTIONS } from '@angular/material-moment-adapter';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { NgxMaskModule, IConfig } from 'ngx-mask';

import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ClienteComponent } from './cliente/cliente.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { ClienteCadastroComponent } from './cliente/cliente-cadastro/cliente-cadastro.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { AuthGuardService } from './guards/auth-guard.service';
import { FilmeComponent } from './filme/filme.component';
import { FilmeCadastroComponent } from './filme/filme-cadastro/filme-cadastro.component';
import { CotacaoComponent } from './cotacao/cotacao.component';
import { CotacaoCadastroComponent } from './cotacao/cotacao-cadastro/cotacao-cadastro.component';

import { EntregarComponent } from './entregar/entregar.component';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', component: HomeComponent, canActivate: [AuthGuardService] },

  // clientes
  { path: 'clientes', component: ClienteComponent, canActivate: [AuthGuardService] },
  { path: 'clientes/cadastro', component: ClienteCadastroComponent, canActivate: [AuthGuardService] },
  { path: 'clientes/editar/:id', component: ClienteCadastroComponent, canActivate: [AuthGuardService] },

  // filmes
  { path: 'filmes', component: FilmeComponent, canActivate: [AuthGuardService] },
  { path: 'filmes/cadastro', component: FilmeCadastroComponent, canActivate: [AuthGuardService] },
  { path: 'filmes/editar/:id', component: FilmeCadastroComponent, canActivate: [AuthGuardService] },

  // filmes
  { path: 'cotacoes', component: CotacaoComponent, canActivate: [AuthGuardService] },
  { path: 'cotacoes/cadastro', component: CotacaoCadastroComponent, canActivate: [AuthGuardService] },
  { path: 'cotacoes/editar/:id', component: CotacaoCadastroComponent, canActivate: [AuthGuardService] },

  { path: 'entregar', component: EntregarComponent, canActivate: [AuthGuardService] },

  { path: 'sobre', component: AboutComponent, canActivate: [AuthGuardService] },
  { path: '**', component: PageNotFoundComponent, canActivate: [AuthGuardService] }
];

registerLocaleData(localePt, 'pt');
@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    ClienteComponent,
    HeaderComponent,
    HomeComponent,
    ClienteCadastroComponent,
    AboutComponent,
    LoginComponent,
    FilmeComponent,
    FilmeCadastroComponent,
    CotacaoComponent,
    CotacaoCadastroComponent,
    EntregarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    NgbModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatRadioModule,
    MatButtonModule,
    MatDatepickerModule,
    MatMomentDateModule,
    MatListModule,
    MatInputModule,
    MatCardModule,
    MatSelectModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot()
  ],
  providers: [
    AuthGuardService,
    { provide: LOCALE_ID, useValue: 'pt' },
    { provide: MAT_MOMENT_DATE_ADAPTER_OPTIONS, useValue: { useUtc: true } }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
