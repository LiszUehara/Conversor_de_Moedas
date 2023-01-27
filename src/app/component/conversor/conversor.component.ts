import { Component } from '@angular/core';

@Component({
  selector: 'app-conversor',
  templateUrl: './conversor.component.html',
  styleUrls: ['./conversor.component.css']
})
export class ConversorComponent {

  origem: number;
  destino: number;
  valor: number;

  transferir(){
    console.log("funcionou?");
    console.log(this.origem);
    console.log(this.destino);
  }

}
