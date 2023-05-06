import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PessoalComponent } from './componentes/pessoal/pessoal.component';
import { FormsModule } from '@angular/forms';
import { ListaProdutosComponent } from './componentes/lista-produtos/lista-produtos.component';

@NgModule({
  declarations: [
    AppComponent,
    PessoalComponent,
    ListaProdutosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
