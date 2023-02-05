import { Moeda } from './../../conversor/conversor/models/moeda.models';
import { ConversorService } from './../../conversor/services/conversor.service';
import { ConversaoFinal } from './../../conversor/conversor/models/conversao-final.model';
import { Conversao } from './../../conversor/conversor/models/conversao.model';
import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { MoedaService } from 'src/app/conversor/services/moedas.service';

@Component({
  selector: 'app-conversor',
  templateUrl: './conversor.component.html',
  styleUrls: ['./conversor.component.css']
})
export class ConversorComponent {
  [x: string]: any;

  @Output() aoConverter = new EventEmitter<any>();

  constructor(private ConversorService: ConversorService,  private moedaService: MoedaService){
    this.moedaService.getMoedas().subscribe((data: any) => {
      let elements: any[] = Object.values(data.symbols)
      elements.forEach(element => {
        let novaMoeda = new Moeda(element.code,element.description)
        this.moedasA.push(novaMoeda);
      });
});
  }



  selected: string = 'BRL';
  selected2: string = 'USD';
  moedasA: Moeda[] = [];
  conversao: Conversao;
  conversaoFinal: ConversaoFinal;

  enviarDados(){
    this.ConversorService.converter(new Conversao(this.selected,this.selected2,this.valor)).subscribe((data: any) => {
      const convertido = new ConversaoFinal(data.info.rate,data.date,data.result);
      console.log(data);
      console.log(convertido);

      const valorEmitir = {origem: this.selected, destino: this.selected2, valor: this.valor, base: convertido.base};
      this.aoConverter.emit(valorEmitir);
      this.limparCampos();
    })

}



  limparCampos() {
    //this.conversao.from = "";
    //this.conversao.to = "";
    //this.conversao.valor = 0;
}




}


