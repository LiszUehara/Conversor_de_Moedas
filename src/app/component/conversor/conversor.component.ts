import { ConversaoFinal } from './../../conversor/conversor/models/conversao-final.model';
import { Conversao } from './../../conversor/conversor/models/conversao.model';
import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { Moeda } from 'src/app/conversor/conversor/models/moeda.models';

@Component({
  selector: 'app-conversor',
  templateUrl: './conversor.component.html',
  styleUrls: ['./conversor.component.css']
})
export class ConversorComponent {
  [x: string]: any;

  @Output() aoConverter = new EventEmitter<any>();

  constructor(){

  }

  conversao_inicial: Conversao;
  retorno: ConversaoFinal;


  origem: string;

  destino: string;
  valor: number;
  base: string;
  rates: any;

  selected: string = 'option 2';
  moedasA: string[] = ["a","b","c"];


  enviarDados(){
    const valorEmitir = {origem: this.origem, destino: this.destino, valor: this.valor, base: this.base};
    this.aoConverter.emit(valorEmitir);

    this.limparCampos()
    
}


  limparCampos() {
    this.origem = "";
    this.destino = "";
    this.valor = 0;
}

}
