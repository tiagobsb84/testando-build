import { Component } from '@angular/core';

@Component({
  selector: 'app-pessoal',
  templateUrl: './pessoal.component.html',
  styleUrls: ['./pessoal.component.css']
})
export class PessoalComponent {

  titulo = "Dados pessoais";
  
  urlImagem = "/assets/imagem-foto.webp";

  nome = "";
  sobrenome = "";

}
