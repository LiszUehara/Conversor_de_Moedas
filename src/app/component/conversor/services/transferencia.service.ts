import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TranferenciaService {

  private listarHistorico: any[];

  constructor() {
    this.listarHistorico = [];
   }

   get historico(){
    return this.listarHistorico;
   }

   adicionar(historico: any){
    this.adicionarData(historico);
    this.listarHistorico.push(historico);

   }

   private adicionarData(transferencia: any){
    transferencia.data = new Date();
   }

   recuperar(){
    return this.listarHistorico.lastIndexOf(this.historico);
   }

   deletar(historico: any){

      console.log("chamando service de deleter");

   }

}
