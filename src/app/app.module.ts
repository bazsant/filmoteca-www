import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { LOCALE_ID } from '@angular/core';

import { MatToolbarModule, MatButtonModule, MatFormFieldModule, MatRadioModule,
   MatDatepickerModule, MatInputModule } from '@angular/material';
import { MatMomentDateModule, MAT_MOMENT_DATE_ADAPTER_OPTIONS } from '@angular/material-moment-adapter';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import {NgxMaskModule} from 'ngx-mask';

import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ClienteComponent } from './cliente/cliente.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { ClienteCadastroComponent } from './cliente/cliente-cadastro/cliente-cadastro.component';
import { AboutComponent } from './about/about.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'clientes', component: ClienteComponent },
  { path: 'clientes/cadastro', component: ClienteCadastroComponent },
  { path: 'clientes/editar/:id', component: ClienteCadastroComponent },
  { path: 'sobre', component: AboutComponent },
  { path: '**', component: PageNotFoundComponent }
];

registerLocaleData(localePt, 'pt');
export const options: Partial<IConfig> | (() => Partial<IConfig>);
@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    ClienteComponent,
    HeaderComponent,
    HomeComponent,
    ClienteCadastroComponent,
    AboutComponent
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
    MatInputModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot(options)
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt' },
    { provide: MAT_MOMENT_DATE_ADAPTER_OPTIONS, useValue: { useUtc: true } }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
