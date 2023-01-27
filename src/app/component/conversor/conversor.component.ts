import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-conversor',
  templateUrl: './conversor.component.html',
  styleUrls: ['./conversor.component.css']
})
export class ConversorComponent {

  @Output() aoConverter = new EventEmitter<any>();

  origem: string;
  destino: string;
  valor: number;

  enviarDados(){
    console.log("funcionou?");
    const valorEmitir = {origem: this.origem, destino: this.destino, valor: this.valor};
    this.aoConverter.emit(valorEmitir);

    this.limparCampos()

}

  limparCampos() {
    this.origem = "";
    this.destino = "";
    this.valor = 0;
}

}
