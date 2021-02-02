import { Component, OnInit, Output, EventEmitter } from '@angular/core';


import { ContatoModel } from '../modelos/contato-model';
import { ContatosDataBaseService } from '../servicos/contatos-data-base.service';

@Component({
  selector: 'app-lista-usuario',
  templateUrl: './lista-usuario.component.html',
  styleUrls: ['./lista-usuario.component.css']
})
export class ListaUsuarioComponent implements OnInit {
  
  //Array alimentado pelo metodo subscribe(...)...
  listaDeContatos: ContatoModel [] = [];
  @Output() idClicado = new EventEmitter();

  constructor(private dataBaseService: ContatosDataBaseService){}

  ngOnInit(): void {
    // O valor da variavel emitida por contatos-data-base 'enviacontatos' 
    this.dataBaseService.enviarContato.subscribe(contatos => this.listaDeContatos = contatos);
  }
  
  // Captura o index da listagem realizada no ngFor 
  contatoClicado(item: number) {
    let dadosPerfil: ContatoModel;

    dadosPerfil = this.dataBaseService.getContato(item);
    
    this.idClicado.emit(dadosPerfil);
  }


}
