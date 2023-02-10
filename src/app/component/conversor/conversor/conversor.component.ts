import { TranferenciaService } from '../../conversor/services/transferir-dados/transferencia.service';
import { Moeda } from '../../../conversor/conversor/models/moeda.models';

import { ConversaoFinal } from '../../../conversor/conversor/models/conversao-final.model';
import { Conversao } from '../../../conversor/conversor/models/conversao.model';
import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalRespostaComponent } from '../../view/modal-resposta/modal-resposta.component';
import { ConversorService } from '../services/conversao/conversor.service';
import { MoedaService } from '../services/moedas/moedas.service';

@Component({
  selector: 'app-conversor',
  templateUrl: './conversor.component.html',
  styleUrls: ['./conversor.component.css']
})
export class ConversorComponent implements OnInit{


  valor: number;
  from: string = 'BRL';
  to: string = 'USD';
  moedasA: Moeda[] = [];
  conversao: Conversao;
  conversaoFinal: ConversaoFinal;
  icon: boolean = true;
  id: number = 0;

  constructor(
    private ConversorService: ConversorService,
    private moedaService: MoedaService,
    private TranferenciaService: TranferenciaService,
    public dialog: MatDialog){

    this.moedaService.getMoedas().subscribe((data: any) => {
      let elements: any[] = Object.values(data.symbols)
      elements.forEach(element => {
        let id = this.moedasA.length;
        let novaMoeda = new Moeda(element.code,element.description, id);
        this.moedasA.push(novaMoeda);

      });
});




  }


  ngOnInit(){

    }

    salvarDados(){
      this.conversordeDolar();
      this.enviarDados();
      this.adicionaId();
    }

  enviarDados(){
    this.ConversorService.converter(new Conversao(this.from,this.to,this.valor)).subscribe((data: any) => {

      const convertido = new ConversaoFinal(data.info.rate, data.date, data.result);


      const valorEmitir = {
        origem: this.from,
        destino: this.to,
        valor: this.valor,
        rates: convertido.base,
        resultado: convertido.resultado,
        valorTrue: this.icon,
        id: this.id
        };



      this.TranferenciaService.adicionar(valorEmitir);
      this.limparCampos();
      this.openDialog(valorEmitir);
      console.log(valorEmitir);

    })

}



  limparCampos() {
    this.from = "";
    this.to = "";
    this.valor = 0;
}

openDialog(valorEmitir:any): void {
  const dialogRef = this.dialog.open(ModalRespostaComponent, {
    data: {valorEmitir}
  });

  dialogRef.afterClosed().subscribe(result => {
    console.log('The dialog was closed');

  });
}

conversordeDolar(){
  this.ConversorService.converter(new Conversao(this.from, this.to, this.valor)).subscribe((data: any) =>  {

    const valorDolar = new ConversaoFinal(data.info.rate, data.date, data.result);

    console.log(valorDolar);
    if(valorDolar.resultado > 10000){
      this.icon = true;
    } else {
      this.icon = false;
    }
  })


  return this.icon;
}

adicionaId(){
  let contador = this.TranferenciaService.historico.length;
  console.log(contador);
  if(contador >= 0){
    this.id = (contador) + 1;
    return this.id;
  }

  console.log(this.id);
  return 0;

}



}





