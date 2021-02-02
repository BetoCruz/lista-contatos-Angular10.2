import { Component } from '@angular/core';
import { ContatoModel} from './modelos/contato-model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ListaAngular10';

  infoId: ContatoModel;

getId(valorPassado){
  this.infoId = valorPassado;
  return this.infoId
}
           
}
