import { TranferenciaService } from './services/tranferencia.service';
import { Moeda } from './../../conversor/conversor/models/moeda.models';
import { ConversorService } from './services/conversor.service';
import { ConversaoFinal } from './../../conversor/conversor/models/conversao-final.model';
import { Conversao } from './../../conversor/conversor/models/conversao.model';
import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { MoedaService } from 'src/app/component/conversor/services/moedas.service';
import { MatDialog } from '@angular/material/dialog';
import { ModalRespostaComponent } from '../view/modal-resposta/modal-resposta.component';

@Component({
  selector: 'app-conversor',
  templateUrl: './conversor.component.html',
  styleUrls: ['./conversor.component.css']
})
export class ConversorComponent {
  [x: string]: any;


  @Output() aoConverter = new EventEmitter<any>();

  constructor(
    private ConversorService: ConversorService,
    private moedaService: MoedaService,
    private TranferenciaService: TranferenciaService,
    public dialog: MatDialog){

    this.moedaService.getMoedas().subscribe((data: any) => {
      let elements: any[] = Object.values(data.symbols)
      elements.forEach(element => {
        let novaMoeda = new Moeda(element.code,element.description)
        this.moedasA.push(novaMoeda);
      });
});
  }



  valor: number;
  from: string = 'BRL';
  to: string = 'USD';
  moedasA: Moeda[] = [];
  conversao: Conversao;
  conversaoFinal: ConversaoFinal;

  enviarDados(){
    this.ConversorService.converter(new Conversao(this.from,this.to,this.valor)).subscribe((data: any) => {
      const convertido = new ConversaoFinal(data.info.rate,data.date,data.result);
      console.log(data);
      console.log(convertido);

      const valorEmitir = {origem: this.from, destino: this.to, valor: this.valor, rates: convertido.base, resultado: convertido.rates };

      this.TranferenciaService.adicionar(valorEmitir);



      this.aoConverter.emit(valorEmitir);
      this.limparCampos();
    })

}



  limparCampos() {
    this.from = "";
    this.to = "";
    this.conversao.valor = 0;
}

openDialog(): void {
  const dialogRef = this.dialog.open(ModalRespostaComponent, {

  });

  dialogRef.afterClosed().subscribe(result => {
    console.log('The dialog was closed');

  });
}
}



