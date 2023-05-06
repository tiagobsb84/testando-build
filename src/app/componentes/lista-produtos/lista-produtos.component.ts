import { Component } from '@angular/core';

@Component({
  selector: 'app-lista-produtos',
  templateUrl: './lista-produtos.component.html',
  styleUrls: ['./lista-produtos.component.css']
})
export class ListaProdutosComponent {

  produtos =  [
    {id: 1, nome: 'chocolate', descricao: 'chocolate branco', estoque: true},
    {id: 2, nome: 'bombom garoto', estoque: false},
    {id: 3, nome: 'leite condensado', descricao: 'delícia', estoque: true}
  ]
}
