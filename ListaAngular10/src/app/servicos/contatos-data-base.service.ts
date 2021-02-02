import { Injectable, EventEmitter, Output } from '@angular/core';

import { ContatoModel } from '../modelos/contato-model'

@Injectable({
  providedIn: 'root'
})
export class ContatosDataBaseService {

  //Armazena dados do formulario.
   meuContatos: ContatoModel [] = [];

   //Envia os dados recebidos por (evet)
   enviarContato = new EventEmitter();

   

  constructor() {}

  setContato(novoContato: ContatoModel):void{
    this.meuContatos.push(novoContato);

    this.enviarContato.emit(this.meuContatos);
  }

  getContato(id:number): ContatoModel {
    let contato: ContatoModel;
    contato = this.meuContatos[id];
    return contato;
  }

}
